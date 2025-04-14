import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Forgot() {
  const [email, setEmail] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/forgot", { email });
      toast.success("Password reset link sent!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to send reset link");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Forgot Password</h3>
        <form onSubmit={handleReset}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-warning w-100">Send Reset Link</button>
        </form>
        <div className="mt-3 text-center">
          <Link to="/" className="text-decoration-none">
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
