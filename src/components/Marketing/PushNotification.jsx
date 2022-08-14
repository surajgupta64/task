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
const PushNotification = () => {
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
        <div className="dbox-10">
        <div className="row">
            <div className="col-lg-4 ">
              <div className="d-flex right mr-3" style={{gap: "30px"}}>
              Push Notification
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-lg-4">
              <div
                className="d-flex right"
                style={{ gap: "30px" }}
              >
                <div className="mr-3">Title:</div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="d-flex mt-3" style={{ gap: "30px" }}>
              <div className="btn-group">
              <input
                type="text"
                className="btn btn-own"
                placeholder="Enter Title"
              />
            </div>
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
              <div className="d-flex mt-3" style={{ gap: "30px" }}>
              <div className="btn-group">
              <input
                type="text"
                className="btn btn-own"
                placeholder="Enter Message"
              />
            </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="d-flex right"
                style={{ gap: "30px" }}
              >
              <div className="mr-3">Details:</div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="d-flex mt-3" style={{ gap: "30px" }}>
              <div className="btn-group">
            <textarea
              style={{ minHeight: "100px", minWidth: "700px" }}
              placeholder="Type Details"
            ></textarea>
          </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="d-flex right"
                style={{ gap: "30px" }}
              >
              <div className="mr-3">Notify To:</div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="d-flex mt-3" style={{ gap: "30px" }}>
              <div className="btn-group">
              <label>
                <input type="checkbox" value="All Members" checked="true" />
                <span>Members </span>
              </label>
              <label style={{ marginLeft: "15px" }}>
                <input type="checkbox" value="All Members" />
                <span>Non Members and members not logged in </span>
              </label>
            </div>
              </div>
            </div> 
            <div className="col-lg-4">
              <div
                className="d-flex right"
                style={{ gap: "30px" }}
              >
              <div className="mr-3">Platform:</div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="d-flex mt-3" style={{ gap: "30px" }}>
              <div className="btn-group">
              <label>
                <input type="checkbox" value="All Members" checked="true" />
                <span>Android </span>
              </label>
              <label style={{ marginLeft: "15px" }}>
                <input type="checkbox" value="All Members" />
                <span>IOS </span>
              </label>
            </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="d-flex right"
                style={{ gap: "30px" }}
              >
              </div>
            </div>
            <div className="col-lg-8">
              <div className="d-flex mt-3" style={{ gap: "30px" }}>
              
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

export default PushNotification;
