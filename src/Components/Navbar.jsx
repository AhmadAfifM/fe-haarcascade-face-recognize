import React from "react";
const Navbar = () => {
  return (
    <div className="navbar bg-black px-10">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-white">Haar Cascade</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1  text-white">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <details>
              <summary>Main</summary>
              <ul className="bg-black rounded-t-none text-white border-white">
                <li>
                  <a href="/main">Registration</a>
                </li>
                <li>
                  <a href="/scan">Face Scanning</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
