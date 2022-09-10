import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import "react-calendar/dist/Calendar.css";
import { RevenueTarget } from "../Table2";
const CorporatePerformance = () => {
  const [month, setMonth] = useState("Aug");
  const [year, setYear] = useState("2022");

  const data = [
    {
      Srno: "1",
      Counseller: "Sejal",
      Target: "10000",
      NewSales: "5000",
      Renewals: "2000",
      Balance: "3000",
      Collected: "10000",
      Achived: "100",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div className="text-center mb-2 mt-3" style={{ fontSize: "23px" }}>
            CORPORATE PERFORMANCE
          </div>

          <div className="d-flex justify-content-between mt-5">
            <div className="d-flex" style={{ gap: "30px" }}>
              <div
                className="d-flex align-items-center"
                style={{ gap: "20px" }}
              >
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
                    <label
                      className="dropdown-item"
                      onClick={() => setMonth("Jan")}
                    >
                      Jan
                    </label>
                    <label
                      className="dropdown-item"
                      onClick={() => setMonth("Feb")}
                    >
                      Feb
                    </label>
                    <label
                      className="dropdown-item"
                      onClick={() => setMonth("Mar")}
                    >
                      Mar
                    </label>
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
                    <label
                      className="dropdown-item"
                      onClick={() => setYear("2022")}
                    >
                      2022
                    </label>
                    <label
                      className="dropdown-item"
                      onClick={() => setYear("2021")}
                    >
                      2021
                    </label>
                    <label
                      className="dropdown-item"
                      onClick={() => setYear("202")}
                    >
                      2020
                    </label>
                  </div>
                </div>
                <div class="btn-group">
                  <input
                    type="text"
                    class="btn btn-own"
                    placeholder="Enter Staff Name"
                  />
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

          <div>
            <RevenueTarget data={data} title={"Revenue Target"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CorporatePerformance;
