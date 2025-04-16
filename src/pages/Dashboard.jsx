import React from "react";
import "./dashboard.css";
function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3">
            <div className="card-counter primary position-relative">
              <i className="fa fa-code-fork"></i>
              <span className="count-numbers">12</span>
              <span className="count-name">Flowz</span>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-counter danger position-relative">
              <i className="fa fa-ticket"></i>
              <span className="count-numbers">599</span>
              <span className="count-name">Instances</span>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-counter success position-relative">
              <i className="fa fa-database"></i>
              <span className="count-numbers">6875</span>
              <span className="count-name">Data</span>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card-counter info position-relative">
              <i className="fa fa-users"></i>
              <span className="count-numbers">35</span>
              <span className="count-name">Users</span>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title">
                  <i class="fa fa-cogs me-2 text-primary"></i>Module: Processor
                </h5>
                <p class="card-text">
                  Handles data stream processing and applies transformation
                  rules.
                </p>
                <span class="badge bg-success">Active</span>
              </div>
              <div class="card-footer text-end bg-transparent border-0">
                <button class="btn btn-outline-primary btn-sm">
                  View Logs
                </button>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title">
                  <i class="fa fa-database me-2 text-success"></i>Module:
                  Storage
                </h5>
                <p class="card-text">
                  Stores persistent and temporary datasets from all flows.
                </p>
                <span class="badge bg-warning text-dark">Under Load</span>
              </div>
              <div class="card-footer text-end bg-transparent border-0">
                <button class="btn btn-outline-success btn-sm">Manage</button>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title">
                  <i class="fa fa-shield me-2 text-danger"></i>Module: Security
                </h5>
                <p class="card-text">
                  Controls access, permissions, and encrypts sensitive data.
                </p>
                <span class="badge bg-danger">Alert</span>
              </div>
              <div class="card-footer text-end bg-transparent border-0">
                <button class="btn btn-outline-danger btn-sm">
                  Check Status
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
