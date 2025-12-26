# Quality Floor Checklist

A collaborative, serverless quality standards checklist builder for teams. Define and maintain your project's non-negotiable quality minimums with a beautiful, modern interface powered entirely by Cloudflare.

🔗 **Live Demo:** [https://quality-floor-checklist.coscient.workers.dev](https://quality-floor-checklist.coscient.workers.dev)

## ✨ Features

### 🤖 AI-Powered Generation
- **Generate custom checklists** tailored to your project using Cloudflare Workers AI
- **Context-aware standards** - Describe your project type, industry, tech stack, and compliance needs
- **25-35 intelligent items** generated based on your specific requirements
- **Powered by Llama 3.1** - Fast, accurate, and runs on Cloudflare's edge network
- **Examples:**
  - Healthcare app → HIPAA compliance, PHI encryption, audit logging
  - Fintech → PCI-DSS, financial regulations, security standards
  - E-commerce → GDPR, payment security, performance optimization

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
- **Category grouping** with visual headers and SVG icons
- **Inline editing** - Edit any item directly in the list
- **Responsive design** - Works on mobile, tablet, and desktop
- **Clean interface** - Streamlined buttons with icons in header
- **Professional design** - Bot icon for AI features, download icons for exports

### 🔄 Collaborative Features
- **Cloudflare R2 storage** - Simple JSON-based data persistence
- **Polling updates** - Changes sync every 3 seconds across all users
- **Public/shared access** - Share URL with your team
- **No authentication required** - Start using immediately

### 🛠️ Management Tools
- **AI Generate** - Create custom checklists with AI
- **Add custom items** to any category
- **Edit items** inline with save/cancel options
- **Delete items** individually
- **Load defaults** - Reset to full 33-item checklist
- **Clear all items** - Start fresh with empty list
- **Stable sorting** - Items maintain consistent order by creation time

### 📤 Export Options
- **Export to PDF** - Generate printable checklist (header button)
- **Export to CSV** - Import into spreadsheets (header button)

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- Cloudflare account (for your own deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/czhengjuarez/quality-floor-checklist.git
cd quality-floor-checklist

# Install dependencies
npm install

# Start development server (proxies API to production)
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

### Cloudflare R2 Setup

1. Create an R2 bucket:
```bash
npx wrangler r2 bucket create quality-floor-checklist
```

2. Update `wrangler.toml` with your bucket binding:
```toml
[[r2_buckets]]
bucket_name = "quality-floor-checklist"
binding = "CHECKLIST_BUCKET"
```

### Cloudflare Workers Deployment

```bash
# Deploy to Cloudflare Workers
npx wrangler deploy
```

The Worker will automatically serve your static assets and API endpoints.

## 🏗️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Cloudflare Workers** - Serverless compute and hosting
- **Cloudflare Workers AI** - AI-powered checklist generation (Llama 3.1)
- **Cloudflare R2** - Object storage (S3-compatible)
- **Hono** - Lightweight web framework for Workers
- **jsPDF** - PDF export functionality

## 📁 Project Structure

```
quality-floor-checklist/
├── src/
│   ├── api/
│   │   └── r2Client.js          # R2 API client
│   ├── contexts/
│   │   └── ThemeContext.jsx     # Dark mode management
│   ├── App.jsx                   # App wrapper with ThemeProvider
│   ├── AppContent_R2.jsx         # Main application logic with R2
│   ├── index.ts                  # Worker API endpoints
│   └── index.css                 # Global styles
├── public/                       # Static assets
├── dist/                         # Production build
├── vite.config.js                # Vite configuration with API proxy
└── wrangler.toml                 # Cloudflare Workers config
```

## 🔌 API Endpoints

The Worker provides a REST API for managing checklist items:

- `GET /api/todos` - Fetch all items
- `POST /api/todos` - Add a new item
- `POST /api/todos/bulk` - Add multiple items (for loading defaults)
- `PUT /api/todos/:id` - Update an item
- `DELETE /api/todos/:id` - Delete an item
- `DELETE /api/todos` - Clear all items
- `POST /api/generate-checklist` - Generate AI-powered checklist based on project context

All data is stored in R2 as a single JSON file (`todos.json`).

## 🎯 Use Cases

- **Development teams** - Define coding standards and quality gates
- **Design teams** - Maintain design system compliance
- **Product teams** - Track feature quality requirements
- **QA teams** - Checklist for testing standards
- **DevOps teams** - Deployment and security standards

## 🏛️ Architecture

### Serverless & Simple
- **No database required** - All data stored as JSON in R2
- **No authentication** - Public by default for easy collaboration
- **Fast cold starts** - Worker starts in ~1ms
- **Global edge network** - Deployed to 300+ Cloudflare locations

### Data Flow
1. Frontend makes API calls to Worker endpoints
2. Worker reads/writes JSON from/to R2 bucket
3. Frontend polls every 3 seconds for updates
4. Changes appear across all connected users

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
- **Deploy your own** - For private team use, deploy your own instance with a separate R2 bucket.
- **Customize categories** - Edit `src/AppContent_R2.jsx` to add/modify default categories and items.
- **Export regularly** - Use PDF/CSV export to backup your standards.
- **Local development** - API calls proxy to production, so you can test locally without setting up R2.

## 🚀 Why R2 Over Firebase?

We migrated from Firebase to Cloudflare R2 for several reasons:
- **Simpler architecture** - No complex database queries, just JSON storage
- **Lower costs** - R2 is extremely cost-effective for small datasets
- **Faster cold starts** - No Firebase SDK overhead
- **All-in-one platform** - Workers + R2 + hosting on Cloudflare
- **No vendor lock-in** - R2 is S3-compatible

---

Built with ❤️ for teams who care about quality
