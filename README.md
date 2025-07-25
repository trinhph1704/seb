# SEB Exam App

React TypeScript application for SEB (Safe Exam Browser) interface.

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd seb-exam-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Features

- 20-minute countdown timer
- 20 multiple-choice questions about Marxism-Leninism
- Question navigation with visual indicators
- Question marking functionality
- Responsive Material-UI design
- SEB-style interface with header and footer

### Technologies Used

- React 18
- TypeScript
- Material-UI (MUI)
- Vite
- ESLint

## Project Structure

```
seb-exam-app/
├── src/
│   ├── components/
│   │   └── SEBExamInterface.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── public/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```
