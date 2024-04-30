import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import About from "./pages/AboutPage";
import TodoPage from "./pages/TodoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/todo" element={<TodoPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
