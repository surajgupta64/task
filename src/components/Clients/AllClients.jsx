import React, { useState,useEffect } from "react";
import Navbar from "../Layout/Navbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from 'axios'
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
  MdOutlineAddBox,
} from "react-icons/md";
import {
  AiOutlineMinusSquare,
  AiOutlineDelete,
  AiFillEdit,
} from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import {
  BsCalendarEvent,
  BsFilePostFill,
  BsCalendarCheck,
} from "react-icons/bs";

import { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } from '../ApiServices/AllClientApi';
const AllClients = () => {
  const responseInfo = useGetAllPostQuery()
  const [deletePost] = useDeletePostMutation()

  const [action, setAction] = useState("All Clients");
  const [allClientsData,setAllClientsData]=useState([])
  const [TotalM, setTotalM] = useState(187);

  const [ActiveM, setActiveM] = useState(120);

  const [InactiveM, setInactiveM] = useState(67);
  const [value, onChange] = useState(new Date());
  const [openCal, setCal] = useState(false);

  const fetchData=()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        setAllClientsData( allClientsData );
      })
  }
  useEffect(() => {
    fetchData()
  },[]);



  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div className="text-center" style={{ fontSize: "23px" }}>
            ALL CLIENTS
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center" style={{ gap: "30px" }}>
              <div class="btn-group">
                <div className="mr-3 btn-own4">Total Members : {TotalM}</div>
              </div>
            </div>
            <div
              className="d-flex align-items-center justify-content-center mt-3"
              style={{ gap: "30px" }}
            >

<div className="mr-3 btn-own4">Active Members : {ActiveM}</div>
            </div>
            
            <div className="d-flex align-items-center" style={{ gap: "20px" }}>

            <div className="mr-3 btn-own4">Inactive Members : {InactiveM}</div>
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center" style={{ gap: "30px" }}>
              <div className="mr-3">Filter by:</div>
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

            <div
              className="d-flex align-items-center justify-content-center mt-3"
              style={{ gap: "30px" }}
            >
              <div className="mr-3">Sub-filter:</div>
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

            <div 
            >
              
              <button className="btn btn_enquiry " style={{ marginRight: "5px" }} >Add to Mailer</button>
              <button className="btn btn_enquiry">Export Clients</button>
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-between">
            <div className="d-flex" >
              <div className="d-flex align-items-center">
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
                      onClick={() => setAction("AllClients")}
                    >
                      All Clients
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

            <div
              className="d-flex align-items-center justify-content-center mt-3"
              style={{ gap: "30px" }}
            >
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

            <div className="d-flex align-items-center" style={{ gap: "20px" }}>
              <div className="mr-3"> Mailer list</div>
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
                <td className="td-2">
                  <div>
                    <MdOutlineCheckBoxOutlineBlank />
                  </div>
                </td>
                <td className="td-2">S.No</td>
                <td className="td-3">Profile</td>
                <td className="td-2">Billing</td>
                <td className="td-3">Service Card</td>
                <td className="td-2">Attendance ID/ Checkin</td>
                <td className="td-3">Call Log</td>
                <td className="td-2">Appointment</td>
                <td className="td-3">Training</td>
                <td className="td-2">Archive</td>
              </tr>


              {/*  {
                allClientsData.data.map((item,i)=>
                <tr className="tr-client text-center" key={i}>
                  <td className="td-2">
                  <div>
                    <MdOutlineCheckBoxOutlineBlank />
                  </div>
                </td>
                <td className="td-2">{i}</td>
                <td className="td-3">{item.profile}</td>
                <td className="td-2">{item.billing}</td>
                <td className="td-3">
                  <a href={item.servicecard}>View</a>
                </td>
                <td className="td-2">{item.chechin}</td>
                <td className="td-3">
                  <AiOutlineMinusSquare />
                </td>
                <td className="td-2">
                  <a href={item.appointment}>View</a>
                </td>
                <td className="td-3">
                  <a href={item.training}>View</a>
                </td>
                <td className="td-2">{item.archive}</td>
                </tr>
                )
              } */} 
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllClients;
