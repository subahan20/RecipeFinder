import "./App.css";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails/>} />
      </Routes>
      <Recipes />
    </Router>
  );
}

export default App;
