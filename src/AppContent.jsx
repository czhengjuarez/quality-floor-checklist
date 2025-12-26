import React, { useState, useEffect, useCallback } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, onSnapshot, doc, deleteDoc, updateDoc, query, writeBatch } from 'firebase/firestore';
import { useTheme } from './contexts/ThemeContext';

const firebaseConfig = {
  apiKey: "AIzaSyBRQWdE55HMYzJ0RDsA-jl7nbesYPdhAL8",
  authDomain: "quality-floor-checklist.firebaseapp.com",
  projectId: "quality-floor-checklist",
  storageBucket: "quality-floor-checklist.appspot.com",
  messagingSenderId: "1027144107541",
  appId: "1:1027144107541:web:7498803d7861c3b783701c",
  measurementId: "G-C5ECWEVGW1"
};

const appId = 'quality-floor-checklist';

export default function AppContent() {
    const { isDarkMode, toggleDarkMode } = useTheme();
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [userId, setUserId] = useState(null);
    const [db, setDb] = useState(null);
    const [showDisclaimer, setShowDisclaimer] = useState(true);
    const [isAuthReady, setIsAuthReady] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState('');

    useEffect(() => {
        try {
            const app = initializeApp(firebaseConfig);
            const auth = getAuth(app);
            setDb(getFirestore(app));

            const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
                if (user) {
                    setUserId(user.uid);
                    setIsAuthReady(true);
                } else {
                    try {
                        await signInAnonymously(auth);
                    } catch (authError) {
                        console.error("Error signing in anonymously:", authError);
                    }
                }
            });
            return () => unsubscribeAuth();
        } catch (error) {
            console.error("Firebase initialization error:", error);
        }
    }, []);

    const addStarterItems = useCallback(async (firestoreDb, path) => {
      const starterItems = [
          { category: "Code Review Standards", text: "Code is reviewed by at least one other team member before merging" },
          { category: "Code Review Standards", text: "Pull requests include clear descriptions of changes and reasoning" },
          { category: "Code Review Standards", text: "Code follows established style guides and linting rules" },
          { category: "Code Review Standards", text: "No commented-out code or debug statements in production" },
          
          { category: "Testing Standards", text: "All new features have corresponding unit tests with >80% coverage" },
          { category: "Testing Standards", text: "Critical user paths have end-to-end tests" },
          { category: "Testing Standards", text: "Tests are run and passing before deployment" },
          { category: "Testing Standards", text: "Edge cases and error scenarios are tested" },
          
          { category: "Accessibility Standards", text: "Accessibility (WCAG 2.1 AA) standards are met" },
          { category: "Accessibility Standards", text: "All interactive elements are keyboard navigable" },
          { category: "Accessibility Standards", text: "Images have descriptive alt text" },
          { category: "Accessibility Standards", text: "Color contrast ratios meet minimum requirements (4.5:1)" },
          { category: "Accessibility Standards", text: "Screen reader testing completed for key features" },
          
          { category: "Performance Standards", text: "Performance metrics (LCP, FID, CLS) are within budget" },
          { category: "Performance Standards", text: "Page load time is under 3 seconds on 3G" },
          { category: "Performance Standards", text: "Images are optimized and properly sized" },
          { category: "Performance Standards", text: "Unnecessary dependencies are removed" },
          { category: "Performance Standards", text: "Bundle size is monitored and kept minimal" },
          
          { category: "Security Standards", text: "Security vulnerabilities are scanned and addressed" },
          { category: "Security Standards", text: "User input is validated and sanitized" },
          { category: "Security Standards", text: "Authentication and authorization are properly implemented" },
          { category: "Security Standards", text: "Sensitive data is encrypted in transit and at rest" },
          
          { category: "Design Standards", text: "Design system components are used consistently" },
          { category: "Design Standards", text: "UI matches approved design specifications and mockups" },
          { category: "Design Standards", text: "Responsive design works across mobile, tablet, and desktop" },
          { category: "Design Standards", text: "Visual hierarchy and spacing follow design guidelines" },
          { category: "Design Standards", text: "Brand colors, typography, and assets are used correctly" },
          
          { category: "Documentation Standards", text: "README is updated with setup and deployment instructions" },
          { category: "Documentation Standards", text: "API endpoints are documented" },
          { category: "Documentation Standards", text: "Complex logic includes inline comments" },
          { category: "Documentation Standards", text: "Breaking changes are clearly communicated to the team" }
      ];
      const batch = writeBatch(firestoreDb);
      const collectionRef = collection(firestoreDb, path);
      starterItems.forEach(item => {
          const newDocRef = doc(collectionRef);
          batch.set(newDocRef, { 
              text: item.text, 
              category: item.category,
              createdAt: new Date(), 
              creatorId: 'system' 
          });
      });
      try {
          await batch.commit();
      } catch (error) {
          console.error("Error adding starter items: ", error);
      }
    }, []);

    useEffect(() => {
        if (!isAuthReady || !db) return;

        const collectionPath = `artifacts/${appId}/public/data/todos`;
        const todosCollection = collection(db, collectionPath);
        const q = query(todosCollection);
        let startersAdded = false;

        const unsubscribeFirestore = onSnapshot(q, (snapshot) => {
            if (snapshot.empty && !startersAdded) {
                startersAdded = true;
                addStarterItems(db, collectionPath);
                return;
            }
            const todosData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTodos(todosData);
        }, (error) => {
            console.error("Error listening to Firestore: ", error);
        });

        return () => unsubscribeFirestore();
    }, [isAuthReady, db, addStarterItems]);

    const addTodoItem = useCallback(async () => {
        if (inputValue.trim() === '' || !userId || !db) return;
        const collectionPath = `artifacts/${appId}/public/data/todos`;
        try {
            await addDoc(collection(db, collectionPath), {
                text: inputValue.trim(),
                createdAt: new Date(),
                creatorId: userId
            });
            setInputValue('');
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }, [inputValue, userId, db]);

    const deleteTodoItem = useCallback(async (id) => {
        if (!db) return;
        const docPath = `artifacts/${appId}/public/data/todos/${id}`;
        try {
            await deleteDoc(doc(db, docPath));
        } catch (error) {
            console.error("Error removing document: ", error);
        }
    }, [db]);

    const updateTodoItem = useCallback(async (id, newText) => {
        if (!db || !newText.trim()) return;
        const docPath = `artifacts/${appId}/public/data/todos/${id}`;
        try {
            const docRef = doc(db, docPath);
            await updateDoc(docRef, { text: newText.trim(), updatedAt: new Date() });
            setEditingId(null);
            setEditingText('');
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    }, [db]);

    const startEditing = useCallback((id, text) => {
        setEditingId(id);
        setEditingText(text);
    }, []);

    const cancelEditing = useCallback(() => {
        setEditingId(null);
        setEditingText('');
    }, []);

    const exportToPDF = () => {
        if (!window.jspdf) {
            console.error("jsPDF library not found.");
            return;
        }
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text("Quality Floor Checklist", 14, 22);
        doc.setFontSize(11);
        todos.forEach((todo, index) => {
            doc.text(`- ${todo.text}`, 14, 30 + (index * 10));
        });
        doc.save("quality-checklist.pdf");
    };

    const exportToCSV = () => {
        let csvContent = "data:text/csv;charset=utf-8,Quality Standard\r\n";
        todos.forEach(todo => {
            const row = `"${todo.text.replace(/"/g, '""')}"`;
            csvContent += row + "\r\n";
        });
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "quality-checklist.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const clearAllItems = useCallback(async () => {
        if (!db) return;
        if (!window.confirm('This will permanently delete ALL items from the database. This action cannot be undone. Are you sure?')) {
            return;
        }
        const collectionPath = `artifacts/${appId}/public/data/todos`;
        try {
            // Delete all existing items in batches
            if (todos.length > 0) {
                const deletePromises = [];
                for (let i = 0; i < todos.length; i += 500) {
                    const batch = writeBatch(db);
                    const batchItems = todos.slice(i, i + 500);
                    batchItems.forEach(todo => {
                        const docRef = doc(db, `${collectionPath}/${todo.id}`);
                        batch.delete(docRef);
                    });
                    deletePromises.push(batch.commit());
                }
                await Promise.all(deletePromises);
            }
        } catch (error) {
            console.error("Error clearing all items: ", error);
            alert('Failed to clear items. Please try again.');
        }
    }, [db, todos]);

    const clearAllAndReset = useCallback(async () => {
        if (!db) return;
        if (!window.confirm('This will delete all current items and load the comprehensive default checklist. Are you sure?')) {
            return;
        }
        const collectionPath = `artifacts/${appId}/public/data/todos`;
        try {
            // Delete all existing items in batches
            if (todos.length > 0) {
                const deletePromises = [];
                for (let i = 0; i < todos.length; i += 500) {
                    const batch = writeBatch(db);
                    const batchItems = todos.slice(i, i + 500);
                    batchItems.forEach(todo => {
                        const docRef = doc(db, `${collectionPath}/${todo.id}`);
                        batch.delete(docRef);
                    });
                    deletePromises.push(batch.commit());
                }
                await Promise.all(deletePromises);
            }
            
            // Wait a moment for deletions to propagate
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // Now add the starter items
            await addStarterItems(db, collectionPath);
        } catch (error) {
            console.error("Error clearing and resetting: ", error);
            alert('Failed to reset checklist. Please try again.');
        }
    }, [db, todos, addStarterItems]);

    if (showDisclaimer) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
                <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg max-w-md w-[90%] text-left`}>
                    <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Terms of Use & Disclaimer</h2>
                    <div className={`space-y-3 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
                      <p>Welcome to the Quality Floor Checklist Builder. Before you begin, please read the following terms carefully:</p>
                      <ol className="list-decimal list-inside space-y-2">
                        <li><strong>Public and Collaborative:</strong> All content, including any checklist items you add or delete, is public and will be visible to anyone who visits this page. Do not enter any private, sensitive, or confidential information.</li>
                        <li><strong>No Guarantee of Privacy:</strong> There is no expectation of privacy for any data entered into this application. All data is stored in a shared database.</li>
                        <li><strong>"As-Is" Service:</strong> This tool is provided "as-is" without any warranties. We are not responsible for the availability of the service or the loss of any data you enter.</li>
                        <li><strong>User Responsibility:</strong> You are solely responsible for the content you contribute. Do not post anything that is unlawful, harmful, or infringes on the rights of others.</li>
                      </ol>
                      <p className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>By clicking "Acknowledge & Continue," you confirm that you have read, understood, and agree to be bound by these terms.</p>
                    </div>
                    <button 
                      onClick={() => setShowDisclaimer(false)} 
                      className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-lg transition"
                    >
                      Acknowledge & Continue
                    </button>
                </div>
            </div>
        );
    }

    return (
      <div className={`min-h-screen ${isDarkMode ? 'dark bg-dark-bg' : 'bg-gray-50'}`}>
          {/* Header */}
          <header className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Quality Floor Checklist
                  </h1>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    A collaborative list of non-negotiable minimums for our projects
                  </p>
                </div>
                
                {/* Dark Mode Toggle */}
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-lg ${
                    isDarkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } transition-colors`}
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Welcome Section with Feature Cards */}
            {todos.length === 0 && isAuthReady && (
              <div className="text-center py-16 mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                } mb-4`}>
                  <svg className={`w-8 h-8 ${isDarkMode ? 'text-secondary' : 'text-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                
                <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Welcome to Quality Floor Checklist
                </h2>
                <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Define and maintain your team's quality standards
                </p>
                
                <div className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left`}>
                  <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                    <div className={`w-10 h-10 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-primary bg-opacity-10'} flex items-center justify-center mb-3`}>
                      <svg className={`w-6 h-6 ${isDarkMode ? 'text-secondary' : 'text-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Collaborative
                    </h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Share with your team and build standards together in real-time
                    </p>
                  </div>
                  
                  <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                    <div className={`w-10 h-10 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-primary bg-opacity-10'} flex items-center justify-center mb-3`}>
                      <svg className={`w-6 h-6 ${isDarkMode ? 'text-secondary' : 'text-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Quality Standards
                    </h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Define clear, non-negotiable minimums for your projects
                    </p>
                  </div>
                  
                  <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
                    <div className={`w-10 h-10 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-primary bg-opacity-10'} flex items-center justify-center mb-3`}>
                      <svg className={`w-6 h-6 ${isDarkMode ? 'text-secondary' : 'text-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </div>
                    <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Export Options
                    </h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Export to PDF or CSV for easy sharing and documentation
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Add Item Section */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
              <div className="flex flex-col sm:flex-row gap-4">
                  <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addTodoItem()}
                      className={`flex-grow p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                      placeholder="Add a new quality standard..."
                  />
                  <button 
                    onClick={addTodoItem} 
                    className="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl"
                  >
                      Add Item
                  </button>
              </div>
            </div>

            {/* Export Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <button 
                onClick={exportToPDF} 
                className={`font-semibold py-2 px-4 border rounded-lg shadow transition-colors ${
                  isDarkMode
                    ? 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                }`}
              >
                Export to PDF
              </button>
              <button 
                onClick={exportToCSV} 
                className={`font-semibold py-2 px-4 border rounded-lg shadow transition-colors ${
                  isDarkMode
                    ? 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                }`}
              >
                Export to CSV
              </button>
              <button 
                onClick={clearAllAndReset} 
                className={`font-semibold py-2 px-4 border rounded-lg shadow transition-colors flex items-center gap-2 ${
                  isDarkMode
                    ? 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Load Comprehensive Defaults
              </button>
              <button 
                onClick={clearAllItems} 
                className={`font-semibold py-2 px-4 border rounded-lg shadow transition-colors flex items-center gap-2 ${
                  isDarkMode
                    ? 'bg-red-900 text-red-200 border-red-700 hover:bg-red-800'
                    : 'bg-red-50 text-red-700 border-red-300 hover:bg-red-100'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Clear All Items
              </button>
            </div>

            {/* Instructions */}
            <div className={`${isDarkMode ? 'bg-gray-800/70 border-gray-700' : 'bg-white/70 border-primary-main'} border-2 border-dashed rounded-lg p-4 mb-6`}>
              <h3 className={`font-bold text-lg mb-3 ${isDarkMode ? 'text-white' : 'text-primary-dark'}`}>How to Use This Checklist</h3>
              <div className="space-y-4">
                  <div>
                      <h4 className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Option 1: Collaborate on This Live Version</h4>
                      <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                          Feel free to use this live, shared version. Simply copy the public URL of this page and send it to your teammates. Everyone with the link can edit this list in real-time.
                      </p>
                  </div>
                  <div>
                      <h4 className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Option 2: Deploy Your Own Private Version</h4>
                      <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                          For a completely private checklist for your team, you can deploy your own copy of this application. This requires some technical setup (creating a free Firebase project and deploying the code to a service like Cloudflare Pages or Netlify).
                      </p>
                  </div>
              </div>
            </div>
            
            {/* User ID Display */}
            {userId && (
              <div className={`text-center my-4 p-2 rounded-lg ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'}`}>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                    Your User ID (for reference): <strong className={`font-mono ${isDarkMode ? 'text-secondary' : 'text-primary-dark'}`}>{userId}</strong>
                  </p>
              </div>
            )}

            {/* Todo List - Grouped by Category */}
            <div className="space-y-6">
              {todos.length > 0 ? (() => {
                // Sort todos by createdAt to maintain consistent order
                const sortedTodos = [...todos].sort((a, b) => {
                  const timeA = a.createdAt?.toMillis ? a.createdAt.toMillis() : new Date(a.createdAt).getTime();
                  const timeB = b.createdAt?.toMillis ? b.createdAt.toMillis() : new Date(b.createdAt).getTime();
                  return timeA - timeB;
                });

                const grouped = sortedTodos.reduce((acc, todo) => {
                  const category = todo.category || 'Uncategorized';
                  if (!acc[category]) acc[category] = [];
                  acc[category].push(todo);
                  return acc;
                }, {});

                // Define category order
                const categoryOrder = [
                  'Code Review Standards',
                  'Testing Standards',
                  'Accessibility Standards',
                  'Performance Standards',
                  'Security Standards',
                  'Design Standards',
                  'Documentation Standards',
                  'Uncategorized'
                ];

                // Sort categories by defined order
                const sortedCategories = Object.entries(grouped).sort(([catA], [catB]) => {
                  const indexA = categoryOrder.indexOf(catA);
                  const indexB = categoryOrder.indexOf(catB);
                  const orderA = indexA === -1 ? categoryOrder.length : indexA;
                  const orderB = indexB === -1 ? categoryOrder.length : indexB;
                  return orderA - orderB;
                });

                return sortedCategories.map(([category, items]) => (
                  <div key={category} className="space-y-3">
                    {/* Category Header */}
                    <h3 className={`text-lg font-bold flex items-center gap-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      {category}
                    </h3>
                    
                    {/* Category Items */}
                    <div className="space-y-2 ml-7">
                      {items.map(todo => (
                        <div 
                          key={todo.id} 
                          className={`flex items-center gap-3 p-3 rounded-lg shadow-sm transition-all ${
                            isDarkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
                          }`}
                        >
                          {/* Bullet Point */}
                          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                            isDarkMode ? 'bg-secondary' : 'bg-primary'
                          }`}></div>
                          
                          {/* Content */}
                          {editingId === todo.id ? (
                            <div className="flex-grow flex items-center gap-2">
                              <input
                                type="text"
                                value={editingText}
                                onChange={(e) => setEditingText(e.target.value)}
                                onKeyPress={(e) => {
                                  if (e.key === 'Enter') updateTodoItem(todo.id, editingText);
                                  if (e.key === 'Escape') cancelEditing();
                                }}
                                className={`flex-grow p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary ${
                                  isDarkMode 
                                    ? 'bg-gray-700 border-gray-600 text-white' 
                                    : 'bg-white border-gray-300 text-gray-900'
                                }`}
                                autoFocus
                              />
                              <button
                                onClick={() => updateTodoItem(todo.id, editingText)}
                                className={`p-2 rounded transition-colors ${
                                  isDarkMode
                                    ? 'bg-green-900 text-green-200 hover:bg-green-800'
                                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                                }`}
                                title="Save"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </button>
                              <button
                                onClick={cancelEditing}
                                className={`p-2 rounded transition-colors ${
                                  isDarkMode
                                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                                title="Cancel"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>
                          ) : (
                            <>
                              <span className={`flex-grow ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                                {todo.text}
                              </span>
                              
                              {/* Action Buttons */}
                              <div className="flex items-center gap-1 flex-shrink-0">
                                <button
                                  onClick={() => startEditing(todo.id, todo.text)}
                                  className="p-1.5 rounded transition-colors"
                                  title="Edit"
                                >
                                  <svg className={`w-4 h-4 transition-colors ${
                                    isDarkMode ? 'text-gray-500 hover:text-blue-400' : 'text-gray-400 hover:text-blue-600'
                                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                  </svg>
                                </button>
                                <button
                                  onClick={() => deleteTodoItem(todo.id)}
                                  className="p-1.5 rounded transition-colors"
                                  title="Delete"
                                >
                                  <svg className={`w-4 h-4 transition-colors ${
                                    isDarkMode ? 'text-gray-500 hover:text-red-400' : 'text-gray-400 hover:text-red-500'
                                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                </button>
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ));
              })() : (
                  <p className={`text-center ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      {isAuthReady ? "No quality standards added yet. Be the first!" : "Loading checklist..."}
                  </p>
              )}
            </div>
          </main>
      </div>
    );
}
