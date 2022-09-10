import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import "react-calendar/dist/Calendar.css";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const AddBatch = () => {
  const [action, setAction] = useState("All Clients");

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div className="text-center" style={{ fontSize: "23px" }}>
            Add Batch
          </div>
          <div className="d-flex justify-content-between mt-10">
            <div className="d-flex align-items-center" style={{ gap: "30px" }}>
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
                  <a
                    class="dropdown-item"
                    href="#"
                    onClick={() => setAction("Custom Date Range")}
                  >
                    Custom Date Range
                  </a>
                </div>
              </div>
              <div>
                <button className="btn btn-primary">Edit</button>
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
                  <a
                    class="dropdown-item"
                    href="#"
                    onClick={() => setAction("Custom Date Range")}
                  >
                    Custom Date Range
                  </a>
                </div>
              </div>
              <div>
                <button className="btn btn-primary">Go</button>
              </div>
            </div>

            <div className="d-flex align-items-center" style={{ gap: "20px" }}>
              <button style={{ width: "100%" }} className="btn btn_enquiry">
                Add Batch
              </button>
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex" style={{ gap: "30px" }}>
              <div className="d-flex align-items-center">
                <div className="mr-3">Communicate:</div>
                <div className="btn-group">
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
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => setAction("Today")}
                    >
                      Today
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => setAction("Last Seven Days")}
                    >
                      Last Seven Days
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => setAction("Month Till Date")}
                    >
                      Month Till Date
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => setAction("Custom Date Range")}
                    >
                      Custom Date Range
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                className="btn btn_enquiry "
                style={{ marginRight: "5px" }}
              >
                Export Excel
              </button>
              <button className="btn btn_enquiry">View Assessment</button>
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-between">
            <div
              className="d-flex align-items-center justify-content-center "
              style={{ gap: "20px" }}
            >
              <div className="mr-3"> Attendance</div>
              <div className="btn-group">
                <input type="date" placeholder="Date" className="btn btn-own" />
              </div>
              <div className="mr-3"> Check In</div>
              <div className="btn-group">
                <input
                  type="time"
                  placeholder="Check In"
                  className="btn btn-own"
                />
              </div>

              <div className="mr-3"> Check In</div>
              <div className="btn-group">
                <input
                  type="time"
                  placeholder="Check Out"
                  className="btn btn-own"
                />
              </div>

              <div>
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dbox-10">
          <div>
            <table
              className="table_client_2"
              border="1"
              cellSpacing="0"
              width="100%"
            >
              <tr className="tr-client text-center">
                <td className="td-3">
                  <div>
                    <MdOutlineCheckBoxOutlineBlank />
                  </div>
                </td>
                <td className="td-2">S.No</td>
                <td className="td-3">Name</td>
                <td className="td-2">E-mail</td>
                <td className="td-3">Mobile</td>
                <td className="td-2">Service Variation</td>
                <td className="td-3">Start Date</td>
                <td className="td-2">Expiry Date</td>
                <td className="td-3">Service Card</td>
                <td className="td-2">Active/Inactive</td>
                <td className="td-3">Option</td>
              </tr>

              <tr className="tr-client text-center">
                <td className="td-3">
                  <div>
                    <MdOutlineCheckBoxOutlineBlank />
                  </div>
                </td>
                <td className="td-2">1</td>
                <td className="td-3">Bhavi Kadakia</td>
                <td className="td-2"></td>
                <td className="td-3">6146842970</td>
                <td className="td-2">12 Plus 2 months complimentary</td>
                <td className="td-3">01-09-2022</td>
                <td className="td-2">31-12-2023</td>
                <td className="td-3">
                  <a href="#">View</a>
                </td>
                <td className="td-2">
                  <a href="#">Active</a>
                </td>
                <td className="td-3">
                  <a href="#">Remove</a>
                </td>
              </tr>
            </table>
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

export default AddBatch;
