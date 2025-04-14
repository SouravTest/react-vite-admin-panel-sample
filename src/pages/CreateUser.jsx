import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function CreateUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    hobbies: [],
    country: "",
    dob: "",
    bio: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      const updatedHobbies = checked
        ? [...formData.hobbies, value]
        : formData.hobbies.filter((hobby) => hobby !== value);
      setFormData({ ...formData, hobbies: updatedHobbies });
    } else if (type === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("User created successfully!");

    // Optionally log the data or send to API
    console.log("Form Data:", formData);
  };

  return (
    <div className="container mt-5">
      <ToastContainer />
      <div className="card shadow p-4">
        <h3 className="mb-4">Create New User</h3>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Age */}
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>

          {/* Gender */}
          <div className="mb-3">
            <label className="form-label">Gender</label><br />
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              <label className="form-check-label">Female</label>
            </div>
          </div>

          {/* Hobbies */}
          <div className="mb-3">
            <label className="form-label">Hobbies</label><br />
            {["Reading", "Traveling", "Gaming", "Coding"].map((hobby) => (
              <div className="form-check form-check-inline" key={hobby}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="hobbies"
                  value={hobby}
                  checked={formData.hobbies.includes(hobby)}
                  onChange={handleChange}
                />
                <label className="form-check-label">{hobby}</label>
              </div>
            ))}
          </div>

          {/* Country Select */}
          <div className="mb-3">
            <label className="form-label">Country</label>
            <select
              className="form-select"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select a country</option>
              <option value="USA">USA</option>
              <option value="India">India</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          {/* Bio */}
          <div className="mb-3">
            <label className="form-label">Short Bio</label>
            <textarea
              className="form-control"
              name="bio"
              rows="3"
              value={formData.bio}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* File Upload */}
          <div className="mb-3">
            <label className="form-label">Profile Picture</label>
            <input
              type="file"
              className="form-control"
              name="file"
              onChange={handleChange}
              accept="image/*"
            />
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary w-100">
            Create User
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
