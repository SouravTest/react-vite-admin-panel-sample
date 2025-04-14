import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import RouteConfig from "./router";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Router>
        <RouteConfig />
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
