import { useState } from "react";
import Navbar from "../Layout/Navbar";

const EnquiryForm = () => {
  const [action1, setAction1] = useState("India (+91)");

  const [action, setAction] = useState("Select");
  const [options, setOptions] = useState("Male");
  const [options1, setOptions1] = useState("Select");

  const onRadioChange1 = (e) => {
    setOptions1(e.target.value);
  };
  const onRadioChange = (e) => {
    setOptions(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10 " style={{ marginBottom: "20px" }}>
          <div className="text-center" style={{ gap: "30px" }}>
            <h4 style={{ fontWeight: "bold" }}>Enquiry Form</h4>
          </div>
          <div className="row mt-5">
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
                    <div className="mr-3 ">Full name:</div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group mt-2">
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
                        <label
                          className="dropdown-item"
                          onClick={() => setAction1("Pakistan (+92)")}
                        >
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
                    <div className="btn-group mt-2">
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
                    <div className="btn-group mt-2">
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
                    <div className="btn-group mt-2">
                      <input
                        type="Date"
                        className="btn btn-own"
                        placeholder="Select Date of birth"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mt-2">
                  <div className="d-flex right" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Area:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group ">
                      <input
                        type="text"
                        className="btn btn-own"
                        placeholder="Enter Locality"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mt-2">
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

                <div className="col-lg-4 mt-2">
                  <div className="d-flex right" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Profession:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <input
                        type="text"
                        className="btn btn-own"
                        placeholder="Enter Professsion"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-2">
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
                <div className="col-lg-4 mt-2">
                  <div className="d-flex right" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Name:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
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
                <div className="col-lg-4 mt-2">
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
                <div className="col-lg-4 mt-2">
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
                <div className="col-lg-4 mt-2">
                  <div className="d-flex right" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Relationship:</div>
                  </div>
                </div>
                <div className="col-lg-8 mt-2">
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
                    <div className="mr-3 ">Enquiry Date:</div>
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
                    <div className="mr-3">Service Name:</div>
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
            </div>
            <div className="col-lg-6 mt-2">
              <div
                className="title"
                style={{
                  fontWeight: "bold",
                  marginLeft: "63px",
                  fontSize: "18px",
                }}
              >
                Schedule enquiry follow-up
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="d-flex right" style={{ gap: "30px" }}>
                    <div className="mr-3">Staff Name:</div>
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
                        {"Prabha Yadav"}
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
                    <div className="mr-3 ">Call Status:</div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="d-flex mt-2" style={{ gap: "30px" }}>
                    <label style={{ color: "#fff" }}>
                      <input
                        type="radio"
                        value="Cold"
                        checked={options1 === "Cold"}
                        onChange={onRadioChange1}
                      />{" "}
                      Cold
                    </label>

                    <label style={{ marginLeft: "15px", color: "#fff" }}>
                      <input
                        type="radio"
                        value="Warm"
                        checked={options1 === "Warm"}
                        onChange={onRadioChange1}
                      />{" "}
                      Warm
                    </label>

                    <label style={{ marginLeft: "15px", color: "#fff" }}>
                      <input
                        type="radio"
                        value="Hot"
                        checked={options1 === "Hot"}
                        onChange={onRadioChange1}
                      />{" "}
                      Hot
                    </label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <br />
                  <div className="d-flex right" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Message:</div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <br />
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <textarea
                        style={{
                          minHeight: "10px",
                          minWidth: "880px",
                          borderRadius: "5px",
                          padding: "10px",
                        }}
                        placeholder="Enter Message"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </div>
            <div className="col-lg-6">
              <br />
              <div className="row">
                <div className="col-lg-4">
                  <div className="d-flex right" style={{ gap: "30px" }}>
                    <div className="mr-3 ">Date & Time:</div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="d-flex" style={{ gap: "30px" }}>
                    <div className="btn-group">
                      <input type={"datetime-local"} className="btn btn-own" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3"></div>
                <div className="col-lg-9">
                  <div className="d-flex mt-2" style={{ gap: "30px" }}>
                    <label style={{ marginLeft: "15px", color: "#fff" }}>
                      <input
                        type="radio"
                        value="Warm"
                        checked={options1 === "Warm"}
                        onChange={onRadioChange1}
                      />{" "}
                      Appointment
                    </label>

                    <label style={{ marginLeft: "15px", color: "#fff" }}>
                      <input
                        type="radio"
                        value="Hot"
                        checked={options1 === "Hot"}
                        onChange={onRadioChange1}
                      />{" "}
                      Trial Session
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2"></div>

            <div className="col-lg-5">
              <button className="btn btn-primary" style={{ width: "150px" }}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="dbox-10 ">
        <div className="d-flex justify-content-between">
          <div className="d-flex" style={{ gap: "30px" }}>
            <form onSubmit={handleSubmit}>
              <h1>Register</h1>
              <div className="row">
                <div className="col-lg-6">
                  {inputs.map((input) => (
                    <FormInput
                      key={input.id}
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                    />
                  ))}
                </div>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default EnquiryForm;
