import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
  MdOutlineAddBox,
} from "react-icons/md";
import {
  AiOutlineMinusSquare,
  AiOutlineDelete,
  AiFillEdit,
} from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import {
  BsCalendarEvent,
  BsFilePostFill,
  BsCalendarCheck,
} from "react-icons/bs";
const Email = () => {
  const [action, setAction] = useState("Select");
  const [options, setOptions] = useState("All Members");
  const [action1, setAction1] = useState("Select SMS Type");
  const [value, onChange] = useState(new Date());
  const [openCal, setCal] = useState(false);

  const onRadioChange = (e) => {
    setOptions(e.target.value);
  };
  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10 ">
          <div className="row">
            <div className="col-lg-4">
              <div className="d-flex right mr-3" style={{gap: "30px",fontSize:"20px"}}>
                Email
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div
                className="d-flex right"
                style={{ gap: "30px" }}
              >
                <div className="mr-3">Gateway:</div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="d-flex mt-3" style={{ gap: "30px" }}>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-own dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {action1}
                  </button>
                  <div className="dropdown-menu">
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => setAction1("Select SMS Type")}
                    >
                      Select SMS Type
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => setAction1("Transactional SMS Bal:0")}
                    >
                      Transactional SMS Bal:0
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => setAction1("Promotional SMS Bal:0")}
                    >
                      Promotional SMS Bal:0
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="d-flex right"
                style={{ gap: "30px" }}
              >
                <div className="mr-3">Subject:</div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="d-flex mt-3" style={{ gap: "30px" }}>
                <div className="btn-group">
                  <input
                    type="text"
                    className="btn btn-own"
                    placeholder="Enter Subject"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="d-flex align-items-center justify-content-center right"
                style={{ gap: "30px" }}
              >
                <div className="mr-3">SMS Template:</div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="d-flex mt-3" style={{ gap: "30px" }}>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-own dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {action1}
                  </button>
                  <div className="dropdown-menu">
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => setAction1("Select")}
                    >
                      Select
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => setAction1("Last Seven Days")}
                    >
                      Last Seven Days
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => setAction1("Month Till Date")}
                    >
                      Month Till Date
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => setAction1("Custom Date Range")}
                    >
                      Custom Date Range
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="d-flex align-items-center justify-content-center mt-3"
                style={{ gap: "30px" }}
              ></div>
            </div>
            
            <div className="col-lg-8">
              <div
                className="d-flex align-items-center justify-content-center mt-3"
                style={{ gap: "30px" }}
              >
                <label>
              <input
                type="radio"
                value="All Members"
                checked={options === "All Members"}
                onChange={onRadioChange}
              />
              <span>All Members </span>
            </label>

            <label style={{ marginLeft: "15px" }}>
              <input
                type="radio"
                value="Active Members"
                checked={options === "Active Members"}
                onChange={onRadioChange}
              />
              <span>Active Members </span>
            </label>

            <label style={{ marginLeft: "15px" }}>
              <input
                type="radio"
                value="Inactive Members"
                checked={options === "Inactive Members"}
                onChange={onRadioChange}
              />
              <span>Inactive Members </span>
            </label>

            <label style={{ marginLeft: "15px" }}>
              <input
                type="radio"
                value="Suspect List"
                checked={options === "Suspect List"}
                onChange={onRadioChange}
              />
              <span>Suspect List </span>
            </label>

            <label style={{ marginLeft: "15px" }}>
              <input
                type="radio"
                value="Enquiry List"
                checked={options === "Enquiry List"}
                onChange={onRadioChange}
              />
              <span>Enquiry List </span>
            </label>
              </div>
            </div>


            <div className="col-lg-4">
              <div
                className="d-flex right"
                style={{ gap: "30px" }}
              >
                
              <div className="mr-3">Message:</div>
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="d-flex  mt-3"
                style={{ gap: "30px" }}
              >
                <div className="btn-group">
              <textarea
                style={{ minHeight: "100px", minWidth: "700px" }}
                placeholder="Type Email"
              ></textarea>
            </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="d-flex align-items-center justify-content-center mt-3"
                style={{ gap: "30px" }}
              >
                
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="d-flex mt-3"
                style={{ gap: "30px" }}
              >
                
            <div className="btn-group">
              <button className="btn btn-primary">Send</button>
            </div>
              </div>
            </div>




          </div>

          
          
        </div>
      </div>
    </>
  );
};

export default Email;
