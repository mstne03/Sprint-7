# 🎬 Movie App  

A modern web application to explore and discover movies, built with **React**, **Vite**, **Tailwind CSS**, **Firebase Authentication**, and **Vitest**. It fetches real-time movie data from the **TMDB (The Movie Database) API**. This app was created with educational purposes. The main goal was to learn what was the correct approach when fetching data from an API and displaying it in a React-made UI, as well as learning how to enable user authentication with a platform like Firebase. Feedback is welcome. This project will likely not be updated.

## 🚀 Features  
- 🔑 **User Authentication** with Firebase (sign up, login, logout).  
- 🎥 **Movie Data** fetched dynamically from TMDB API.  
- 📱 **Responsive Design** styled with Tailwind CSS.  
- ⚡ **Fast Development** environment using Vite.  
- 🧪 **Unit & Integration Testing** with Vitest.  
- 🔍 Search and browse movies by categories (popular, top-rated, upcoming, etc.).  
- ⭐ Save favorite movies (if implemented with Firebase Firestore).  

## 🛠️ Tech Stack  
- [React](https://react.dev/) – UI Library  
- [Vite](https://vitejs.dev/) – Development build tool  
- [Tailwind CSS](https://tailwindcss.com/) – Styling  
- [Firebase](https://firebase.google.com/) – Authentication (and optional Firestore for favorites)  
- [Vitest](https://vitest.dev/) – Testing framework  
- [TMDB API](https://www.themoviedb.org/documentation/api) – Movie data  

## ⚙️ Installation & Setup  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/mstne03/Sprint-7.git
   cd Sprint-7
2. **Install dependencies**
   ```bash
   npm install
3. **Create .env file in the root directory and add your environment variables**
   ```bash
   VITE_FIREBASE_API_KEY=[]
   VITE_FIREBASE_AUTH_DOMAIN=[]
   VITE_FIREBASE_PROJECT_ID=[]
   VITE_FIREBASE_STORAGE_BUCKET=[]
   VITE_FIREBASE_MESSAGING_SENDER_ID=[]
   VITE_FIREBASE_APP_ID=[]
   VITE_TMDB_URL=https://api.themoviedb.org/3
   VITE_TMDB_BEARER=[]
   VITE_TMDB_API_KEY=[]
4. **Run the app localy**
   ```bash
   npm run dev
5. **Run tests**
   ```bash
   npm run test
