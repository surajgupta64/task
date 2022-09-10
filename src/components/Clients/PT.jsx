import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import { BsCalendarCheck } from "react-icons/bs";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MdOutlineCheckBoxOutlineBlank, MdOutlineAddBox } from "react-icons/md";
import {
  AiOutlineMinusSquare,
  AiOutlineDelete,
  AiFillEdit,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const PT = () => {
  const [action, setAction] = useState("Custom Date Range");
  const [value, onChange] = useState(new Date());
  const [openCal, setCal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div>
            <div className="text-center" style={{ fontSize: "23px" }}>
              PT Expiry
            </div>
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
                    <label onClick={() => setAction("Custom Date Range")}>
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
                <td className="td-1">
                  <div>
                    <MdOutlineCheckBoxOutlineBlank />
                  </div>
                </td>
                <td className="td-2">S.No</td>
                <td className="td-3">ID</td>
                <td className="td-2">Date</td>
                <td className="td-3">Name</td>
                <td className="td-2">Service</td>
                <td className="td-3">Source</td>
                <td className="td-2">Stage</td>
                <td className="td-3">Status</td>
                <td className="td-2">Tag</td>
                <td className="td-3">log</td>
                <td className="td-2">Invoice</td>
                <td className="td-3">Trail</td>
                <td className="td-3">Appointment</td>
                <td className="td-2">Staff</td>
                <td className="td-3">Action</td>
              </tr>

              <tr className="tr-client text-center">
                <td className="td-1">
                  <div>
                    <MdOutlineCheckBoxOutlineBlank />
                  </div>
                </td>
                <td className="td-2">1</td>
                <td className="td-3">2461833</td>
                <td className="td-2">05-08-2022</td>
                <td className="td-3">Sheetal Jain</td>
                <td className="td-2">TTC</td>
                <td className="td-3">Facebook</td>
                <td className="td-2">Enquiry</td>
                <td className="td-3">Enquiry</td>
                <td className="td-2">
                  <AiOutlineMinusSquare />
                </td>
                <td className="td-3">
                  <MdOutlineAddBox />
                </td>
                <td className="td-2">
                  <button className="btn btn-invoice">Invoice</button>
                </td>
                <td className="td-3">
                  <MdOutlineAddBox />
                </td>
                <td className="td-2">
                  <MdOutlineAddBox />
                </td>
                <td className="td-3">Sejal Ganatra</td>
                <td className="td-2">
                  <div className="d-flex justify-content-between">
                    <div className="bg-icon d-flex justify-content-center align-items-center">
                      <AiFillEdit />
                    </div>
                    <div className="bg-icon d-flex justify-content-center align-items-center">
                      <AiOutlineDelete />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <div className="bg-icon d-flex justify-content-center align-items-center">
                      <FaWhatsapp />
                    </div>
                    <div className="bg-icon d-flex justify-content-center align-items-center">
                      <FiMail />
                    </div>
                  </div>
                </td>
              </tr>
            </table>
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

export default PT;
