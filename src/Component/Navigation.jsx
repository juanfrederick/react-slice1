import { useState } from "react";
import { BiJoystickButton } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navigation = () => {
  const [isCliked, setIsClicked] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);

  return (
    <nav className="navigation-container">
      <div
        className="navigation"
        style={{ backgroundColor: isCliked ? undefined : "black" }}
      >
        <div className="logo-container">
          <div>
            <BiJoystickButton size={36} />
            <h1>Abstract</h1>
          </div>
          <span></span>
          <h1 className="help-center">Help Center</h1>
        </div>

        <div className="search-container">
          <FaSearch
            className="search"
            onClick={() => {
              setSearchClicked(!searchClicked);
            }}
          />
          <div
            className="hamb-container"
            onClick={() => {
              setIsClicked(!isCliked);
            }}
          >
            <div className={isCliked ? "top" : undefined}></div>
            <div className={isCliked ? "mid" : undefined}></div>
            <div className={isCliked ? "bot" : undefined}></div>
          </div>
        </div>

        <div className="button-container">
          <button>Submit a request</button>
          <button>Sign in</button>
        </div>
        {searchClicked && (
          <div className="search-navigation">
            <input type="text" placeholder="Search" />
            <ImCross
              className="exit-logo"
              onClick={() => {
                setSearchClicked(!searchClicked);
              }}
            />
          </div>
        )}
      </div>
      {isCliked && (
        <div className="dropdown">
          <h1>Submit a request</h1>
          <span></span>
          <h1>Sign in</h1>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
