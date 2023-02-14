import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import LoginPage from "./components/admin/Login";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/news-site/:id" element={<Contact />} /> */}
        <Route path="/admin/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
