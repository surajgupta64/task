import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import {
  AiOutlineDelete,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiFillEdit,
} from "react-icons/ai";
import Table from "../Table";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const MemberShipRenewed = () => {
  const [month, setMonth] = useState("Aug");
  const [year, setYear] = useState("2022");

  const column = [
    /* 
    value: keyword for normal value passing
    btn: keyword for button
    btn1 to btn4: keyword for component passing
    lebel: keyword for anchor tag
    Note: please don't pass empty values or perameters
    */
    {
      heading: (
        <div>
          <MdOutlineCheckBoxOutlineBlank />
        </div>
      ),
      btn1: (
        <div>
          <MdOutlineCheckBoxOutlineBlank />
        </div>
      ),
    },
    { heading: "S.No", value: "Srno" },
    { heading: "Name", value: "Name" },
    { heading: "Contact", value: "Contact" },
    { heading: "E-mail", value: "Email" },
    { heading: "Review", value: "Review" },
    { heading: "Rating", value: "Rating" },
    {
      heading: "Action",
      btn1: (
        <div>
          <div className="d-flex justify-content-center">
            <div className="bg-icon d-flex justify-content-center mr-2 align-items-center">
              <AiFillEdit />
            </div>
            <div className="bg-icon d-flex justify-content-center mr-2 align-items-center">
              <AiOutlineDelete />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-2 ">
            <div className="bg-icon d-flex justify-content-center mr-2 align-items-center">
              <FaWhatsapp />
            </div>
            <div className="bg-icon d-flex justify-content-center mr-2 align-items-center">
              <FiMail />
            </div>
          </div>
        </div>
      ),
    },
  ];

  const Users = [
    {
      Srno: "1",
      Name: "Sajel",
      Contact: "7710957578",
      Email: "surajgupta@gmail.com",
      Review: "Very nice",
      Rating: "7/10",
    },
    {
      Srno: "2",
      Name: "Sajel",
      Contact: "7710957578",
      Email: "surajgupta@gmail.com",
      Review: "Very nice",
      Rating: "7/10",
    },
  ];

  return (
    <>
      <div>
        <div className="d-flex justify-content-between mt-5">
          <div className="d-flex" style={{ gap: "30px" }}>
            <div className="d-flex align-items-center" style={{ gap: "20px" }}>
              <div>Month</div>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-own dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {month}
                </button>
                <div class="dropdown-menu">
                  <a
                    class="dropdown-item"
                    href="#"
                    onClick={() => setMonth("Jan")}
                  >
                    Jan
                  </a>
                  <a
                    class="dropdown-item"
                    href="#"
                    onClick={() => setMonth("Feb")}
                  >
                    Feb
                  </a>
                  <a
                    class="dropdown-item"
                    href="#"
                    onClick={() => setMonth("Mar")}
                  >
                    Mar
                  </a>
                </div>
              </div>
              <div>Year</div>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-own dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {year}
                </button>
                <div class="dropdown-menu">
                  <a
                    class="dropdown-item"
                    href="#"
                    onClick={() => setYear("2022")}
                  >
                    2022
                  </a>
                  <a
                    class="dropdown-item"
                    href="#"
                    onClick={() => setYear("2021")}
                  >
                    2021
                  </a>
                  <a
                    class="dropdown-item"
                    href="#"
                    onClick={() => setYear("202")}
                  >
                    2020
                  </a>
                </div>
              </div>
              <div>
                <button className="btn btn-primary">Go</button>
              </div>
              <div>
                <button className="btn btn_enquiry">Export Excel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Table data={Users} column={column} />
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
    </>
  );
};

export default MemberShipRenewed;
