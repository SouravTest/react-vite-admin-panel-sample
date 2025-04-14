import React from "react";
//import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  //const navigate = useNavigate();

  const handleBack = () => {
    //navigate("/"); 
    window.history.back(); 
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-4">Page Not Found</h2>
      <p className="text-muted mb-4">
        Oops! The page you are looking for does not exist.
      </p>
      <button className="btn btn-primary" onClick={handleBack}>
        <i className="fa-solid fa-left-long"></i> &nbsp; Back to Home
      </button>
    </div>
  );
}

export default NotFoundPage;
