import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import "react-calendar/dist/Calendar.css";
import { MdOutlineAddBox, MdPhoneMissed } from "react-icons/md";
import {
  AiOutlineInfoCircle,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import Table from "../Table";
const Batch = () => {
  const [action, setAction] = useState("All Clients");

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
          <div className="text-center" style={{ fontSize: "23px" }}>
            All Batch
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <div className="d-flex align-items-center" style={{ gap: "30px" }}>
              <div className="mr-3">Filter by:</div>
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
                    onClick={() => setAction("Today")}
                  >
                    Today
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => setAction("Last Seven Days")}
                  >
                    Last Seven Days
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => setAction("Month Till Date")}
                  >
                    Month Till Date
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => setAction("Custom Date Range")}
                  >
                    Custom Date Range
                  </a>
                </div>
              </div>
            </div>

            <div
              className="d-flex align-items-center justify-content-center"
              style={{ gap: "30px" }}
            >
              <div className="mr-3">Sub-filter:</div>
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
                    onClick={() => setAction("Today")}
                  >
                    Today
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => setAction("Last Seven Days")}
                  >
                    Last Seven Days
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => setAction("Month Till Date")}
                  >
                    Month Till Date
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => setAction("Custom Date Range")}
                  >
                    Custom Date Range
                  </a>
                </div>
              </div>
            </div>

            <div>
              <button
                className="btn btn_enquiry "
                style={{ marginRight: "5px" }}
              >
                Add to Mailer
              </button>
              <button className="btn btn_enquiry">Export Clients</button>
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="d-flex align-items-center">
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
                      onClick={() => setAction("AllClients")}
                    >
                      All Clients
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => setAction("Last Seven Days")}
                    >
                      Last Seven Days
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => setAction("Month Till Date")}
                    >
                      Month Till Date
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => setAction("Custom Date Range")}
                    >
                      Custom Date Range
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="d-flex align-items-center justify-content-center "
              style={{ gap: "30px" }}
            >
              <div className="mr-3">Communicate:</div>
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
                    onClick={() => setAction("Today")}
                  >
                    Today
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => setAction("Last Seven Days")}
                  >
                    Last Seven Days
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => setAction("Month Till Date")}
                  >
                    Month Till Date
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => setAction("Custom Date Range")}
                  >
                    Custom Date Range
                  </a>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center" style={{ gap: "20px" }}>
              <div className="mr-3"> Mailer list</div>
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
                    onClick={() => setAction("Today")}
                  >
                    Today
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => setAction("Last Seven Days")}
                  >
                    Last Seven Days
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => setAction("Month Till Date")}
                  >
                    Month Till Date
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => setAction("Custom Date Range")}
                  >
                    Custom Date Range
                  </a>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center" style={{ gap: "20px" }}>
              <button style={{ width: "100%" }} className="btn btn_enquiry">
                Import Member Details
              </button>
            </div>
          </div>
        </div>
        <div className="dbox-10">
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

export default Batch;
