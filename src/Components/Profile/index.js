import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div className="container my-5">
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <span for="inputEmail4">Welcome [Username]</span>
              <br />
              <span for="inputEmail4 text-sm">
                Please complete your information
              </span>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputAddress2">DoB</label>
              <input
                type="date"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputAddress2">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputState">Gender</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default Profile;
