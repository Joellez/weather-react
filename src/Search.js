import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="row pb-4">
        <div className="col-md-6">
          <form id="my-form">
            <div className="input-group mb-3 city-search " id="city-search-form">
              <input
                type="text"
                className="form-control rounded"
                placeholder="Enter a city"
                aria-label="City Search"
                aria-describedby="basic-addon2"
                autocomplete="off"
                id="search-bar"
              />
              <div className="input-group-append" id="form-input">
                <button type="submit" className="btn btn-light search-button">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <button type="submit" className="btn btn-light location-button" id="location-button">
            Use current location
          </button>
        </div>
      </div>
    </div>
  );
}
