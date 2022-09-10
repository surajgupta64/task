import React, { useState } from "react";
import { BsCalendarCheck } from "react-icons/bs";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navbar from "../Layout/Navbar";
const Dtask = [
  {
    title: "Service expiry",
    value: "5",
    css: "sum-lgrey",
    color: "green",
    color: "green",
  },
  {
    title: "PT expiry",
    value: "0",
    css: "sum-dgrey",
    color: "red",
    font: "white",
  },
  {
    title: "Upgrades",
    value: "0",
    css: "sum-lgrey",
    color: "green",
  },
  {
    title: "Client birthdays",
    value: "0",
    css: "sum-dgrey",
    color: "red",
    font: "white",
  },
  {
    title: "Client Anniversaries",
    value: "0",
    css: "sum-lgrey",
    color: "green",
  },
  {
    title: "Staff birthdays",
    value: "0",
    css: "sum-dgrey",
    color: "red",
    font: "white",
  },
  {
    title: "Staff Anniversaries",
    value: "0",
    css: "sum-lgrey",
    color: "green",
  },
  {
    title: "Appointments",
    value: "0",
    css: "sum-dgrey",
    color: "red",
    font: "white",
  },
  {
    title: "Follow-ups",
    value: "0",
    css: "sum-lgrey",
    color: "green",
  },
  {
    title: "Classes",
    value: "0",
    css: "sum-dgrey",
    color: "red",
    font: "white",
  },
];
const Dashboard = () => {
  const [action, setAction] = useState("Today");
  const [value, onChange] = useState(new Date());
  const [openCal, setCal] = useState(false);
  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-1">
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
                  onClick={() => setAction("Today")}
                >
                  Today
                </a>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => setAction("Last Seven Days")}
                >
                  Last Seven Days
                </a>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => setAction("Month Till Date")}
                >
                  Month Till Date
                </a>
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
              <button className="btn btn-success">Go</button>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <div className="dbox-8">
                <div>TOTAL ENQUIRIES</div>
                <div>0</div>
                <div>View More</div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dbox-5">
                <div>TRIALS</div>
                <div>0</div>
                <div>View More</div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dbox-4">
                <div>SALES</div>
                <div>0</div>
                <div>View More</div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dbox-3">
                <div>PAYMENTS RECIEVED</div>
                <div>0</div>
                <div>View More</div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dbox-9">
                <div>BALANCE PAYMENT</div>
                <div>0</div>
                <div>View More</div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dbox-7">
                <div>NEW CLIENT(S)</div>
                <div>0</div>
                <div>View More</div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dbox-6">
                <div>RENEWALS</div>
                <div>0</div>
                <div>View More</div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dbox-2">
                <div>ATTENDANCE</div>
                <div>0</div>
                <div>View More</div>
              </div>
            </div>
          </div>
        </div>
        <div className="dsum-2">
          <div className="row">
            <div className="col-lg-4">
              <div className="dbox-summary">
                <h4 className="text-center">Daily Task</h4>
                {Dtask.map((data) => (
                  <div className={data.css}>
                    <div className="row">
                      <div className="col-lg-10">
                        <div className={data.font}>{data.title}</div>
                      </div>
                      <div className="col-lg-2">
                        <div className={data.color}>
                          <b>{data.value}</b>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="dbox-summary-1">
                <h4 className="text-center">Collection Mode</h4>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "80%" }}
                >
                  No result Found
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="dbox-summary-1">
                <h4 className="text-center">Daily Expense</h4>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "80%" }}
                >
                  No result Found
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <table
                className="table_client"
                border="1"
                cellSpacing="0"
                width="100%"
              >
                <tr className="text-center">
                  <th colspan="3">Client Queries</th>
                </tr>
                <tr className="tr-client text-center">
                  <td className="td-1">
                    RAISED
                    <br />
                    <div className="blue">0</div>
                  </td>
                  <td className="td-2">
                    CLOSED
                    <br />
                    <div className="green">0</div>
                  </td>
                  <td className="td-3">
                    OPEN
                    <br />
                    <div className="red">0</div>
                  </td>
                </tr>
              </table>
            </div>
            <div className="col-lg-4">
              <table
                className="table_client_2"
                border="1"
                cellSpacing="0"
                width="100%"
              >
                <tr className="text-center">
                  <th colspan="3">Client Feedback</th>
                </tr>
                <tr className="tr-client text-center">
                  <td className="td-1">
                    RAISED
                    <br />
                    <div className="blue">0</div>
                  </td>
                  <td className="td-2">
                    CLOSED
                    <br />
                    <div className="green">0</div>
                  </td>
                  <td className="td-3">
                    OPEN
                    <br />
                    <div className="red">0</div>
                  </td>
                </tr>
              </table>
            </div>
            <div className="col-lg-4">
              <table
                className="table_client"
                border="1"
                cellSpacing="0"
                width="100%"
              >
                <tr className="text-center">
                  <th colspan="3">Booked Session</th>
                </tr>
                <tr className="tr-client text-center">
                  <td className="td-1">
                    BOOKED SEAT
                    <br />
                    <div className="blue">0</div>
                  </td>
                  <td className="td-2">
                    RESERVED SEAT
                    <br />
                    <div className="green">0</div>
                  </td>
                  <td className="td-3">
                    CANCEL SEAT
                    <br />
                    <div className="red">0</div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
