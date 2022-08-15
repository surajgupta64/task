import React, { useState } from 'react'
import Navbar from '../Layout/Navbar'
import { FiSearch } from 'react-icons/fi'
import { HiUserAdd } from 'react-icons/hi'
import { FaSwatchbook } from 'react-icons/fa'
import { BsCalendarEvent, BsFilePostFill, BsCalendarCheck } from 'react-icons/bs'
import { ImTelegram } from 'react-icons/im'
import { CgProfile } from 'react-icons/cg'
import { TbBrandBooking } from 'react-icons/tb'
import { RiSpeedLine } from 'react-icons/ri'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox, MdOutlineAddBox } from 'react-icons/md'
import { AiOutlineMinusSquare, AiOutlineDelete,AiFillEdit } from 'react-icons/ai'
import {HiOutlinePencilAlt} from 'react-icons/hi'
import { FiMail } from 'react-icons/fi' 
import { FaWhatsapp } from 'react-icons/fa'

const ManageStaff = () => {
  const [toggle, setToggle] = useState(true)  
  const [action1, setAction1] = useState('AllClients')
  const [value, onChange] = useState(new Date());
  const [openCal, setCal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        
        <div className="dbox-10">
          <div>
          <div className="text-center" style={{ fontSize: "23px" }}>Biometric Staff Report</div>
          <div className="d-flex justify-content-between mt-10">
            <div className="d-flex" style={{ gap: "30px" }}>
              
              
              
            <div className="mr-3">Communicate:</div>
            <div className="btn-group">
              <button type="button" className="btn btn-own dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {action1}
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#" onClick={() => setAction1("AllClients")}>All Clients</a>
                <a className="dropdown-item" href="#" onClick={() => setAction1("Last Seven Days")}>Last Seven Days</a>
                <a className="dropdown-item" href="#" onClick={() => setAction1("Month Till Date")}>Month Till Date</a>
                <a className="dropdown-item" href="#" onClick={() => setAction1("Custom Date Range")}>Custom Date Range</a>
              </div>
            </div>
            
            <div className="mr-3">Designation:</div>
            <div className="btn-group">
              <button type="button" className="btn btn-own dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {action1}
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#" onClick={() => setAction1("AllClients")}>All Clients</a>
                <a className="dropdown-item" href="#" onClick={() => setAction1("Last Seven Days")}>Last Seven Days</a>
                <a className="dropdown-item" href="#" onClick={() => setAction1("Month Till Date")}>Month Till Date</a>
                <a className="dropdown-item" href="#" onClick={() => setAction1("Custom Date Range")}>Custom Date Range</a>
              </div>
            </div>
            
            <div className="mr-3">Admin Rights:</div>
            <div className="btn-group">
              <button type="button" className="btn btn-own dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {action1}
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#" onClick={() => setAction1("AllClients")}>All Clients</a>
                <a className="dropdown-item" href="#" onClick={() => setAction1("Last Seven Days")}>Last Seven Days</a>
                <a className="dropdown-item" href="#" onClick={() => setAction1("Month Till Date")}>Month Till Date</a>
                <a className="dropdown-item" href="#" onClick={() => setAction1("Custom Date Range")}>Custom Date Range</a>
              </div>
            </div>
              <div>
                <button className="btn btn-primary">Go</button>
              </div>
            </div>
          </div>
            <table className="table_client_2" border="1" cellSpacing="0" width="100%">
              <tr className="tr-client text-center">
                <td className="td-1">
                  <div>
                    <MdOutlineCheckBoxOutlineBlank />
                  </div>
                </td>
                <td className="td-2">
                  S.No
                </td>
                <td className="td-3">
                Staff ID
                </td>
                <td className="td-2">
                Staff Name
                </td>
                <td className="td-3">
                Mail
                </td>
                <td className="td-2">
                Attendance ID
                </td>
                <td className="td-3">
                Active
                </td>
                <td className="td-2">
                Admin Rights
                </td>
                <td className="td-2">
                Target
                </td>
                <td className="td-3">
                Rep Change
                </td>
                
                <td className="td-3">
                Delete
                </td>
              </tr>

              <tr className="tr-client text-center">
                <td className="td-1">
                  <div>
                    <MdOutlineCheckBoxOutlineBlank />
                  </div>
                </td>
                <td className="td-2">
                1
                </td>
                <td className="td-3">
                26599
                </td>
                <td className="td-2">
                Deepika Shah
                </td>
                <td className="td-3">
                marketing.ypske2@gmail.com
                </td>
                <td className="td-2">
                S26599
                </td>
                <td className="td-3">
                <button type="button" className={toggle ? "btn btn-own1" : "btn btn-own2"} onClick={()=>setToggle(!toggle)} >
                {toggle?"ON":"OFF"}
                </button>
                </td>
                <td className="td-2">
                Sales
                </td>
                <td className="td-3">
                <a href='#'>View</a>
                </td>
                <td className="td-2">
                <a href='#'>Change</a>
                </td>
                
                <td className="td-2">
                    <div className="bg-icon d-flex justify-content-center align-items-center"><AiOutlineDelete/></div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageStaff