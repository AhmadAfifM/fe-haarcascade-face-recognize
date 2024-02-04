import React from "react";

const Adduser = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="text-center font-bold text-lg">ADD USER</div>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Name</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          id="username"
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">ID</span>
        </div>
        <input
          type="number"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          id="id_user"
        />
      </label>
      <button className="btn btn-xs sm:btn-sm md:btn-md btn-success w-[45%] mt-5">
        ADD
      </button>
    </div>
  );
};

export default Adduser;
