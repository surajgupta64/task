import React, { useState } from "react";
import { IoIosChatbubbles } from "react-icons/io";
import { MdAdminPanelSettings, MdOutlineUpgrade } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { GoRepoClone } from "react-icons/go";
import { FiSettings } from "react-icons/fi";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";
import { MdOutlineDashboardCustomize, MdAutorenew } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsFillCreditCard2FrontFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { IoCallSharp } from "react-icons/io5";
import { FaUserSlash, FaBirthdayCake } from "react-icons/fa";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { GiOrganigram } from "react-icons/gi";
import { SiHandshake } from "react-icons/si";
import { CustomGroups, Data, DropDown,DropDown2, Engagement, Finance, HR, Marketing, ServiceCategory, ValidityBased } from "./ImportComp";
import CommunicationDropdawn from "./CommunicationDropdawn";
const Sidebar = ({ children }) => {
  const [down, setDown] = useState(0);
  const [option, setOption] = useState(0);
  const [submenu, setSubmenu] = useState(0);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <div className="sidebar">
        <div className="sidebar_content">
          <div className="d-flex align-items-center justify-content-between">
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              <div className="sidebar_icons d-flex justify-content-center">
                <MdOutlineDashboardCustomize />
              </div>
              <div className="sidebar_title text-center">Dashboard</div>
            </Link>
          </div>
        </div>

        <div className="sidebar_content" style={{ position: "relative" }}>
          <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <div className="sidebar_icons d-flex justify-content-center ">
                  <SiGoogleads />
                </div>
                <div className="sidebar_title text-center">Leads</div>
              </div>
              {option === 1 ? (
                <div
                  onClick={() => {
                    setOption(0);
                  }}
                >
                  <BsFillCaretRightFill />
                </div>
              ) : (
                <div
                  onClick={() => {
                    setOption(1);
                  }}
                >
                  <BsFillCaretRightFill />
                </div>
              )}
            </div>
          </Link>
          <div className={option === 1 ? "options" : "hide"}>
            <ul className="category-sb">
              <li onClick={() => navigate("/all/enquiry")}>
                <b>All Enquiry</b>
              </li>
              <li onClick={() => navigate("/all/enquiry")}>
                <b>Trails</b>
              </li>
              <li>
                
                <div className="d-flex justify-content-between">
                  <div>
                  <b>Follow ups</b>
                  </div>
                  <div>
                    {down === 1 ? (
                      <div onClick={() => setDown(0)}>
                        <BsFillCaretUpFill />
                      </div>
                    ) : (
                      <div onClick={() => setDown(1)}>
                        <BsFillCaretDownFill />
                      </div>
                    )}
                  </div>
                </div>
                <div className={down === 1 ? "" : "hide"}>
                  <DropDown />
                </div>
              </li>
              <li>
              
                <div className="d-flex justify-content-between">
                  <div>
                  <b>Employee Dashbord</b>
                  </div>
                  <div>
                    {down === 2 ? (
                      <div onClick={() => setDown(0)}>
                        <BsFillCaretUpFill />
                      </div>
                    ) : (
                      <div onClick={() => setDown(2)}>
                        <BsFillCaretDownFill />
                      </div>
                    )}
                  </div>
                </div>
                <div className={down === 2 ? "" : "hide"}>
                  <DropDown2 />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar_content" style={{ position: "relative" }}>
          <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <div className="sidebar_icons d-flex justify-content-center ">
                  <FaUserTie />
                </div>
                <div className="sidebar_title text-center">Clients</div>
              </div>
              {option === 2 ? (
                <div
                  onClick={() => {
                    setOption(0);
                  }}
                >
                  <BsFillCaretRightFill />
                </div>
              ) : (
                <div
                  onClick={() => {
                    setOption(2);
                  }}
                >
                  <BsFillCaretRightFill />
                </div>
              )}
            </div>
          </Link>
          <div className={option === 2 ? "options" : "hide"}>
            <ul className="category-sb">
              <li>
              <div className="d-flex justify-content-between">
                  <div>
                    <b>Validity Based</b>
                  </div>
                  <div>
                    {submenu ===7 ? (
                      <div onClick={() => setSubmenu(0)}>
                        <BsFillCaretUpFill />
                      </div>
                    ) : (
                      <div onClick={() => setSubmenu(7)}>
                        <BsFillCaretDownFill />
                      </div>
                    )}
                  </div>
                </div>
                <div className={submenu===7 ? "" : "hide"}>
                  <ValidityBased />
                </div>
              </li>
              <li>
              <div className="d-flex justify-content-between">
                  <div>
                    <b>Service Category</b>
                  </div>
                  <div>
                    {submenu ===8 ? (
                      <div onClick={() => setSubmenu(0)}>
                        <BsFillCaretUpFill />
                      </div>
                    ) : (
                      <div onClick={() => setSubmenu(8)}>
                        <BsFillCaretDownFill />
                      </div>
                    )}
                  </div>
                </div>
                <div className={submenu===8 ? "" : "hide"}>
                  <ServiceCategory />
                </div>
              </li>
              <li>
              <div className="d-flex justify-content-between">
                  <div>
                    <b>Custom Groups</b>
                  </div>
                  <div>
                    {submenu ===9 ? (
                      <div onClick={() => setSubmenu(0)}>
                        <BsFillCaretUpFill />
                      </div>
                    ) : (
                      <div onClick={() => setSubmenu(9)}>
                        <BsFillCaretDownFill />
                      </div>
                    )}
                  </div>
                </div>
                <div className={submenu===9 ? "" : "hide"}>
                  <CustomGroups />
                </div>
              </li>
              <li onClick={() => navigate("/inactive/clients")}>
                <b>Attendance Register</b>
              </li>
              <li onClick={() => navigate("/clientbiometric/clients")}>
                <b>Client Bio-metric</b>
              </li>

              <li>
                <div className="d-flex justify-content-between">
                  <div>
                    <b>Reminder Calls</b>
                  </div>
                  <div>
                    {down === 2 ? (
                      <div onClick={() => setDown(0)}>
                        <BsFillCaretUpFill />
                      </div>
                    ) : (
                      <div onClick={() => setDown(2)}>
                        <BsFillCaretDownFill />
                      </div>
                    )}
                  </div>
                </div>
                <div className={down === 2 ? "" : "hide"}>
                  <DropDown />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar_content" style={{ position: "relative" }}>
          <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <div className="sidebar_icons d-flex justify-content-center ">
                  <IoIosChatbubbles />
                </div>
                <div className="sidebar_title text-center">Marketing</div>
              </div>
              {option === 3 ? (
                <div
                  onClick={() => {
                    setOption(0);
                  }}
                >
                  <BsFillCaretRightFill />
                </div>
              ) : (
                <div
                  onClick={() => {
                    setOption(3);
                  }}
                >
                  <BsFillCaretRightFill />
                </div>
              )}
            </div>
          </Link>
          <div className={option === 3 ? "options" : "hide"}>
            <ul className="category-sb">
              <li>
              <div className="d-flex justify-content-between">
                  <div>
                    <b>Communication</b>
                  </div>
                  <div>
                    {submenu ===3 ? (
                      <div onClick={() => setSubmenu(0)}>
                        <BsFillCaretUpFill />
                      </div>
                    ) : (
                      <div onClick={() => setSubmenu(3)}>
                        <BsFillCaretDownFill />
                      </div>
                    )}
                  </div>
                </div>
                <div className={submenu===3 ? "" : "hide"}>
                  <CommunicationDropdawn />
                </div>
              </li>
              <li>
                
              <div className="d-flex justify-content-between">
                  <div>
                    <b>Value Added</b>
                  </div>
                  <div>
                    {submenu ===17 ? (
                      <div onClick={() => setSubmenu(0)}>
                        <BsFillCaretUpFill />
                      </div>
                    ) : (
                      <div onClick={() => setSubmenu(17)}>
                        <BsFillCaretDownFill />
                      </div>
                    )}
                  </div>
                </div>
                <div className={submenu===17 ? "" : "hide"}>
                  
              <Marketing />
                </div>
              </li>
              <li>
              <div className="d-flex justify-content-between">
                  <div>
                    <b>Engagement</b>
                  </div>
                  <div>
                    {submenu ===4 ? (
                      <div onClick={() => setSubmenu(0)}>
                        <BsFillCaretUpFill />
                      </div>
                    ) : (
                      <div onClick={() => setSubmenu(4)}>
                        <BsFillCaretDownFill />
                      </div>
                    )}
                  </div>
                </div>
                <div className={submenu===4 ? "" : "hide"}>
                  <Engagement />
                </div>
              </li>
              <li>
              <div className="d-flex justify-content-between">
                  <div>
                    <b>Data</b>
                  </div>
                  <div>
                    {submenu ===5 ? (
                      <div onClick={() => setSubmenu(0)}>
                        <BsFillCaretUpFill />
                      </div>
                    ) : (
                      <div onClick={() => setSubmenu(5)}>
                        <BsFillCaretDownFill />
                      </div>
                    )}
                  </div>
                </div>
                <div className={submenu===5 ? "" : "hide"}>
                  <Data />
                </div>

              </li>
              <li>
              <div className="d-flex justify-content-between">
                  <div>
                    <b>Promotion</b>
                  </div>
                  <div>
                    {submenu ===6 ? (
                      <div onClick={() => setSubmenu(0)}>
                        <BsFillCaretUpFill />
                      </div>
                    ) : (
                      <div onClick={() => setSubmenu(6)}>
                        <BsFillCaretDownFill />
                      </div>
                    )}
                  </div>
                </div>
                <div className={submenu===6 ? "" : "hide"}>
                  <CommunicationDropdawn />
                </div>
              </li>
              
              <li onClick={() => navigate("/inactive/clients")}>
                <b>Staff Substitution</b>
              </li>
              <li>
                <div className="d-flex justify-content-between">
                  <div>
                    <b>Reminder Calls</b>
                  </div>
                  <div>
                    {down === 3 ? (
                      <div onClick={() => setDown(0)}>
                        <BsFillCaretUpFill />
                      </div>
                    ) : (
                      <div onClick={() => setDown(3)}>
                        <BsFillCaretDownFill />
                      </div>
                    )}
                  </div>
                </div>
                <div className={down === 3 ? "" : "hide"}>
                  <DropDown />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar_content" style={{ position: "relative" }}>
          <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <div className="sidebar_icons d-flex justify-content-center ">
                  <IoIosChatbubbles />
                </div>
                <div className="sidebar_title text-center">Inverntory</div>
              </div>
              {option === 4 ? (
                <div
                  onClick={() => {
                    setOption(0);
                  }}
                >
                  <BsFillCaretRightFill />
                </div>
              ) : (
                <div
                  onClick={() => {
                    setOption(4);
                  }}
                >
                  <BsFillCaretRightFill />
                </div>
              )}
            </div>
          </Link>
          <div className={option === 4 ? "options" : "hide"}>
            <ul className="category-sb">
              <li>
                <Link
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/all/enquiry"
                >
                  <b>Stock Movement</b>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/all/enquiry"
                >
                  <b>Product Reorder Alert</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar_content" style={{ position: "relative" }}>
          <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <div className="sidebar_icons d-flex justify-content-center ">
                  <IoMdContacts />
                </div>
                <div className="sidebar_title text-center">Finance</div>
              </div>
              {option === 5 ? (
                <div
                  onClick={() => {
                    setOption(0);
                  }}
                >
                  <BsFillCaretRightFill />
                </div>
              ) : (
                <div
                  onClick={() => {
                    setOption(5);
                  }}
                >
                  <BsFillCaretRightFill />
                </div>
              )}
            </div>
          </Link>
          <div className={option === 5 ? "options" : "hide"}>
            <ul className="category-sb">
            <li>
              <div className="d-flex justify-content-between">
                  <div>
                    <b>Finance</b>
                  </div>
                  <div>
                    {submenu ===12 ? (
                      <div onClick={() => setSubmenu(0)}>
                        <BsFillCaretUpFill />
                      </div>
                    ) : (
                      <div onClick={() => setSubmenu(12)}>
                        <BsFillCaretDownFill />
                      </div>
                    )}
                  </div>
                </div>
                <div className={submenu===12 ? "" : "hide"}>
                  <Finance />
                </div>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="sidebar_content" style={{ position: "relative" }}>
          <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <div className="sidebar_icons d-flex justify-content-center ">
                  <IoMdContacts />
                </div>
                <div className="sidebar_title text-center">HR</div>
              </div>
              {option === 6 ? (
                <div
                  onClick={() => {
                    setOption(0);
                  }}
                >
                  <BsFillCaretRightFill />
                </div>
              ) : (
                <div
                  onClick={() => {
                    setOption(6);
                  }}
                >
                  <BsFillCaretRightFill />
                </div>
              )}
            </div>
          </Link>
          <div className={option === 6 ? "options" : "hide"}>
            <ul className="category-sb">
            <li>
              <div className="d-flex justify-content-between">
                  <div>
                    <b>HR</b>
                  </div>
                  <div>
                    {submenu ===11 ? (
                      <div onClick={() => setSubmenu(0)}>
                        <BsFillCaretUpFill />
                      </div>
                    ) : (
                      <div onClick={() => setSubmenu(11)}>
                        <BsFillCaretDownFill />
                      </div>
                    )}
                  </div>
                </div>
                <div className={submenu===11 ? "" : "hide"}>
                  <HR />
                </div>
              </li>
              <li>
                <div className="d-flex justify-content-between">
                  <div>
                    <b>Reminder Calls</b>
                  </div>
                  <div>
                    {down === 6 ? (
                      <div onClick={() => setDown(0)}>
                        <BsFillCaretUpFill />
                      </div>
                    ) : (
                      <div onClick={() => setDown(6)}>
                        <BsFillCaretDownFill />
                      </div>
                    )}
                  </div>
                </div>
                <div className={down === 6 ? "" : "hide"}>
                  <DropDown />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar_content" style={{ position: "relative" }}>
          <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <div className="sidebar_icons d-flex justify-content-center ">
                  <GoRepoClone />
                </div>
                <div className="sidebar_title text-center">Masters</div>
              </div>
              {option === 7 ? (
                <div
                  onClick={() => {
                    setOption(0);
                  }}
                >
                  <BsFillCaretRightFill />
                </div>
              ) : (
                <div
                  onClick={() => {
                    setOption(7);
                  }}
                >
                  <BsFillCaretRightFill />
                </div>
              )}
            </div>
          </Link>
          <div className={option === 7 ? "options" : "hide"}>
            <ul className="category-sb">
            <li>
              <div className="d-flex justify-content-between">
                  <div>
                    <b>Marketing</b>
                  </div>
                  <div>
                    {submenu ===10 ? (
                      <div onClick={() => setSubmenu(0)}>
                        <BsFillCaretUpFill />
                      </div>
                    ) : (
                      <div onClick={() => setSubmenu(10)}>
                        <BsFillCaretDownFill />
                      </div>
                    )}
                  </div>
                </div>
                <div className={submenu===10 ? "" : "hide"}>
                  <Marketing />
                </div>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="sidebar_content" style={{ position: "relative" }}>
          <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <div className="sidebar_icons d-flex justify-content-center ">
                  <MdAdminPanelSettings />
                </div>
                <div className="sidebar_title text-center">Training</div>
              </div>
              {option === 8 ? (
                <div
                  onClick={() => {
                    setOption(0);
                  }}
                >
                  <BsFillCaretRightFill />
                </div>
              ) : (
                <div
                  onClick={() => {
                    setOption(8);
                  }}
                >
                  <BsFillCaretRightFill />
                </div>
              )}
            </div>
          </Link>
          <div className={option === 8 ? "options" : "hide"}>
            <ul className="category-sb">
              <li>
                <Link
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/ptDeshboard/training"
                >
                  <b>My PT Dashboard</b>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/viewExercises/training"
                >
                  <b>Exercise Library</b>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/workoutTemplates/training"
                >
                  <b>Workout Templates</b>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/mealPlan/training"
                >
                  <b>Meal Plan Templates</b>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/assessment/training"
                >
                  <b>Assessment Templates</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar_content" style={{ position: "relative" }}>
          <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <div className="sidebar_icons d-flex justify-content-center ">
                  <FiSettings />
                </div>
                <div className="sidebar_title text-center">Setting</div>
              </div>
              {option === 9 ? (
                <div
                  onClick={() => {
                    setOption(0);
                  }}
                >
                  <BsFillCaretRightFill />
                </div>
              ) : (
                <div
                  onClick={() => {
                    setOption(9);
                  }}
                >
                  <BsFillCaretRightFill />
                </div>
              )}
            </div>
          </Link>
          <div className={option === 9 ? "options-1" : "hide"}>
            <ul className="category-sb">
              <li>
                <Link
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/all/enquiry"
                >
                  <b>All Enquiry</b>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/all/enquiry"
                >
                  <b>All Enquiry</b>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/all/enquiry"
                >
                  <b>All Enquiry</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
