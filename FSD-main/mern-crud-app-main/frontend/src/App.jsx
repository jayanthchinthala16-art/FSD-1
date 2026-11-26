import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AddEditForm from "./components/AddEditForm";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<AddEditForm />} />
        <Route path="/update-post/:id" element={<AddEditForm />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
