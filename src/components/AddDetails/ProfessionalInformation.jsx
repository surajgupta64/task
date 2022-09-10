import React from "react";
import "react-calendar/dist/Calendar.css";

const ProfessionalInformation = () => {
  return (
    <>
      <div className="dbox-10 " style={{ marginBottom: "20px" }}>
        <div className="row">
          <div className="col-lg-6">
            <div
              className="title"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginLeft: "63px",
              }}
            >
              Professional Information Primary Contact
            </div>
            <br />
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Occupation:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Occupation"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Company name:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="Company name"
                      className="btn btn-own"
                      placeholder="Enter Company name"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Official Email:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="email"
                      className="btn btn-own"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Contact Number:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="number"
                      className="btn btn-own"
                      placeholder="Enter Number"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Whatsapp Number:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="number"
                      className="btn btn-own"
                      placeholder="Enter Number"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Primary Address:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Address"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">City:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter City"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">State:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter State"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">PIN:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="number"
                      className="btn btn-own"
                      placeholder="Enter PIN"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Country:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Country"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Primary Wing:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Primary Wing"
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div
              className="title"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginLeft: "63px",
              }}
            >
              Professional Information Secondary Contact
            </div>
            <br />
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Occupation:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Occupation"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Company name:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="Company name"
                      className="btn btn-own"
                      placeholder="Enter Company name"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Official Email:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="email"
                      className="btn btn-own"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Secondary Address:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Address"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">City:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter City"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">State:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter State"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">PIN:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="number"
                      className="btn btn-own"
                      placeholder="Enter PIN"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Country:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Country"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Secondary Wing:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Primary Wing"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="title"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginLeft: "63px",
              }}
            >
              HR Details
            </div>
            <br />
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Company address:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Address"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">HR Number:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="number"
                      className="btn btn-own"
                      placeholder="Enter HR Number"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">HR Email:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="number"
                      className="btn btn-own"
                      placeholder="Enter HR Email"
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div
              className="title"
              style={{
                fontWeight: "bold",
                marginLeft: "63px",
                fontSize: "18px",
              }}
            >
              Primary School/College/Course Details
            </div>
            <br />
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Parent / Guardian Full Name:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Full Name"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Contact Number:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="number"
                      className="btn btn-own"
                      placeholder="Enter Number"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Home Contact Number:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Number"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Email:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="email"
                      className="btn btn-own"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Relationship:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Relationship"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Address:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Address"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">City:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter City"
                    />
                  </div>
                </div>
              </div>
            </div>

            <br />
            <div
              className="title"
              style={{
                fontWeight: "bold",
                marginLeft: "63px",
                fontSize: "18px",
              }}
            >
              Secondary School/College/Course Details
            </div>
            <br />
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Parent / Guardian Full Name:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Full Name"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Contact Number:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="number"
                      className="btn btn-own"
                      placeholder="Enter Number"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Home Contact Number:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Number"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Email:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="email"
                      className="btn btn-own"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Relationship:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Relationship"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Address:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Address"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">City:</div>
                </div>
              </div>
              <div className="col-lg-8 mt-2">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter City"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3"></div>

          <div className="col-lg-8">
            <button
              className="btn btn-primary mt-3 mr-5"
              style={{ width: "200px" }}
            >
              All Member & Bill
            </button>
            <button
              className="btn btn-primary mt-3 mr-5"
              style={{ width: "150px" }}
            >
              Sell Product
            </button>
            <button className="btn btn-primary mt-3" style={{ width: "150px" }}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessionalInformation;
