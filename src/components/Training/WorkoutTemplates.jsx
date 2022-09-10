import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import "react-calendar/dist/Calendar.css";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const WorkoutTemplates = () => {
  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div>
            <div className="text-center" style={{ fontSize: "23px" }}>
              Workout Templates
            </div>
            <div className="d-flex mt-5 justify-content-between">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "30px" }}
              >
                <div className="mr-3">Search</div>
                <div className="btn-group">
                  <input
                    type="text"
                    className="btn btn-own"
                    placeholder="Template name"
                  />
                </div>

                <div>
                  <button className="btn btn-primary">Go</button>
                </div>
              </div>
              <div className="d-flex" style={{ gap: "20px" }}>
                <button style={{ width: "100%" }} className="btn btn_enquiry">
                  Create New Templates
                </button>
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
                <td className="td-2">Template Name</td>
                <td className="td-3">No of Days</td>
                <td className="td-2">Created Date</td>
                <td className="td-3">Created From</td>
                <td className="td-2">Created By</td>
                <td className="td-3">Edit</td>
                <td className="td-2">Clone</td>
                <td className="td-3">Delete</td>
              </tr>

              <tr className="tr-client text-center">
                <td className="td-1">
                  <div>
                    <MdOutlineCheckBoxOutlineBlank />
                  </div>
                </td>
                <td className="td-2">1</td>
                <td className="td-3">CARDIO CLONE CLONE</td>
                <td className="td-2">0</td>
                <td className="td-3">09/08/2022</td>
                <td className="td-2">Branch</td>
                <td className="td-3">Prabha Yadav</td>
                <td className="td-2">
                  <a href="#">Update</a>
                </td>
                <td className="td-3">
                  <a href="#">Add</a>
                </td>
                <td className="td-2">
                  <a href="#">Delete</a>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkoutTemplates;
