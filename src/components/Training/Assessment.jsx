import React from "react";
import Navbar from "../Layout/Navbar";
import "react-calendar/dist/Calendar.css";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

const Assessment = () => {
  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div>
            <div className="text-center" style={{ fontSize: "23px" }}>
              Assessment Templates
            </div>
            <div className="d-flex mt-5 justify-content-between">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "30px" }}
              ></div>
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
                <td className="td-3">Update</td>
                <td className="td-2">Option</td>
              </tr>

              <tr className="tr-client text-center">
                <td className="td-1">
                  <div>
                    <MdOutlineCheckBoxOutlineBlank />
                  </div>
                </td>
                <td className="td-2">1</td>
                <td className="td-3">yoga ttc</td>
                <td className="td-2">
                  <label className="label">Update</label>
                </td>
                <td className="td-3">
                  <div className="bg-icon d-flex justify-content-center align-items-center">
                    <AiFillEdit />
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assessment;
