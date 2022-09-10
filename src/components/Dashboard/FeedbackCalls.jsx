import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsCalendarCheck } from "react-icons/bs";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Table from "../Table";

const FeedbackCalls = () => {
  const [action, setAction] = useState("All Staff");
  const [call, setCall] = useState("All Call");
  const [staff, setStaff] = useState("All Staff");
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
    { heading: "Sr.No", value: "Srno" },
    { heading: "Name", value: "Name" },
    { heading: "Mobile", value: "Mobile" },
    { heading: "Billing", value: "Billing" },
    { heading: "Attendance Id / Checkin", value: "Checkin" },
    { heading: "Packaged Start Date", value: "Start" },
    { heading: "Packaged End date", value: "End" },
  ];

  const Users = [
    {
      Srno: "1",
      Name: "Sajel",
      Checkin: "25-08-2022 03:00 PM",
      Mobile: "9136123476",
      Billing: "Yoga",
      Start: "25-08-2022",
      End: "25-09-2022",
    },
    {
      Srno: "2",
      Name: "Sajel",
      Checkin: "25-08-2022 03:00 PM",
      Mobile: "9136123476",
      Billing: "Yoga",
      Start: "25-08-2022",
      End: "25-09-2022",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div
            className="text-center mb-2 text-capitalize"
            style={{ fontSize: "23px" }}
          >
            Feedback Call
          </div>
          <div
            className="d-flex align-items-center justify-content-around mt-3"
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
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-own dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {action}
              </button>
              <div className="dropdown-menu">
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setAction("All Staff")}
                >
                  All Staff
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setAction("Riya")}
                >
                  Riya
                </a>
              </div>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-own dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {call}
              </button>
              <div className="dropdown-menu">
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setCall("All Calls")}
                >
                  All Calls
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setCall("Missed Calls")}
                >
                  Missed Calls
                </a>
              </div>
            </div>
            <div>
              <button className="btn btn-primary">Go</button>
            </div>
            <div className="btn-group"></div>
            <div className="btn-group"></div>

            <div className="btn-group">
              <div className="ml-3 btn-own4">Total Feedback : 0</div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <div className="d-flex" style={{ gap: "30px" }}>
              <div
                className="d-flex align-items-center"
                style={{ gap: "20px" }}
              >
                <div>Communicate</div>
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-own dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {staff}
                  </button>
                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => setStaff("Select")}
                    >
                      Select
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => setStaff("Send E-mail")}
                    >
                      Send E-mail
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => setStaff("Send SMS")}
                    >
                      Send SMS
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex" style={{ gap: "10px" }}>
              <button
                className="btn btn_enquiry"
                style={{ backgroundColor: "#2640E6", color: "#ffffff" }}
              >
                SCHEDULED 0
              </button>
              <button
                className="btn btn_enquiry"
                style={{ backgroundColor: "#F7A527", color: "#ffffff" }}
              >
                ATTEMPTED 0
              </button>
              <button
                className="btn btn_enquiry"
                style={{ backgroundColor: "#37C726", color: "#ffffff" }}
              >
                CONTACTED 0
              </button>
              <button
                className="btn btn_enquiry"
                style={{ backgroundColor: "#91CBE4", color: "#ffffff" }}
              >
                NOT CONTACTED 0
              </button>
              <button
                className="btn btn_enquiry"
                style={{ backgroundColor: "#E62632", color: "#ffffff" }}
              >
                MISSED 0
              </button>
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

export default FeedbackCalls;
