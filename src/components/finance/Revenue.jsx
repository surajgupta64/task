import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import { BsCalendarCheck } from "react-icons/bs";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { AiOutlineMinusSquare } from "react-icons/ai";

const Revenue = () => {
  const [action, setAction] = useState("Today");

  const [action1, setAction1] = useState("Custom Date Range");
  const [value, onChange] = useState(new Date());
  const [openCal, setCal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div>
            <div className="text-center" style={{ fontSize: "23px" }}>
              Revenue Realization
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex" style={{ gap: "30px" }}>
                <div
                  className={
                    action1 === "Custom Date Range"
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
                    {action1}
                  </button>
                  <div class="dropdown-menu">
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
            <br />
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
                  <input
                    type="number"
                    placeholder="Bill Amount"
                    className="btn btn-own"
                  />
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
                    <label
                      className="dropdown-item"
                      onClick={() => setAction("Custom Date Range")}
                    >
                      Custom Date Range
                    </label>
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
                    <label
                      className="dropdown-item"
                      onClick={() => setAction("Custom Date Range")}
                    >
                      Custom Date Range
                    </label>
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

export default Revenue;
