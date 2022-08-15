import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import { FiSearch } from "react-icons/fi";
import { HiUserAdd } from "react-icons/hi";
import { FaSwatchbook } from "react-icons/fa";
import {
  BsCalendarEvent,
  BsFilePostFill,
  BsCalendarCheck,
} from "react-icons/bs";
import { ImTelegram } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { TbBrandBooking } from "react-icons/tb";
import { RiSpeedLine } from "react-icons/ri";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
  MdOutlineAddBox,
} from "react-icons/md";
import {
  AiOutlineMinusSquare,
  AiOutlineDelete,
  AiFillEdit,
} from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Refund = () => {
  const [toggle, setToggle] = useState(true);
  const [action, setAction] = useState("2021");

  const [action1, setAction1] = useState("Today");
  const [value, onChange] = useState(new Date());
  const [openCal, setCal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div>
            <div className="text-center" style={{ fontSize: "23px" }}>
              Refund Report
            </div>
            <div className="d-flex mt-5 justify-content-between">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "30px" }}
              >
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
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => setAction1("Today")}
                    >
                      Today
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => setAction1("cardio")}
                    >
                      cardio
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      onClick={() => setAction1("other")}
                    >
                      other
                    </a>
                  </div>
                </div>

                <div>
                  <button className="btn btn-primary">Go</button>
                </div>
              </div>

              <div className="d-flex" style={{ gap: "20px" }}>
                <button style={{ width: "100%" }} className="btn btn_enquiry">
                  Export Excel
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
                <td className="td-2">Lead source</td>
                <td className="td-3">Total Footfall</td>
                <td className="td-2">Active Enquiries</td>
                <td className="td-2">Lost Enquiries</td>
                <td className="td-3">Converted</td>
                <td className="td-2">Conversion %</td>
                <td className="td-3">Converted Opportunity Value</td>
                <td className="td-2">Spot conversion</td>
                <td className="td-3">Value</td>
                <td className="td-2">Total conversion %</td>
                <td className="td-3">Total Value</td>
              </tr>

              <tr className="tr-client text-center">
                <td className="td-1">
                  <div>
                    <MdOutlineCheckBoxOutlineBlank />
                  </div>
                </td>
                <td className="td-2">1</td>
                <td className="td-3">Phone</td>
                <td className="td-2">0</td>
                <td className="td-3">0</td>
                <td className="td-3">0</td>
                <td className="td-2">0</td>
                <td className="td-3">0</td>
                <td className="td-2">0</td>
                <td className="td-3">0</td>
                <td className="td-2">0</td>
                <td className="td-3">0</td>
                <td className="td-2">0</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Refund;
