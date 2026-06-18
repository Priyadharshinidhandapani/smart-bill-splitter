# Smart Bill Splitter — Angular 11 Edition

A full-stack bill splitting app with a **black & neon** UI theme, converted from Angular 18 to **Angular 11**.

## 🎨 UI Theme
- **Black background** with neon cyan, green, purple, and pink accents  
- Custom `Orbitron` (headings) + `Rajdhani` (body) Google Fonts  
- Glow effects on active elements, inputs, and buttons  
- Fully responsive for mobile and desktop

## 📁 Project Structure
```
smart-bill-splitter/
├── backend/          ← Node.js + Express + SQLite (unchanged)
└── frontend/         ← Angular 11 (NgModule architecture)
```

## 🚀 Getting Started

### 1. Start the Backend
```bash
cd backend
npm install
npm start
# Backend runs at http://localhost:3000
```

### 2. Start the Frontend
```bash
cd frontend
npm install
ng serve
# App runs at http://localhost:4200
```

## 🔑 Angular 11 Key Differences from Angular 18

| Feature | Angular 18 | Angular 11 |
|---------|-----------|------------|
| Architecture | Standalone components | NgModule |
| Template control flow | `@if`, `@for` | `*ngIf`, `*ngFor` |
| Bootstrap | `bootstrapApplication()` | `platformBrowserDynamic().bootstrapModule()` |
| State management | Signals (`signal()`) | Plain class properties + BehaviorSubject |
| HTTP setup | `provideHttpClient()` | `HttpClientModule` in NgModule |
| Router setup | `provideRouter()` | `RouterModule.forRoot()` |

## 🌐 API Endpoints (Backend)
- `GET  /bills` — List all bills
- `POST /bills` — Create a bill
- `GET  /bills/:id` — Get bill detail
- `DELETE /bills/:id` — Delete a bill
- `GET  /contacts` — List contacts
- `POST /contacts` — Create contact
- `PUT  /contacts/:id` — Update contact
- `DELETE /contacts/:id` — Delete contact
