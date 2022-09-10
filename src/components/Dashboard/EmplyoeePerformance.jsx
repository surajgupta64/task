import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import {
  SalesClosure,
  ClientClosure,
  LeadTarget,
  RenewalsTarget,
  RefranceLeadTarget,
  DailyCalls,
  MediaTarget,
} from "../Table2";
import "react-calendar/dist/Calendar.css";
const EmployeePerformance = () => {
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
      TargetClient: "75",
      NewClient: "20",
      RenewalsClient: "25",
      Closure: "45",
      LeadAssin: "250",
      SpotConversions: "10",
      TotalLeads: "40",
      TotalAmount: "10000",
      TargetPer: "85",
      NoRenewals: "90",
      Conversion: "50",
      NoRefranceTaget: "50",
      LeadGenerated: "50",
      ConvertMember: "30",
      CallTarget: "2500",
      TotalCompleted: "2450",
      FollowupCall: "2400",
      ServicesCall: "15",
      MemberCall: "16",
      RenewalsCall: "20",
      GoogleReviews: "0",
      FB: "0",
      Instagram: "0",
      FeedbackVideo: "0",
    },
    {
      Srno: "2",
      Counseller: "Sejal",
      Target: "10000",
      NewSales: "5000",
      Renewals: "2000",
      Balance: "3000",
      Collected: "10000",
      Achived: "100",
      TargetClient: "75",
      NewClient: "20",
      RenewalsClient: "25",
      Closure: "45",
      LeadAssin: "250",
      SpotConversions: "10",
      TotalLeads: "40",
      TotalAmount: "10000",
      TargetPer: "85",
      NoRenewals: "90",
      Conversion: "50",
      NoRefranceTaget: "50",
      LeadGenerated: "50",
      ConvertMember: "30",
      CallTarget: "2500",
      TotalCompleted: "2450",
      FollowupCall: "2400",
      ServicesCall: "15",
      MemberCall: "16",
      RenewalsCall: "20",
      GoogleReviews: "0",
      FB: "0",
      Instagram: "0",
      FeedbackVideo: "0",
    },
    {
      Srno: "3",
      Counseller: "Sejal",
      Target: "10000",
      NewSales: "5000",
      Renewals: "2000",
      Balance: "3000",
      Collected: "10000",
      Achived: "100",
      TargetClient: "75",
      NewClient: "20",
      RenewalsClient: "25",
      Closure: "45",
      LeadAssin: "250",
      SpotConversions: "10",
      TotalLeads: "40",
      TotalAmount: "10000",
      TargetPer: "85",
      NoRenewals: "90",
      Conversion: "50",
      NoRefranceTaget: "50",
      LeadGenerated: "50",
      ConvertMember: "30",
      CallTarget: "2500",
      TotalCompleted: "2450",
      FollowupCall: "2400",
      ServicesCall: "15",
      MemberCall: "16",
      RenewalsCall: "20",
      GoogleReviews: "0",
      FB: "0",
      Instagram: "0",
      FeedbackVideo: "0",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div className="text-center mb-2 mt-3" style={{ fontSize: "23px" }}>
            EMPLOYEE PERFORMANCE
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
            <SalesClosure data={data} title={"Sales Closure "} />

            <ClientClosure data={data} title={"Client Closure "} />

            <LeadTarget data={data} title={"Lead Target "} />

            <RenewalsTarget data={data} title={"Renewals Target"} />

            <RefranceLeadTarget data={data} title={"Refrance Lead Target"} />

            <DailyCalls data={data} title={"Daily Calls "} />

            <MediaTarget data={data} title={"Media Target "} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeePerformance;
