# Quality Floor Checklist

A collaborative, real-time quality standards checklist builder for teams. Define and maintain your project's non-negotiable quality minimums with a beautiful, modern interface.

🔗 **Live Demo:** [https://quality-floor-checklist.coscient.workers.dev](https://quality-floor-checklist.coscient.workers.dev)

## ✨ Features

### 📋 Comprehensive Default Standards
- **33 quality standards** across 7 categories:
  - Code Review Standards (4 items)
  - Testing Standards (4 items)
  - Accessibility Standards (5 items)
  - Performance Standards (5 items)
  - Security Standards (4 items)
  - Design Standards (5 items)
  - Documentation Standards (4 items)

### 🎨 Modern UI/UX
- **Dark mode support** with persistent theme preference
- **Category grouping** with visual headers and icons
- **Inline editing** - Edit any item directly in the list
- **Responsive design** - Works on mobile, tablet, and desktop
- Clean, professional interface inspired by modern design systems

### 🔄 Real-time Collaboration
- **Firebase integration** for real-time sync
- **Anonymous authentication** - No sign-up required
- **Public/shared access** - Share URL with your team
- All changes sync instantly across all users

### 🛠️ Management Tools
- **Add custom items** to any category
- **Edit items** inline with save/cancel options
- **Delete items** individually
- **Load comprehensive defaults** - Reset to full 33-item checklist
- **Clear all items** - Start fresh with empty list
- **Stable sorting** - Items maintain consistent order

### 📤 Export Options
- **Export to PDF** - Generate printable checklist
- **Export to CSV** - Import into spreadsheets

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- Firebase account (for your own deployment)
- Cloudflare account (for Workers deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/czhengjuarez/quality-floor-checklist.git
cd quality-floor-checklist

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔧 Configuration

### Firebase Setup

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Firestore Database
3. Enable Anonymous Authentication
4. Update `src/AppContent.jsx` with your Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  // ... other config
};
```

### Cloudflare Workers Deployment

```bash
# Deploy to Cloudflare Workers
npx wrangler deploy
```

Update `wrangler.toml` with your configuration if needed.

## 🏗️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Firebase** - Real-time database and authentication
- **Cloudflare Workers** - Hosting and deployment
- **jsPDF** - PDF export functionality

## 📁 Project Structure

```
quality-floor-checklist/
├── src/
│   ├── contexts/
│   │   └── ThemeContext.jsx    # Dark mode management
│   ├── App.jsx                  # App wrapper with ThemeProvider
│   ├── AppContent.jsx           # Main application logic
│   └── index.css                # Global styles
├── public/                      # Static assets
├── dist/                        # Production build
└── wrangler.toml               # Cloudflare Workers config
```

## 🎯 Use Cases

- **Development teams** - Define coding standards and quality gates
- **Design teams** - Maintain design system compliance
- **Product teams** - Track feature quality requirements
- **QA teams** - Checklist for testing standards
- **DevOps teams** - Deployment and security standards

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

This project is open source and available under the MIT License.

## 🔗 Links

- **Live App:** [https://quality-floor-checklist.coscient.workers.dev](https://quality-floor-checklist.coscient.workers.dev)
- **GitHub:** [https://github.com/czhengjuarez/quality-floor-checklist](https://github.com/czhengjuarez/quality-floor-checklist)

## 💡 Tips

- **Public by default** - All data is public and shared. Don't enter sensitive information.
- **Deploy your own** - For private team use, deploy your own instance with a separate Firebase project.
- **Customize categories** - Edit `src/AppContent.jsx` to add/modify default categories and items.
- **Export regularly** - Use PDF/CSV export to backup your standards.

---

Built with ❤️ for teams who care about quality
