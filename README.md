# SUTRA: Architecting Educational Intelligence

![Sutra Banner](https://img.shields.io/badge/Status-Active_Development-cyan?style=for-the-badge)
![React](https://img.shields.io/badge/React_v19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase_v12-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

> **"From Idea to Execution with Zero Technical Friction."**

**SUTRA** is a gamified "Mission Control" interface designed to empower NGOs and CSOs (Civil Society Organisations). It acts as a digital architect, automating the complex **Logical Framework Approach (LFA)** to help non-technical teams build rigorous, funder-ready program designs in minutes, not months.

---

## 🚩 Problem Statement

Many organizations working in education struggle to clearly design their programs before scaling. They face challenges in:
* Defining the exact problem statement.
* Mapping key stakeholders.
* Deciding on specific practice changes.
* Selecting indicators to measure impact.

This results in slow program design, high reliance on expensive experts, and delayed funding. SUTRA solves this by turning this complex process into a simple, guided, level-based game.

---

## ⚡ Key Features

* **🎮 Gamified Wizard Interface:** A "Mission Control" dashboard that guides users through the design process as if it were a game, featuring a sci-fi/cyberpunk aesthetic.
* **🧠 Logic Core:** Advanced node-based logic construction that ensures the "Theory of Change" makes sense.
* **⚡ Auto-LFA Generation:** Automatically generates ISO-standard Logical Frameworks based on user input.
* **🎯 Phase-Based Progression:**
    * **Level 1:** Problem Diagnosis (Root Cause Analysis).
    * **Level 2:** Goal Setting & Stakeholder Mapping.
    * **Level 3:** Activity Planning.
    * **Level 4:** Impact Indicators.
* **📱 Responsive Design:** Built with a "Mobile-First" approach using Tailwind CSS v4.

---

## 🛠️ Tech Stack

This project is built using a modern, high-performance web stack:

* **Frontend Framework:** [React.js (v19)](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/) (for lightning-fast HMR and bundling)
* **Styling:** [Tailwind CSS (v4)](https://tailwindcss.com/) & Custom CSS Animations
* **Backend & Database:** [Firebase (v12)](https://firebase.google.com/) (Real-time data & Authentication)
* **Routing:** [React Router DOM (v7)](https://reactrouter.com/)
* **Linting:** ESLint

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

* **Node.js** (v18 or higher recommended)
* **npm** (Node Package Manager)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/alex-hembrom/Ngoproject.git](https://github.com/alex-hembrom/Ngoproject.git)
    cd Ngoproject
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    * Create a `.env` file in the root directory.
    * Add your Firebase configuration keys (if connecting to your own backend instance):
        ```env
        VITE_FIREBASE_API_KEY=your_api_key
        VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
        VITE_FIREBASE_PROJECT_ID=your_project_id
        # ... add other firebase config keys
        ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Open the app:**
    Visit `http://localhost:5173` (or the port shown in your terminal) to view the application.

---

## 📂 Project Structure

```bash
src/
├── assets/             # Images, fonts, and static assets
├── components/         # Reusable UI components
│   ├── Wizard/         # The core game levels (Level1 - Level5)
│   ├── DashboardHeader.jsx
│   ├── LandingPage.jsx
│   └── Login.jsx
├── firebase.js         # Firebase configuration and initialization
├── App.jsx             # Main application component & routing
├── main.jsx            # Entry point
└── index.css           # Global styles and Tailwind directives
