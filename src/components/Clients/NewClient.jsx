import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import { BsCalendarCheck } from "react-icons/bs";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MdOutlineAddBox, MdPhoneMissed } from "react-icons/md";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import Table from "../Table";

const NewClient = () => {
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
    { heading: "S.No", value: "id" },
    { heading: "Member Id", value: "MemberId" },
    { heading: "Assign Date & Time", value: "date_time" },
    { heading: "Member Name", label: "member_name" },
    { heading: "Mobile", value: "mobile" },
    { heading: "Service Name", value: "service_name" },
    { heading: "Service Variation Name", value: "variation_name" },
    { heading: "Expiry Date", value: "expiry_date" },
    {
      heading: "Info",
      btn1: (
        <div className="bg-icon d-flex justify-content-center align-items-center">
          <AiOutlineInfoCircle />
        </div>
      ),
    },
    { heading: "Renew", btn: "Renew" },
    {
      heading: "Call Status",
      btn1: (
        <div className="bg-icon d-flex justify-content-center align-items-center">
          <MdOutlineAddBox />
        </div>
      ),
      btn2: (
        <div className="bg-icon d-flex justify-content-center align-items-center">
          <MdPhoneMissed />
        </div>
      ),
    },
    { heading: "Sales Rep", value: "sales_rep" },
    { heading: "PT Trainer", value: "pt_trainer" },
    { heading: "Trainer", value: "trainer" },
    { heading: "Staff Name", value: "staff_name" },
  ];

  const Users = [
    {
      id: 1,
      date_time: "25-08-2022 03:00 PM",
      member_name: "Nayana Nagrecha",
      mobile: "9136123476",
      service_name: "Yoga",
      variation_name: "3 Months",
      expiry_date: "31-08-2022",
      sales_rep: "Sejal Ganatra",
      pt_trainer: "-",
      trainer: "Prabha Yadav",
      staff_name: "Sejal Ganatra",
    },
    {
      id: 2,
      date_time: "25-08-2022 03:00 PM",
      member_name: "Nayana Nagrecha",
      mobile: "9136123476",
      service_name: "Yoga",
      variation_name: "3 Months",
      expiry_date: "31-08-2022",
      sales_rep: "Sejal Ganatra",
      pt_trainer: "-",
      trainer: "Prabha Yadav",
      staff_name: "Sejal Ganatra",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div>
            <div className="text-center" style={{ fontSize: "23px" }}>
              New Clients
            </div>
            <div className="d-flex justify-content-between">
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
                  <button
                    type="button"
                    class="btn btn-own dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {action}
                  </button>
                  <div class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => setAction("Custom Date Range")}
                    >
                      Custom Date Range
                    </a>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary">Go</button>
                </div>
              </div>
              <div className="btn-group">
                <div className="ml-3 btn-own4">Total New Client : 0</div>
              </div>
            </div>
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

export default NewClient;
