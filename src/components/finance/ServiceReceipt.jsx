import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import "react-calendar/dist/Calendar.css";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { AiOutlineMinusSquare } from "react-icons/ai";
const ServiceReceipt = () => {
  const [action, setAction] = useState("All Client");

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div className="text-center" style={{ fontSize: "23px" }}>
            Services Receipt
          </div>
          <div className="d-flex justify-content-between mt-10">
            <div className="d-flex" style={{ gap: "30px" }}>
              <div class="btn-group">
                <input
                  type="text"
                  className="btn btn-own"
                  placeholder="Search by name"
                />
              </div>
              <div>
                <button className="btn btn-primary">Go</button>
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-between">
            <div className="d-flex mt-3" style={{ gap: "30px" }}>
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

              <div>
                <button className="btn btn-primary">Go</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dbox-10">
          <div>
            <table
              className="table_client_2"
              border="1"
              cellSpacing="0"
              width="100%"
            >
              <tr className="tr-client text-center">
                <td className="td-2">
                  <div>
                    <MdOutlineCheckBoxOutlineBlank />
                  </div>
                </td>
                <td className="td-2">S.No</td>
                <td className="td-3">Profile</td>
                <td className="td-2">Billing</td>
                <td className="td-3">Service Card</td>
                <td className="td-2">Attendance ID/ Checkin</td>
                <td className="td-3">Call Log</td>
                <td className="td-2">Appointment</td>
                <td className="td-3">Training</td>
                <td className="td-2">Archive</td>
              </tr>

              <tr className="tr-client text-center">
                <td className="td-2">
                  <div>
                    <MdOutlineCheckBoxOutlineBlank />
                  </div>
                </td>
                <td className="td-2">1</td>
                <td className="td-3">dakshta</td>
                <td className="td-2">Payments</td>
                <td className="td-3">
                  <a href="#">View</a>
                </td>
                <td className="td-2">206</td>
                <td className="td-3">
                  <AiOutlineMinusSquare />
                </td>
                <td className="td-2">
                  <a href="#">View</a>
                </td>
                <td className="td-3">
                  <a href="#">View</a>
                </td>
                <td className="td-2">Archive</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceReceipt;
