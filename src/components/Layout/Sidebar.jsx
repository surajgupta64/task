import React, { useState } from "react";
import { IoIosChatbubbles } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { GoRepoClone } from "react-icons/go";
import { FiSettings, FiTarget } from "react-icons/fi";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {
  ClientDataReport,
  ClientManagementMaster,
  ClientServicesReport,
  DataFromApp,
  DropDown,
  DropDown2,
  ExpenseMaster,
  Finance,
  GeneralMaster,
  HR,
  IntergartionsMaster,
  InventoryMaster,
  MarketingMaster,
  ServiceCategory,
  StaffManagementMaster,
  TraningMaster,
} from "./ImportComp";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
const Sidebar = ({ children }) => {
  const [down, setDown] = useState(0);
  const [option, setOption] = useState(0);
  const [submenu, setSubmenu] = useState(0);
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
                  <FiTarget />
                </div>
                <div className="sidebar_title text-center">
                  Target
                  <br />
                  Dashboard
                </div>
              </div>
              {option === 10 ? (
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
                    setOption(10);
                  }}
                >
                  <BsFillCaretRightFill />
                </div>
              )}
            </div>
          </Link>
          <div className={option === 10 ? "options" : "hide"}>
            <ul className="category-sb">
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
              <li onClick={() => navigate("/trial")}>
                <b>Trails</b>
              </li>
              <li onClick={() => navigate("/followups")}>
                <b>Follow ups</b>
              </li>
              <li>
                <div className="d-flex justify-content-between">
                  <div>
                    <b>Remainder Call</b>
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
              <li onClick={() => navigate("/all/clients")}>
                <b>All Clients</b>
              </li>
              <li onClick={() => navigate("/active/clients")}>
                <b>Active Clients</b>
              </li>
              <li onClick={() => navigate("/upcoming/clients")}>
                <b>Upcoming Renewals Clients</b>
              </li>
              <li onClick={() => navigate("/inactive/clients")}>
                <b>Expriry Clients</b>
              </li>
              <li>
                <div className="d-flex justify-content-between">
                  <div>
                    <b
                      onClick={() =>
                        submenu === 8 ? setSubmenu(0) : setSubmenu(8)
                      }
                    >
                      All Services
                    </b>
                  </div>
                  <div>
                    {submenu === 8 ? (
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
                <div className={submenu === 8 ? "" : "hide"}>
                  <ServiceCategory />
                </div>
              </li>
              <li>
                <div className="d-flex justify-content-between">
                  <div>
                    <b
                      onClick={() =>
                        submenu === 9 ? setSubmenu(0) : setSubmenu(9)
                      }
                    >
                      Client Services Report
                    </b>
                  </div>
                  <div>
                    {submenu === 9 ? (
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
                <div className={submenu === 9 ? "" : "hide"}>
                  <ClientServicesReport />
                </div>
              </li>
              {/* 
              <li onClick={() => navigate("/inactive/clients")}>
                <b>Attendance Register</b>
              </li>
              <li onClick={() => navigate("/clientbiometric/clients")}>
                <b>Client Bio-metric</b>
              </li> */}

              <li>
                <div className="d-flex justify-content-between">
                  <div>
                    <b onClick={() => (down === 2 ? setDown(0) : setDown(2))}>
                      Client Data Report
                    </b>
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
                  <ClientDataReport />
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
              <li onClick={() => navigate("/email/marketing")}>
                <b>E-Mail Marketing</b>
              </li>
              <li onClick={() => navigate("/sms/marketing")}>
                <b>SMS Marketing</b>
              </li>
              <li onClick={() => navigate("/pushnotification/marketing")}>
                <b>Push Marketing</b>
              </li>
              <li onClick={() => navigate("/offer/marketing")}>
                <b>Offers Master</b>
              </li>
              <li onClick={() => navigate("/customer_review/marketing")}>
                <b>Customer Reviews</b>
              </li>
              <li onClick={() => navigate("/pushnotification/marketing")}>
                <b>Bulk Mailer Data</b>
              </li>
              <li onClick={() => navigate("/pushnotification/marketing")}>
                <b>Bulk Calling Data</b>
              </li>
              <li>
                <div className="d-flex justify-content-between">
                  <div>
                    <b
                      onClick={() => (down === 100 ? setDown(0) : setDown(100))}
                    >
                      Data From App
                    </b>
                  </div>
                  <div>
                    {down === 100 ? (
                      <div onClick={() => setDown(0)}>
                        <BsFillCaretUpFill />
                      </div>
                    ) : (
                      <div onClick={() => setDown(100)}>
                        <BsFillCaretDownFill />
                      </div>
                    )}
                  </div>
                </div>
                <div className={down === 100 ? "" : "hide"}>
                  <DataFromApp />
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
              <li onClick={() => navigate("/turf/inverntory")}>
                <b>Turf</b>
              </li>
              <li onClick={() => navigate("/store/inverntory")}>
                <b>Store</b>
              </li>
              <li onClick={() => navigate("/pos/inverntory")}>
                <b>POS (Product)</b>
              </li>
              <li onClick={() => navigate("/stock_report/inverntory")}>
                <b>Stock Report</b>
              </li>
              <li
                onClick={() =>
                  navigate("/product_reorder_alert_report/inverntory")
                }
              >
                <b>Product Reorder Alert Report</b>
              </li>
              <li onClick={() => navigate("/product_list/inverntory")}>
                <b>Product List</b>
              </li>
              <li onClick={() => navigate("/product_setting/inverntory")}>
                <b>Product Setting</b>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar_content" style={{ position: "relative" }}>
          <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <div className="sidebar_icons d-flex justify-content-center ">
                  <RiMoneyDollarCircleFill />
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
                    {submenu === 12 ? (
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
                <div className={submenu === 12 ? "" : "hide"}>
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
              <li onClick={() => navigate("/turf/inverntory")}>
                <b>Emp Rights Access</b>
              </li>
              <li onClick={() => navigate("/turf/inverntory")}>
                <b>EMP Attedance Register</b>
              </li>
              <li onClick={() => navigate("/turf/inverntory")}>
                <b>Biometric Emp</b>
              </li>
              <li onClick={() => navigate("/turf/inverntory")}>
                <b>Emp Indexation Check List</b>
              </li>
              <li onClick={() => navigate("/turf/inverntory")}>
                <b>Holidays List</b>
              </li>
              <li onClick={() => navigate("/turf/inverntory")}>
                <b>Emp Of Documents </b>
              </li>
              <li onClick={() => navigate("/turf/inverntory")}>
                <b>EMP Payrol Setup</b>
              </li>
              <li onClick={() => navigate("/turf/inverntory")}>
                <b>EMP Bday Listing</b>
              </li>
              <li>
                <div className="d-flex justify-content-between">
                  <div>
                    <b>HR Report</b>
                  </div>
                  <div>
                    {submenu === 11 ? (
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
                <div className={submenu === 11 ? "" : "hide"}>
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
        {/* <div className="sidebar_content" style={{ position: "relative" }}>
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
                    {submenu === 10 ? (
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
                <div className={submenu === 10 ? "" : "hide"}>
                  <Marketing />
                </div>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="sidebar_content" style={{ position: "relative" }}>
          <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <div className="sidebar_icons d-flex justify-content-center ">
                  <MdAdminPanelSettings />
                </div>
                <div className="sidebar_title text-center">Fitness</div>
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
                <div className="sidebar_title text-center">Masters</div>
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
          <div className={option === 9 ? "options" : "hide"}>
            <ul className="category-sb">
              <li>
                <div className="d-flex justify-content-between">
                  <div>
                    <b>General</b>
                  </div>
                  <div>
                    {down === 98 ? (
                      <div onClick={() => setDown(0)}>
                        <BsFillCaretUpFill />
                      </div>
                    ) : (
                      <div onClick={() => setDown(98)}>
                        <BsFillCaretDownFill />
                      </div>
                    )}
                  </div>
                </div>
                <div className={down === 98 ? "" : "hide"}>
                  <GeneralMaster />
                </div>
              </li>
              <li>
                <div className="d-flex justify-content-between">
                  <div>
                    <b>Marketing</b>
                  </div>
                  <div>
                    {down === 97 ? (
                      <div onClick={() => setDown(0)}>
                        <BsFillCaretUpFill />
                      </div>
                    ) : (
                      <div onClick={() => setDown(97)}>
                        <BsFillCaretDownFill />
                      </div>
                    )}
                  </div>
                </div>
                <div className={down === 97 ? "" : "hide"}>
                  <MarketingMaster />
                </div>
              </li>
              <li>
                <div className="d-flex justify-content-between">
                  <div>
                    <b>Client Management</b>
                  </div>
                  <div>
                    {down === 96 ? (
                      <div onClick={() => setDown(0)}>
                        <BsFillCaretUpFill />
                      </div>
                    ) : (
                      <div onClick={() => setDown(96)}>
                        <BsFillCaretDownFill />
                      </div>
                    )}
                  </div>
                </div>
                <div className={down === 96 ? "" : "hide"}>
                  <ClientManagementMaster />
                </div>
              </li>
              <li>
                <div className="d-flex justify-content-between">
                  <div>
                    <b>Traning</b>
                  </div>
                  <div>
                    {down === 95 ? (
                      <div onClick={() => setDown(0)}>
                        <BsFillCaretUpFill />
                      </div>
                    ) : (
                      <div onClick={() => setDown(95)}>
                        <BsFillCaretDownFill />
                      </div>
                    )}
                  </div>
                </div>
                <div className={down === 95 ? "" : "hide"}>
                  <TraningMaster />
                </div>
              </li>
              <li>
                <div className="d-flex justify-content-between">
                  <div>
                    <b>Staff Management</b>
                  </div>
                  <div>
                    {down === 94 ? (
                      <div onClick={() => setDown(0)}>
                        <BsFillCaretUpFill />
                      </div>
                    ) : (
                      <div onClick={() => setDown(94)}>
                        <BsFillCaretDownFill />
                      </div>
                    )}
                  </div>
                </div>
                <div className={down === 94 ? "" : "hide"}>
                  <StaffManagementMaster />
                </div>
              </li>
              <li>
                <div className="d-flex justify-content-between">
                  <div>
                    <b>Inventory</b>
                  </div>
                  <div>
                    {down === 93 ? (
                      <div onClick={() => setDown(0)}>
                        <BsFillCaretUpFill />
                      </div>
                    ) : (
                      <div onClick={() => setDown(93)}>
                        <BsFillCaretDownFill />
                      </div>
                    )}
                  </div>
                </div>
                <div className={down === 93 ? "" : "hide"}>
                  <InventoryMaster />
                </div>
              </li>
              <li>
                <div className="d-flex justify-content-between">
                  <div>
                    <b>Expense</b>
                  </div>
                  <div>
                    {down === 92 ? (
                      <div onClick={() => setDown(0)}>
                        <BsFillCaretUpFill />
                      </div>
                    ) : (
                      <div onClick={() => setDown(92)}>
                        <BsFillCaretDownFill />
                      </div>
                    )}
                  </div>
                </div>
                <div className={down === 92 ? "" : "hide"}>
                  <ExpenseMaster />
                </div>
              </li>
              <li>
                <div className="d-flex justify-content-between">
                  <div>
                    <b>Intergartions</b>
                  </div>
                  <div>
                    {down === 91 ? (
                      <div onClick={() => setDown(0)}>
                        <BsFillCaretUpFill />
                      </div>
                    ) : (
                      <div onClick={() => setDown(91)}>
                        <BsFillCaretDownFill />
                      </div>
                    )}
                  </div>
                </div>
                <div className={down === 91 ? "" : "hide"}>
                  <IntergartionsMaster />
                </div>
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
