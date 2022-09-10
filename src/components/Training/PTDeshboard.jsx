import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Navbar from "../Layout/Navbar";
/* const Dtask = [
  {
    title: "Service expiry",
    value: "5",
    css: "sum-lgrey",
    color: "green",
  },
  {
    title: "PT expiry",
    value: "0",
    css: "sum-dgrey",
    color: "red",
    font: "white",
  },
  {
    title: "Upgrades",
    value: "0",
    css: "sum-lgrey",
    color: "green",
  },
  {
    title: "Client birthdays",
    value: "0",
    css: "sum-dgrey",
    color: "red",
    font: "white",
  },
  {
    title: "Client Anniversaries",
    value: "0",
    css: "sum-lgrey",
    color: "green",
  },
  {
    title: "Staff birthdays",
    value: "0",
    css: "sum-dgrey",
    color: "red",
    font: "white",
  },
  {
    title: "Staff Anniversaries",
    value: "0",
    css: "sum-lgrey",
    color: "green",
  },
  {
    title: "Appointments",
    value: "0",
    css: "sum-dgrey",
    color: "red",
    font: "white",
  },
  {
    title: "Follow-ups",
    value: "0",
    css: "sum-lgrey",
    color: "green",
  },
  {
    title: "Classes",
    value: "0",
    css: "sum-dgrey",
    color: "red",
    font: "white",
  },
]; */
const PTDashboard = () => {
  const [action, setAction] = useState("Birthday");
  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="row">
          <div className="col-lg-8">
            <div className="dbox-1">
              <div className="text-center" style={{ fontSize: "23px" }}>
                MY PT DESHBOARD
              </div>
              <div className="d-flex justify-content-between mt-10">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div
                    className={
                      action === "Birthday"
                        ? "d-flex align-items-center"
                        : "hide"
                    }
                    style={{ gap: "30px" }}
                  >
                    <div style={{ fontSize: "15px" }}>From</div>
                    <div className="btn-group">
                      <input type="date" className="btn btn-own" />
                    </div>
                  </div>

                  <div>
                    <button className="btn btn-primary">Go</button>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4">
                  <div className="dbox-8">
                    <div>SALES</div>
                    <div>0</div>
                    <div>View More</div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="dbox-4">
                    <div>PAYMENTS COLLECTED</div>
                    <div>0</div>
                    <div>View More</div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="dbox-9">
                    <div>PAYMENTS PENDING</div>
                    <div>0</div>
                    <div>View More</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dbox-1">
              <div className="row">
                <div className="col-lg-6">
                  <div className="dbox-11">
                    <div>PERSONAL TRAINING CLIENTS</div>
                    <div>0</div>
                    <div>View More</div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="dbox-11">
                    <div>GENERAL TRAINING CLIENTS</div>
                    <div>105</div>
                    <div>View More</div>
                  </div>
                </div>
              </div>
            </div>

            <table
              className="table_client mg-10"
              border="1"
              cellSpacing="0"
              width="96%"
            >
              <tr className="tr-client text-center">
                <td className="td-2">MEMBERS</td>
                <td className="td-2">105</td>
              </tr>

              <tr className="tr-client text-center">
                <td className="td-2">ACTIVE: 68</td>
                <td className="td-2">INACTIVE:37</td>
              </tr>
              <tr className="tr-client text-center">
                <td className="td-2">VIEW</td>
                <td className="td-2">VIEW</td>
              </tr>
            </table>
          </div>
          <div className="col-lg-4">
            <div className="dsum-2">
              <div className="row">
                <div className="col-lg-12 ">
                  <div className="dbox-summary mg-5 text-center">
                    <button className="btn btn_enquiry1 ">
                      UPCOMING TRIAL APPOINTMENTS
                    </button>
                  </div>
                </div>
                <div className="col-lg-12 ">
                  <div className="dbox-summary mg-5 text-center">
                    <button className="btn btn_enquiry1 ">
                      UPCOMING TRIAL CLASSES
                    </button>
                  </div>
                </div>
                <div className="col-lg-12 ">
                  <div className="dbox-summary mg-5 text-center">
                    <button className="btn btn_enquiry1 ">
                      UPCOMING SERVICE APPOINTMENTS
                    </button>
                  </div>
                </div>
                <div className="col-lg-12 ">
                  <div className="dbox-summary mg-5 text-center">
                    <button className="btn btn_enquiry1 ">
                      SESSIONS CONDUCTED
                    </button>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="dbox-summary-1 mg-5">
                    <h4
                      className="text-center"
                      onClick={() => setAction("suraj")}
                    >
                      Today's Appointment
                    </h4>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "80%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PTDashboard;
