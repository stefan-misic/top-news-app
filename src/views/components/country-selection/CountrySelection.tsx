import React from "react";

import "./CountrySelection.scss";

const CountrySelection: React.FC = () => {
  return (
    <div className="country-selection">
      <div
        className={`country-selection-dropdown ${
          false ? "country-selection-dropdown--open" : ""
        }`}
      >
        <button
          className="country-selection-dropdown__toggle-button"
          type="button"
        >
          <div className="country-selection-dropdown__toggle-button__indicator"></div>
          <img
            className="country-selection-dropdown__country-image"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            alt="country"
          />
        </button>

        <div className="country-selection-dropdown__options">
          <button
            className="country-selection-dropdown__options__entity"
            type="button"
          >
            <img
              className="country-selection-dropdown__country-image country-selection-dropdown__country-image--inverse"
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              alt="country"
            />
            <span className="country-selection-dropdown__options__entity__name">
              Great Britain
            </span>
          </button>
        </div>
      </div>

      <span className="app-logo">TopNews</span>
    </div>
  );
};

export default CountrySelection;
