import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import profile from "../../Images/profile.png";
import ToggleButton from "../ToggleButton";

const FitnessProfile = () => {
  const [action1, setAction1] = useState("India (+91)");
  const [blood, setBlood] = useState("Select");
  const [action, setAction] = useState("Select");
  const [options, setOptions] = useState("Male");
  const [options1, setOptions1] = useState("Select");

  const [sms, setSms] = useState(true);
  const [mail, setMail] = useState(true);
  const [push, setPush] = useState(true);

  const onRadioChange1 = (e) => {
    setOptions1(e.target.value);
  };
  const onRadioChange = (e) => {
    setOptions(e.target.value);
  };

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
              Personal Details
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <img
                    height="100px"
                    style={{ borderRadius: "5px" }}
                    src={profile}
                    alt="Profile"
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex mt-4" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <button className="btn btn_enquiry">Upload Image</button>
                  </div>
                </div>
                <div className="d-flex mt-2" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <button className="btn btn_enquiry">Capture Image</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Full name:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Name"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3">Country Code:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group mt-2">
                    <button
                      type="button"
                      className="btn btn-own dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {action1}
                    </button>
                    <div className="dropdown-menu">
                      <label onClick={() => setAction1("Pakistan (+92)")}>
                        Pakistan (+92)
                      </label>
                      <label onClick={() => setAction1("Nepal (+977)")}>
                        Nepal (+977)
                      </label>
                      <label onClick={() => setAction1("Bangladesh (+880)")}>
                        Bangladesh (+880)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Contact Number:</div>
                </div>
              </div>
              <div className="col-lg-8">
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
              <div className="col-lg-8">
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
                  <div className="mr-3 ">Email:</div>
                </div>
              </div>
              <div className="col-lg-8">
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
                  <div className="mr-3 ">Gender:</div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="d-flex mt-2" style={{ gap: "30px" }}>
                  <label style={{ color: "#fff" }}>
                    <input
                      type="radio"
                      value="Male"
                      checked={options === "Male"}
                      onChange={onRadioChange}
                    />{" "}
                    Male
                  </label>

                  <label style={{ marginLeft: "15px", color: "#fff" }}>
                    <input
                      type="radio"
                      value="Female"
                      checked={options === "Female"}
                      onChange={onRadioChange}
                    />{" "}
                    Female
                  </label>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Date of Birth:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="Date"
                      className="btn btn-own"
                      placeholder="Select Date of birth"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Anniversary:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="Date"
                      className="btn btn-own"
                      placeholder="Select Date of birth"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Address:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <textarea
                      style={{
                        minHeight: "80px",
                        minWidth: "200px",
                        borderRadius: "5px",
                        padding: "10px",
                      }}
                      placeholder="Enter Address"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Area:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Locality"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">City:</div>
                </div>
              </div>
              <div className="col-lg-8">
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
                  <div className="mr-3 ">Blood Group:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group mt-2">
                    <button
                      type="button"
                      className="btn btn-own dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {blood}
                    </button>
                    <div className="dropdown-menu">
                      <label onClick={() => setBlood("A+")}>A+</label>
                      <label onClick={() => setBlood("A-")}>A-</label>
                      <label onClick={() => setBlood("B+")}>B+</label>
                      <label onClick={() => setBlood("B-")}>B-</label>
                      <label onClick={() => setBlood("O+")}>O+</label>
                      <label onClick={() => setBlood("O-")}>O-</label>
                      <label onClick={() => setBlood("AB+")}>AB+</label>
                      <label onClick={() => setBlood("AB-")}>AB-</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Facebook ID:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Facebook ID"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Pincode:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Pincode"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">School Name:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter School Name"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">School Timings:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter School Timings"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Mother's name:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Mother's name"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Mother's Profession:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Profession"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Father's name:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Father's name"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Father's Profession:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Father's Profession"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Vaccinated:</div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="d-flex mt-2" style={{ gap: "30px" }}>
                  <label style={{ color: "#fff" }}>
                    <input
                      type="radio"
                      value="Yes"
                      checked={options1 === "Yes"}
                      onChange={onRadioChange1}
                    />{" "}
                    Yes
                  </label>

                  <label style={{ marginLeft: "15px", color: "#fff" }}>
                    <input
                      type="radio"
                      value="No"
                      checked={options1 === "No"}
                      onChange={onRadioChange1}
                    />{" "}
                    No
                  </label>
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
              Level
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Level:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter level"
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
              Communication Preference Settings
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3">SMS:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="btn-group mt-2">
                  <ToggleButton toggled={sms} onClick={() => setSms(!sms)} />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3">Mail:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="btn-group mt-2">
                  <ToggleButton toggled={mail} onClick={() => setMail(!mail)} />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3">Push Notification:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="btn-group mt-2">
                  <ToggleButton toggled={push} onClick={() => setPush(!push)} />
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
              Emergency contact
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Name:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Name"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3">Country Code:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group mt-2">
                    <button
                      type="button"
                      className="btn btn-own dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {action1}
                    </button>
                    <div className="dropdown-menu">
                      <label onClick={() => setAction1("Pakistan (+92)")}>
                        Pakistan (+92)
                      </label>
                      <label onClick={() => setAction1("Nepal (+977)")}>
                        Nepal (+977)
                      </label>
                      <label onClick={() => setAction1("Bangladesh (+880)")}>
                        Bangladesh (+880)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Contact Number:</div>
                </div>
              </div>
              <div className="col-lg-8">
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
                  <div className="mr-3 ">Relationship:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="number"
                      className="btn btn-own"
                      placeholder="Enter Relationship"
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
              Lead Information
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3">Customer type:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group mt-2">
                    <button
                      type="button"
                      className="btn btn-own dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {action}
                    </button>
                    <div className="dropdown-menu">
                      <label onClick={() => setAction("Yoga")}>Yoga</label>
                      <label onClick={() => setAction("TTC")}>TTC</label>
                      <label onClick={() => setAction("PT")}>PT</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3">Lead source:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group mt-2">
                    <button
                      type="button"
                      className="btn btn-own dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {action}
                    </button>
                    <div className="dropdown-menu">
                      <label onClick={() => setAction("Yoga")}>Yoga</label>
                      <label onClick={() => setAction("TTC")}>TTC</label>
                      <label onClick={() => setAction("PT")}>PT</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3">Enquiry Type:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group mt-2">
                    <button
                      type="button"
                      className="btn btn-own dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {action}
                    </button>
                    <div className="dropdown-menu">
                      <label onClick={() => setAction("Yoga")}>Yoga</label>
                      <label onClick={() => setAction("TTC")}>TTC</label>
                      <label onClick={() => setAction("PT")}>PT</label>
                    </div>
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
              Member Manager
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3">Assign Staff:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group mt-2">
                    <button
                      type="button"
                      className="btn btn-own dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {"Prabha"}
                    </button>
                    <div className="dropdown-menu">
                      <label onClick={() => setAction("Yoga")}>Yoga</label>
                      <label onClick={() => setAction("TTC")}>TTC</label>
                      <label onClick={() => setAction("PT")}>PT</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3">Member Manager:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group mt-2">
                    <button
                      type="button"
                      className="btn btn-own dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {action}
                    </button>
                    <div className="dropdown-menu">
                      <label onClick={() => setAction("Yoga")}>Yoga</label>
                      <label onClick={() => setAction("TTC")}>TTC</label>
                      <label onClick={() => setAction("PT")}>PT</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3">Batch:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group mt-2">
                    <button
                      type="button"
                      className="btn btn-own dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {action}
                    </button>
                    <div className="dropdown-menu">
                      <label onClick={() => setAction("Yoga")}>Yoga</label>
                      <label onClick={() => setAction("TTC")}>TTC</label>
                      <label onClick={() => setAction("PT")}>PT</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3">General Trainer:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group mt-2">
                    <button
                      type="button"
                      className="btn btn-own dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {action}
                    </button>
                    <div className="dropdown-menu">
                      <label onClick={() => setAction("Yoga")}>Yoga</label>
                      <label onClick={() => setAction("TTC")}>TTC</label>
                      <label onClick={() => setAction("PT")}>PT</label>
                    </div>
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
              IDs
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Attendance ID:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Attendance ID"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Club ID:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Club ID"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">National ID:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter National ID"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Locker Key No:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Locker Key No"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">PAN:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter PAN No"
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
              Secondary contact details
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Secondary Name:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Secondary Name"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Secondary Number:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Secondary Number"
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
              Apparel and Shoes
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3">T-Shirt Size:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group mt-2">
                    <button
                      type="button"
                      className="btn btn-own dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {action}
                    </button>
                    <div className="dropdown-menu">
                      <label onClick={() => setAction("Yoga")}>Yoga</label>
                      <label onClick={() => setAction("TTC")}>TTC</label>
                      <label onClick={() => setAction("PT")}>PT</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3">Shoes Size:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group mt-2">
                    <button
                      type="button"
                      className="btn btn-own dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {action}
                    </button>
                    <div className="dropdown-menu">
                      <label onClick={() => setAction("Yoga")}>Yoga</label>
                      <label onClick={() => setAction("TTC")}>TTC</label>
                      <label onClick={() => setAction("PT")}>PT</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3">Shorts Size:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group mt-2">
                    <button
                      type="button"
                      className="btn btn-own dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {action}
                    </button>
                    <div className="dropdown-menu">
                      <label onClick={() => setAction("Yoga")}>Yoga</label>
                      <label onClick={() => setAction("TTC")}>TTC</label>
                      <label onClick={() => setAction("PT")}>PT</label>
                    </div>
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
              Insurance
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Nominee name:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Nominee Full name"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex right" style={{ gap: "30px" }}>
                  <div className="mr-3 ">Nominee Relation:</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex" style={{ gap: "30px" }}>
                  <div className="btn-group">
                    <input
                      type="text"
                      className="btn btn-own"
                      placeholder="Enter Relation"
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

export default FitnessProfile;
