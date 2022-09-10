import React from "react";
import yog_logo from "../../Images/yog_logo.png";
import { FiSearch } from "react-icons/fi";
import { HiUserAdd } from "react-icons/hi";
import { BsCalendarEvent, BsFilePostFill } from "react-icons/bs";
import { ImTelegram } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { TbBrandBooking } from "react-icons/tb";
import { RiSpeedLine } from "react-icons/ri";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  return (
    <>
      <div className="admin_navbar">
        <div
          className="bunty d-flex align-items-center justify-content-between"
          style={{ height: "100%;" }}
        >
          <div>
            <img src={yog_logo} width="100px" height="100px" alt="error" />
          </div>
          <ul className="d-flex" style={{ gap: "50px" }}>
            <li className="nav-icons">
              {search ? (
                <>
                  <div className="fc btn-group">
                    <input
                      type="text"
                      className=" mr-2"
                      style={{ padding: "5px" }}
                      placeholder="Search..."
                    />
                    <button>Search</button>
                    <AiOutlineClose onClick={() => setSearch(!search)} />
                  </div>
                </>
              ) : (
                <FiSearch onClick={() => setSearch(!search)} />
              )}
            </li>
            <li className="nav-icons">
              <HiUserAdd />
            </li>
            <li className="nav-icons">
              <TbBrandBooking />
            </li>
            <li className="nav-icons">
              <BsCalendarEvent />
            </li>
            <li className="nav-icons">
              <RiSpeedLine />
            </li>
            <li className="nav-icons">
              <BsFilePostFill />
            </li>
            <li className="nav-icons">
              <ImTelegram />
            </li>
            <li className="nav-icons">
              <CgProfile />
            </li>
          </ul>
          <ul className="hide" style={{ gap: "50px" }}>
            <li className="nav-icons">
              {search ? (
                <>
                  <div className="fc btn-group">
                    <input
                      type="text"
                      className=" mr-2"
                      style={{ padding: "5px" }}
                      placeholder="Search..."
                    />
                    <button>Search</button>
                    <AiOutlineClose onClick={() => setSearch(!search)} />
                  </div>
                </>
              ) : (
                <FiSearch onClick={() => setSearch(!search)} />
              )}
            </li>
            <li className="nav-icons">
              <AiOutlineMenu />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
