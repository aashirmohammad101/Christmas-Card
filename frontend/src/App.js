import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainpage";
function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the main page */}
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
export default App;
