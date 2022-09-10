import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import "react-calendar/dist/Calendar.css";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const ViewExercises = () => {
  const [action1, setAction1] = useState("Select Category");

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div>
            <div className="text-center" style={{ fontSize: "23px" }}>
              View Exercises
            </div>
            <div className="d-flex mt-5 justify-content-between">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "30px" }}
              >
                <div className="mr-3">Staff</div>
                <div className="btn-group">
                  <input
                    type="text"
                    className="btn btn-own"
                    placeholder="Search Staff"
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
                    {action1}
                  </button>
                  <div class="dropdown-menu">
                    <label
                      className="dropdown-item"
                      onClick={() => setAction1("Select Category")}
                    >
                      Selrct Category
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

                <div>
                  <button className="btn btn-primary">Go</button>
                </div>
              </div>
              <div className="d-flex" style={{ gap: "20px" }}>
                <button className="btn btn_enquiry">Add Exercises</button>
                <button className="btn btn_enquiry">Workout Templates</button>
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
                <td className="td-2">Category Name</td>
                <td className="td-3">Exercise Image</td>
                <td className="td-2">Video</td>
                <td className="td-3">Exercise Name</td>
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
                <td className="td-2">Arnold Dumbbell Press</td>
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

export default ViewExercises;
