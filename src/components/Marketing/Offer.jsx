import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import { BsCalendarCheck } from "react-icons/bs";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import {
  AiOutlineDelete,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import Table from "../Table";

const Offer = () => {
  const [action, setAction] = useState("All Client");
  const [value, onChange] = useState(new Date());
  const [openCal, setCal] = useState(false);

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
    { heading: "Date", value: "Date" },
    { heading: "Service", value: "Service" },
    { heading: "Deal Name", value: "DealName" },
    { heading: "Start Date", value: "StartDate" },
    { heading: "End Date", value: "EndDate" },
    { heading: "Services Duration", value: "ServicesDuration" },
    { heading: "Services Fee", value: "ServicesFee" },
    { heading: "Discount Rate", value: "DiscountRate" },
    { heading: "Discount Value", value: "DiscountValue" },
    { heading: "Status", btn: "Active" },
    {
      heading: "Delete",
      btn1: (
        <div className="bg-icon d-flex justify-content-center align-items-center">
          <AiOutlineDelete />
        </div>
      ),
    },
  ];

  const Users = [
    {
      Srno: "1",
      Date: "25-08-2022 03:00 PM",
      DealName: "Ganesh churthi Offerrs",
      Service: "Yoga",
      StartDate: "22-08-2022",
      EndDate: "31-08-2022",
      ServicesDuration: "1 Month",
      ServicesFee: "5000",
      DiscountRate: "20%",
      DiscountValue: "1000",
    },
    {
      Srno: "2",
      Date: "25-08-2022 03:00 PM",
      DealName: "Ganesh churthi Offerrs",
      Service: "Yoga",
      StartDate: "22-08-2022",
      EndDate: "31-08-2022",
      ServicesDuration: "1 Month",
      ServicesFee: "5000",
      DiscountRate: "20%",
      DiscountValue: "1000",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div>
            <div className="text-center" style={{ fontSize: "23px" }}>
              OFFER
            </div>
            <div className="d-flex justify-content-between mt-3">
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

              <div
                className="d-flex align-items-center"
                style={{ gap: "20px" }}
              >
                <button className="btn btn_enquiry">Add Deal</button>
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
        </div>
      </div>
    </>
  );
};

export default Offer;
