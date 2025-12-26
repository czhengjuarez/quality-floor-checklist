import React, { useState, useEffect, useCallback } from 'react';
import { useTheme } from './contexts/ThemeContext';
import { r2Client } from './api/r2Client';
import jsPDF from 'jspdf';

const appId = 'quality-floor-checklist';

export default function AppContent() {
    const { isDarkMode, toggleDarkMode } = useTheme();
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [showDisclaimer, setShowDisclaimer] = useState(true);
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isOperating, setIsOperating] = useState(false);
    const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

    const generateId = () => {
        return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    };

    const loadTodos = useCallback(async (skipAutoLoad = false) => {
        if (isOperating) return; // Don't load during operations
        setIsLoading(true);
        const fetchedTodos = await r2Client.getTodos();
        
        // Only auto-load defaults on first visit, not after clear
        if (fetchedTodos.length === 0 && !hasLoadedOnce && !skipAutoLoad) {
            await addStarterItems();
            const newTodos = await r2Client.getTodos();
            setTodos(newTodos);
            setHasLoadedOnce(true);
        } else {
            setTodos(fetchedTodos);
        }
        setIsLoading(false);
    }, [isOperating, hasLoadedOnce]);

    useEffect(() => {
        loadTodos();
        
        // Poll for updates every 3 seconds, but skip if operating
        const interval = setInterval(async () => {
            if (!isOperating) {
                const fetchedTodos = await r2Client.getTodos();
                setTodos(fetchedTodos);
            }
        }, 3000);
        
        return () => clearInterval(interval);
    }, [loadTodos, isOperating]);

    const addStarterItems = async () => {
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

        // Create all todos at once to avoid race conditions
        const todos = starterItems.map(item => ({
            id: generateId(),
            text: item.text,
            category: item.category,
            createdAt: new Date().toISOString(),
            creatorId: 'system'
        }));

        // Directly write all todos to R2
        try {
            const response = await fetch(`${window.location.origin}/api/todos/bulk`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ todos })
            });
            return response.ok;
        } catch (error) {
            console.error('Error adding starter items:', error);
            return false;
        }
    };

    const addTodoItem = async () => {
        if (!inputValue.trim()) return;
        
        const newTodo = {
            id: generateId(),
            text: inputValue.trim(),
            category: 'Uncategorized',
            createdAt: new Date().toISOString(),
            creatorId: 'user'
        };
        
        const success = await r2Client.addTodo(newTodo);
        if (success) {
            setInputValue('');
            await loadTodos();
        }
    };

    const deleteTodoItem = async (id) => {
        const success = await r2Client.deleteTodo(id);
        if (success) {
            await loadTodos();
        }
    };

    const updateTodoItem = async (id, newText) => {
        if (!newText.trim()) return;
        
        const success = await r2Client.updateTodo(id, { 
            text: newText.trim(), 
            updatedAt: new Date().toISOString() 
        });
        
        if (success) {
            setEditingId(null);
            setEditingText('');
            await loadTodos();
        }
    };

    const startEditing = (id, text) => {
        setEditingId(id);
        setEditingText(text);
    };

    const cancelEditing = () => {
        setEditingId(null);
        setEditingText('');
    };

    const exportToPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text("Quality Floor Checklist", 20, 20);
        doc.setFontSize(12);
        
        let yPos = 40;
        todos.forEach((todo, index) => {
            if (yPos > 270) {
                doc.addPage();
                yPos = 20;
            }
            doc.text(`${index + 1}. ${todo.text}`, 20, yPos);
            yPos += 10;
        });
        
        doc.save("quality-checklist.pdf");
    };

    const exportToCSV = () => {
        const csvContent = "data:text/csv;charset=utf-8," 
            + "Category,Item,Created At\n"
            + todos.map(todo => `"${todo.category}","${todo.text}","${todo.createdAt}"`).join("\n");
        
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "quality-checklist.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const clearAllItems = async () => {
        if (!window.confirm('This will permanently delete ALL items from the database. This action cannot be undone. Are you sure?')) {
            return;
        }
        setIsOperating(true);
        setIsLoading(true);
        console.log('Clearing all items...');
        const success = await r2Client.clearAllTodos();
        console.log('Clear result:', success);
        if (success) {
            setTodos([]);
            setHasLoadedOnce(true); // Mark as loaded to prevent auto-loading defaults
            await new Promise(resolve => setTimeout(resolve, 1000));
        } else {
            console.error('Failed to clear items');
            alert('Failed to clear items. Please try again.');
        }
        setIsLoading(false);
        setIsOperating(false);
    };

    const clearAllAndReset = async () => {
        if (!window.confirm('This will delete all current items and load the comprehensive default checklist. Are you sure?')) {
            return;
        }
        setIsOperating(true);
        setIsLoading(true);
        const cleared = await r2Client.clearAllTodos();
        if (cleared) {
            setTodos([]);
            await new Promise(resolve => setTimeout(resolve, 500));
            const added = await addStarterItems();
            if (added) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                const fetchedTodos = await r2Client.getTodos();
                setTodos(fetchedTodos);
            }
        }
        setIsLoading(false);
        setIsOperating(false);
    };

    if (showDisclaimer) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
                <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg max-w-md w-[90%] text-left`}>
                    <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Terms of Use & Disclaimer</h2>
                    <div className={`space-y-3 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
                      <p>Welcome to the Quality Floor Checklist Builder. Before you begin, please read the following terms carefully:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Public by Default:</strong> All data entered into this application is stored publicly and can be accessed by anyone with the link. Do not enter sensitive, confidential, or proprietary information.</li>
                        <li><strong>No Privacy Guarantee:</strong> This is a shared, collaborative tool. Assume that anything you add can be viewed and modified by others.</li>
                        <li><strong>No Warranty:</strong> This tool is provided "as is" without any guarantees. We are not responsible for any data loss, errors, or misuse.</li>
                        <li><strong>Use at Your Own Risk:</strong> By using this application, you acknowledge that you understand these terms and agree to use the tool responsibly.</li>
                      </ul>
                      <p className="font-semibold mt-4">If you need a private version for your team, please deploy your own instance.</p>
                    </div>
                    <button 
                        onClick={() => setShowDisclaimer(false)} 
                        className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-all"
                    >
                        I Understand and Agree
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-dark-bg text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-200`}>
            {/* Header */}
            <header className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b sticky top-0 z-40 backdrop-blur-sm bg-opacity-90`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                Quality Floor Checklist
                            </h1>
                            <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Define your team's non-negotiable quality minimums
                            </p>
                        </div>
                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-lg transition-colors ${
                                isDarkMode 
                                    ? 'bg-gray-700 hover:bg-gray-600 text-yellow-300' 
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                            }`}
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? '☀️' : '🌙'}
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Add Item Section */}
                <div className={`${isDarkMode ? 'bg-gray-800/70 border-gray-700' : 'bg-white/70 border-gray-200'} border rounded-lg p-6 mb-6 shadow-lg`}>
              <h2 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Add New Quality Standard</h2>
              <div className="flex gap-3">
                  <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addTodoItem()}
                      className={`flex-grow p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
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
                      <h4 className={`font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Option 2: Deploy Your Own Private Instance</h4>
                      <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                          For private team use, deploy your own instance to Cloudflare Workers with your own R2 bucket. See the README for instructions.
                      </p>
                  </div>
              </div>
            </div>

            {/* Todo List - Grouped by Category */}
            <div className="space-y-6">
              {isLoading ? (
                <p className={`text-center ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  Loading checklist...
                </p>
              ) : todos.length > 0 ? (() => {
                const sortedTodos = [...todos].sort((a, b) => {
                  const timeA = new Date(a.createdAt).getTime();
                  const timeB = new Date(b.createdAt).getTime();
                  return timeA - timeB;
                });

                const grouped = sortedTodos.reduce((acc, todo) => {
                  const category = todo.category || 'Uncategorized';
                  if (!acc[category]) acc[category] = [];
                  acc[category].push(todo);
                  return acc;
                }, {});

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

                const sortedCategories = Object.entries(grouped).sort(([catA], [catB]) => {
                  const indexA = categoryOrder.indexOf(catA);
                  const indexB = categoryOrder.indexOf(catB);
                  const orderA = indexA === -1 ? categoryOrder.length : indexA;
                  const orderB = indexB === -1 ? categoryOrder.length : indexB;
                  return orderA - orderB;
                });

                return sortedCategories.map(([category, items]) => (
                  <div key={category} className="space-y-3">
                    <h3 className={`text-lg font-bold flex items-center gap-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      {category}
                    </h3>
                    
                    <div className="space-y-2 ml-7">
                      {items.map(todo => (
                        <div
                          key={todo.id}
                          className={`flex items-center gap-3 p-3 rounded-lg shadow-sm transition-all ${
                            isDarkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
                          }`}
                        >
                          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                            isDarkMode ? 'bg-secondary' : 'bg-primary'
                          }`}></div>

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
                                  }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                      No quality standards added yet. Be the first!
                  </p>
              )}
            </div>
          </main>
        </div>
    );
}
