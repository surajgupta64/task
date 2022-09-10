import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import { BsCalendarCheck } from "react-icons/bs";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const Loyalty = () => {
  const [value, onChange] = useState(new Date());
  const [openCal, setCal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div>
            <div className="text-center" style={{ fontSize: "23px" }}>
              Loyalty Point Usage Report
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
                  <img src="#" alt="not found" />
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

export default Loyalty;
