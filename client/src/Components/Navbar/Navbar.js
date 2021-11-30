import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = ({ user }) => {
  const [showMenu, setShowMenu] = React.useState(false)

    return (
      <nav className="NavbarItems">
        <a href="/">
          <h1 className="navbar-logo">
            SignalFlow
            <i>
              <svg
                width="118.6"
                height="42.2"
                viewBox="0 0 1186 422"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="pedals"
                  d="M352 195H314V239H352V195ZM352 195V109H333V195H352ZM385 7.99999H377C375.322 7.28093 373.298 7.1694 371.072 7.99999M342 110C346.593 35.1944 360.92 11.7898 371.072 7.99999M371.072 7.99999C377.382 7.99999 391.2 28.4 396 110M781 195H743V239H781V195ZM781 195V109H762V195H781ZM814 7.99999H806C804.322 7.28093 802.298 7.1694 800.072 7.99999M771 110C775.593 35.1944 789.92 11.7898 800.072 7.99999M800.072 7.99999C806.382 7.99999 820.2 28.4 825 110M27 415H297C308.046 415 317 406.046 317 395V34C317 22.9543 308.046 14 297 14H27C15.9543 14 7 22.9543 7 34V395C7 406.046 15.9543 415 27 415ZM447 415H723C734.046 415 743 406.046 743 395V34C743 22.9543 734.046 14 723 14H447C435.954 14 427 22.9543 427 34V395C427 406.046 435.954 415 447 415ZM51 397H268C278.493 397 287 388.493 287 378V204C287 193.507 278.493 185 268 185H51C40.5066 185 32 193.507 32 204V378C32 388.493 40.5066 397 51 397ZM106 76.5C106 94.4493 91.2254 109 73 109C54.7746 109 40 94.4493 40 76.5C40 58.5507 54.7746 44 73 44C91.2254 44 106 58.5507 106 76.5ZM193 76.5C193 94.4493 178.225 109 160 109C141.775 109 127 94.4493 127 76.5C127 58.5507 141.775 44 160 44C178.225 44 193 58.5507 193 76.5ZM282 76.5C282 94.4493 267.225 109 249 109C230.775 109 216 94.4493 216 76.5C216 58.5507 230.775 44 249 44C267.225 44 282 58.5507 282 76.5ZM461 397H707C718.046 397 727 388.046 727 377V205C727 193.954 718.046 185 707 185H461C449.954 185 441 193.954 441 205V377C441 388.046 449.954 397 461 397ZM560 82C560 110.167 536.719 133 508 133C479.281 133 456 110.167 456 82C456 53.8335 479.281 31 508 31C536.719 31 560 53.8335 560 82ZM648 135.5C648 150.136 635.912 162 621 162C606.088 162 594 150.136 594 135.5C594 120.864 606.088 109 621 109C635.912 109 648 120.864 648 135.5ZM712 72C712 87.464 699.24 100 683.5 100C667.76 100 655 87.464 655 72C655 56.536 667.76 44 683.5 44C699.24 44 712 56.536 712 72ZM876 415H1159C1170.05 415 1179 406.046 1179 395V34C1179 22.9543 1170.05 14 1159 14H876C864.954 14 856 22.9543 856 34V395C856 406.046 864.954 415 876 415ZM893 397H1133C1145.7 397 1156 386.703 1156 374V208C1156 195.297 1145.7 185 1133 185H893C880.297 185 870 195.297 870 208V374C870 386.703 880.297 397 893 397ZM946 69.5C946 83.5833 934.136 95 919.5 95C904.864 95 893 83.5833 893 69.5C893 55.4167 904.864 44 919.5 44C934.136 44 946 55.4167 946 69.5ZM1134 69.5C1134 83.5833 1122.14 95 1107.5 95C1092.86 95 1081 83.5833 1081 69.5C1081 55.4167 1092.86 44 1107.5 44C1122.14 44 1134 55.4167 1134 69.5ZM946 136.5C946 150.583 934.136 162 919.5 162C904.864 162 893 150.583 893 136.5C893 122.417 904.864 111 919.5 111C934.136 111 946 122.417 946 136.5ZM1135 136.5C1135 150.583 1123.14 162 1108.5 162C1093.86 162 1082 150.583 1082 136.5C1082 122.417 1093.86 111 1108.5 111C1123.14 111 1135 122.417 1135 136.5ZM1045 100.5C1045 118.449 1030.23 133 1012 133C993.775 133 979 118.449 979 100.5C979 82.5507 993.775 68 1012 68C1030.23 68 1045 82.5507 1045 100.5ZM389 195H427V239H389V195ZM389 110H408V196H389V110ZM818 195H856V239H818V195ZM818 110H837V196H818V110ZM825 195H863V239H825V195Z"
                  stroke="rgba(240, 176, 1, 0.836)"
                  stroke-width="13"
                  fill="grey"
                />
                <rect
                  className="pedal1"
                  x="37"
                  y="187"
                  width="245"
                  height="205"
                  rx="19"
                  fill="black"
                />
                <rect
                  className="pedal2"
                  x="446"
                  y="187"
                  width="279"
                  height="205"
                  rx="20"
                  fill="black"
                />
                <rect
                  className="pedal3"
                  x="874"
                  y="187"
                  width="279"
                  height="205"
                  rx="23"
                  fill="black"
                />
              </svg>
            </i>
          </h1>
        </a>

        { user && <>
        <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
          <i
            className={showMenu ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <div className="background-img">
          <ul
            className={showMenu ? "nav-menu active" : "nav-menu"}
            style={{ listStyleType: "none" }}
          >
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        </> }
       
        {/* <Button>Sign Up</Button> */}
      </nav>
    )};

export default Navbar;
