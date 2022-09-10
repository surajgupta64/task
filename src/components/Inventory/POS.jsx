import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import { MdOutlineAddBox, MdPhoneMissed } from "react-icons/md";
import {
  AiOutlineInfoCircle,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import Table from "../Table";
import "react-calendar/dist/Calendar.css";
import Tabs from "../Tabs";
const POS = () => {
  const column = [
    /* 
        value: keyword for normal value passing
        btn: keyword for button
        btn1 to btn4: keyword for component passing
        lebel: keyword for anchor tag
        Note: please don't pass empty values or perameters
        */
    { heading: "S.No", value: "id" },
    { heading: "Assign Date & Time", value: "date_time" },
    { heading: "Member Name", label: "member_name" },
    { heading: "Mobile", value: "mobile" },
    { heading: "Service Name", value: "service_name" },
    { heading: "Service Variation Name", value: "variation_name" },
    { heading: "Expiry Date", value: "expiry_date" },
    {
      heading: "Info",
      btn1: (
        <div className="bg-icon d-flex justify-content-center align-items-center">
          <AiOutlineInfoCircle />
        </div>
      ),
    },
    { heading: "Renew", btn: "Renew" },
    {
      heading: "Call Status",
      btn1: (
        <div className="bg-icon d-flex justify-content-center align-items-center">
          <MdOutlineAddBox />
        </div>
      ),
      btn2: (
        <div className="bg-icon d-flex justify-content-center align-items-center">
          <MdPhoneMissed />
        </div>
      ),
    },
    { heading: "Sales Rep", value: "sales_rep" },
    { heading: "PT Trainer", value: "pt_trainer" },
    { heading: "Trainer", value: "trainer" },
    { heading: "Staff Name", value: "staff_name" },
  ];

  const Users = [
    {
      id: 1,
      date_time: "25-08-2022 03:00 PM",
      member_name: "Nayana Nagrecha",
      mobile: "9136123476",
      service_name: "Yoga",
      variation_name: "3 Months",
      expiry_date: "31-08-2022",
      sales_rep: "Sejal Ganatra",
      pt_trainer: "-",
      trainer: "Prabha Yadav",
      staff_name: "Sejal Ganatra",
    },
    {
      id: 2,
      date_time: "25-08-2022 03:00 PM",
      member_name: "Nayana Nagrecha",
      mobile: "9136123476",
      service_name: "Yoga",
      variation_name: "3 Months",
      expiry_date: "31-08-2022",
      sales_rep: "Sejal Ganatra",
      pt_trainer: "-",
      trainer: "Prabha Yadav",
      staff_name: "Sejal Ganatra",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div className="text-center mb-2 mt-3" style={{ fontSize: "23px" }}>
            Turf
          </div>

          <div>
            <Tabs />
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
        </div>
      </div>
    </>
  );
};

export default POS;
