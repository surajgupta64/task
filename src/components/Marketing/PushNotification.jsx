import React from "react";
import Navbar from "../Layout/Navbar";
import "react-calendar/dist/Calendar.css";
const PushNotification = () => {
  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div className="row">
            <div className="col-lg-4 ">
              <div className="d-flex right mr-3" style={{ gap: "30px" }}>
                Push Notification Marketing
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="d-flex right" style={{ gap: "30px" }}>
                <div className="mr-3">Title:</div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="d-flex mt-3" style={{ gap: "30px" }}>
                <div className="btn-group">
                  <input
                    type="text"
                    className="btn btn-own"
                    placeholder="Enter Title"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex right" style={{ gap: "30px" }}>
                <div className="mr-3">Message:</div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="d-flex mt-3" style={{ gap: "30px" }}>
                <div className="btn-group">
                  <input
                    type="text"
                    className="btn btn-own"
                    placeholder="Enter Message"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex right" style={{ gap: "30px" }}>
                <div className="mr-3">Details:</div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="d-flex mt-3" style={{ gap: "30px" }}>
                <div className="btn-group">
                  <textarea
                    style={{ minHeight: "100px", minWidth: "700px" }}
                    placeholder="Type Details"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex right" style={{ gap: "30px" }}>
                <div className="mr-3">Notify To:</div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="d-flex mt-3" style={{ gap: "30px" }}>
                <div className="btn-group">
                  <label>
                    <input type="checkbox" value="All Members" checked="true" />
                    <span>Members </span>
                  </label>
                  <label style={{ marginLeft: "15px" }}>
                    <input type="checkbox" value="All Members" />
                    <span>Non Members and members not logged in </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex right" style={{ gap: "30px" }}>
                <div className="mr-3">Platform:</div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="d-flex mt-3" style={{ gap: "30px" }}>
                <div className="btn-group">
                  <label>
                    <input type="checkbox" value="All Members" checked="true" />
                    <span>Android </span>
                  </label>
                  <label style={{ marginLeft: "15px" }}>
                    <input type="checkbox" value="All Members" />
                    <span>IOS </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex right" style={{ gap: "30px" }}></div>
            </div>
            <div className="col-lg-8">
              <div className="d-flex mt-3" style={{ gap: "30px" }}>
                <div className="btn-group">
                  <button className="btn btn-primary">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PushNotification;
