import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import "./styles.css";

const App = () => {
  const { currentUser, logout } = useAuth();

  return (
    <AuthProvider>
      <Router>
        <div>
          <header>
            <h1>My Meal Planner</h1>
            <nav>
              <Link to="/">Home</Link>
              {currentUser && <Link to="/add-recipe">Add Recipe</Link>}
              {currentUser ? (
                <button onClick={logout}>Logout</button>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </>
              )}
            </nav>
          </header>
          <Routes>
            <Route
              path="/"
              element={currentUser ? <RecipeList /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!currentUser ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/register"
              element={!currentUser ? <Register /> : <Navigate to="/" />}
            />
            <Route
              path="/add-recipe"
              element={currentUser ? <RecipeForm /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
