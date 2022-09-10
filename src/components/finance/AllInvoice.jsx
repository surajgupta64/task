import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import "react-calendar/dist/Calendar.css";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { AiOutlineMinusSquare } from "react-icons/ai";
const AllInvoice = () => {
  const [action, setAction] = useState("All Client");

  const [action1, setAction1] = useState("Today");

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div className="text-center" style={{ fontSize: "23px" }}>
            Services Invoices
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
            <div className="d-flex" style={{ gap: "20px" }}>
              <div class="btn-group">
                <div className="mr-3">Service Non-PT Sales : 0</div>
                <div className="mr-3">Service PT Sales : 0</div>
                <div className="mr-3">Product Sales : 0</div>
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center" style={{ gap: "30px" }}>
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
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Today")}
                  >
                    Today
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Last Seven Days")}
                  >
                    Last Seven Days
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Month Till Date")}
                  >
                    Month Till Date
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Custom Date Range")}
                  >
                    Custom Date Range
                  </label>
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
                  {action1}
                </button>
                <div className="dropdown-menu">
                  <label
                    className="dropdown-item"
                    onClick={() => setAction1("Today")}
                  >
                    Today
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction1("Last Seven Days")}
                  >
                    Last Seven Days
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction1("Month Till Date")}
                  >
                    Month Till Date
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction1("Custom Date Range")}
                  >
                    Custom Date Range
                  </label>
                </div>
              </div>
            </div>

            <div
              className="d-flex align-items-center justify-content-center mt-3"
              style={{ gap: "30px" }}
            ></div>

            <div>
              <button
                className="btn btn_enquiry "
                style={{ marginRight: "5px" }}
              >
                New Invoice
              </button>
              <button className="btn btn_enquiry">Export Excel</button>
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
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("AllClients")}
                  >
                    All Clients
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Last Seven Days")}
                  >
                    Last Seven Days
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Month Till Date")}
                  >
                    Month Till Date
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Custom Date Range")}
                  >
                    Custom Date Range
                  </label>
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
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("AllClients")}
                  >
                    All Clients
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Last Seven Days")}
                  >
                    Last Seven Days
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Month Till Date")}
                  >
                    Month Till Date
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Custom Date Range")}
                  >
                    Custom Date Range
                  </label>
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
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("AllClients")}
                  >
                    All Clients
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Last Seven Days")}
                  >
                    Last Seven Days
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Month Till Date")}
                  >
                    Month Till Date
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Custom Date Range")}
                  >
                    Custom Date Range
                  </label>
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
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Today")}
                  >
                    Today
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Last Seven Days")}
                  >
                    Last Seven Days
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Month Till Date")}
                  >
                    Month Till Date
                  </label>
                  <label
                    className="dropdown-item"
                    onClick={() => setAction("Custom Date Range")}
                  >
                    Custom Date Range
                  </label>
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
                  <label className="label">View</label>
                </td>
                <td className="td-2">206</td>
                <td className="td-3">
                  <AiOutlineMinusSquare />
                </td>
                <td className="td-2">
                  <label className="label">View</label>
                </td>
                <td className="td-3">
                  <label className="label">View</label>
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

export default AllInvoice;
