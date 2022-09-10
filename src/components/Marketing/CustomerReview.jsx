import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import { BsCalendarCheck } from "react-icons/bs";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import {
  AiOutlineDelete,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiFillEdit,
} from "react-icons/ai";
import Table from "../Table";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const CustomerReview = () => {
  const [action, setAction] = useState("Custom Date Range");
  const [value, onChange] = useState(new Date());
  const [openCal, setCal] = useState(false);

  const column = [
    /* 
    value: keyword for normal value passing
    btn: keyword for button
    btn1 to btn4: keyword for component passing
    lebel: keyword for anchor tag
    Note: please don't pass empty values or perameters
    */
    {
      heading: (
        <div>
          <MdOutlineCheckBoxOutlineBlank />
        </div>
      ),
      btn1: (
        <div>
          <MdOutlineCheckBoxOutlineBlank />
        </div>
      ),
    },
    { heading: "S.No", value: "Srno" },
    { heading: "Name", value: "Name" },
    { heading: "Contact", value: "Contact" },
    { heading: "E-mail", value: "Email" },
    { heading: "Review", value: "Review" },
    { heading: "Rating", value: "Rating" },
    {
      heading: "Action",
      btn1: (
        <div>
          <div className="d-flex justify-content-center">
            <div className="bg-icon d-flex justify-content-center mr-2 align-items-center">
              <AiFillEdit />
            </div>
            <div className="bg-icon d-flex justify-content-center mr-2 align-items-center">
              <AiOutlineDelete />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-2 ">
            <div className="bg-icon d-flex justify-content-center mr-2 align-items-center">
              <FaWhatsapp />
            </div>
            <div className="bg-icon d-flex justify-content-center mr-2 align-items-center">
              <FiMail />
            </div>
          </div>
        </div>
      ),
    },
  ];

  const Users = [
    {
      Srno: "1",
      Name: "Sajel",
      Contact: "7710957578",
      Email: "surajgupta@gmail.com",
      Review: "Very nice",
      Rating: "7/10",
    },
    {
      Srno: "2",
      Name: "Sajel",
      Contact: "7710957578",
      Email: "surajgupta@gmail.com",
      Review: "Very nice",
      Rating: "7/10",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div>
            <div className="text-center" style={{ fontSize: "23px" }}>
              CUSTOMER REVIEW
            </div>
            <div className="d-flex justify-content-between mt-3">
              <div className="d-flex" style={{ gap: "30px" }}>
                <div
                  className={
                    action === "Custom Date Range"
                      ? "d-flex align-items-center"
                      : "hide"
                  }
                  style={{ gap: "30px" }}
                >
                  <div style={{ fontSize: "15px" }}>From</div>
                  <div className="cal-icon">
                    <BsCalendarCheck onClick={() => setCal(true)} />
                    {openCal && (
                      <div>
                        <Calendar onChange={onChange} value={value} />
                      </div>
                    )}
                  </div>
                  <div style={{ fontSize: "15px" }}>To</div>
                  <div className="cal-icon">
                    <BsCalendarCheck onClick={() => setCal(false)} />
                    {openCal && (
                      <div>
                        <Calendar onChange={onChange} value={value} />
                      </div>
                    )}
                  </div>
                </div>

                <div class="btn-group">
                  <input
                    type="text"
                    className="btn btn-own"
                    placeholder="Enter Name"
                  />
                </div>
                <div>
                  <button className="btn btn-primary">Go</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Table data={Users} column={column} />
          </div>

          <div className="d-flex align-items-center text-center justify-content-center mt-3">
            <button className="btn btn_enquiry">
              <AiOutlineArrowLeft />
              Previous
            </button>
            <p style={{ padding: "20px", marginTop: "10px" }}>Page 1 to 10</p>
            <button className="btn btn_enquiry">
              Next
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerReview;
