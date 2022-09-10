import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import { BsCalendarCheck } from "react-icons/bs";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const SMSReport = () => {
  const [action1, setAction1] = useState("Select");
  const [value, onChange] = useState(new Date());
  const [openCal, setCal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div>
            <div className="text-center" style={{ fontSize: "23px" }}>
              SMS Report
            </div>
            <div className="d-flex mt-5 justify-content-between">
              <div className="d-flex" style={{ gap: "30px" }}>
                <div
                  className={
                    "Custom Date Range" ? "d-flex align-items-center" : "hide"
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

                <div>
                  <button className="btn btn-primary">Go</button>
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
                      onClick={() => setAction1("Select")}
                    >
                      Select
                    </label>
                    <label
                      className="dropdown-item"
                      onClick={() => setAction1("cardio")}
                    >
                      cardio
                    </label>
                    <label
                      className="dropdown-item"
                      onClick={() => setAction1("other")}
                    >
                      other
                    </label>
                  </div>
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
                <td className="td-3">S.No</td>
                <td className="td-2"> Name</td>
                <td className="td-3">Image</td>
                <td className="td-2">Video</td>
                <td className="td-2">Description</td>
                <td className="td-3">Created By</td>
                <td className="td-2">Edit</td>
                <td className="td-3">Action</td>
              </tr>

              <tr className="tr-client text-center">
                <td className="td-1">
                  <div>
                    <MdOutlineCheckBoxOutlineBlank />
                  </div>
                </td>
                <td className="td-2">1</td>
                <td className="td-3">Shoulders</td>
                <td className="td-2">
                  <img src="#" alt="image" />
                </td>
                <td className="td-3">
                  <label className="label">view</label>
                </td>
                <td className="td-3"></td>
                <td className="td-2">Admin</td>
                <td className="td-3">-</td>
                <td className="td-2">-</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SMSReport;
