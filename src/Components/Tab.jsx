import React from "react";
import TableRegis from "./TableRegis";
import Adduser from "./Adduser";

const Tab = () => {
  return (
    <div className="">
      <div role="tablist" className="tabs tabs-lifted tabs-lg m-1">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Add User"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6 h-[24.3rem]"
        >
          <Adduser />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="List User"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6 w-full"
        >
          <TableRegis />
        </div>
      </div>
    </div>
  );
};

export default Tab;
