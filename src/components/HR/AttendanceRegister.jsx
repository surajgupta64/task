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

const AttendanceRegister = () => {
  const [toggle, setToggle] = useState(true)  
  const [action, setAction] = useState('2021')
  
  const [action1, setAction1] = useState('August')
  const [value, onChange] = useState(new Date());
  const [openCal, setCal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        
        <div className="dbox-10">
          <div>
          <div className="text-center" style={{ fontSize: "23px" }}>Attendance Register</div>
          <div className="d-flex  justify-content-between">
            <div className="d-flex align-items-center justify-content-center" style={{ gap: "30px" }}>
              
            <div className="mr-3">Staff</div>
            <div className="btn-group">
                
              <input
                type="text"
                className="btn btn-own"
                placeholder="Search Staff"
              />
            </div>
              <div>
                <button className="btn btn-primary">Go</button>
              </div>
            </div>
            <div className="d-flex" style={{ gap: "20px" }}>
              <button className="btn btn_enquiry">Leave Entry</button>
              <button className="btn btn_enquiry">Attendance Scan</button>
            </div>
          </div>
          <div className="d-flex  justify-content-between mt-10">
            <div className="d-flex align-items-center justify-content-center" style={{ gap: "30px" }}>
              
            <div className="mr-3">Year</div>
            
            <div class="btn-group">
                <button type="button" class="btn btn-own dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {action}
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#" onClick={() => setAction("2019")}>2021</a>
                  <a class="dropdown-item" href="#" onClick={() => setAction("2019")}>2019</a>
                  <a class="dropdown-item" href="#" onClick={() => setAction("2019")}>2018</a>
                </div>
              </div>
              <div className="mr-3">Month</div>
            
            <div class="btn-group">
                <button type="button" class="btn btn-own dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {action1}
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#" onClick={() => setAction1("August")}>August</a>
                  <a class="dropdown-item" href="#" onClick={() => setAction1("July")}>July</a>
                  <a class="dropdown-item" href="#" onClick={() => setAction1("June")}>June</a>
                </div>
              </div>
            </div>
            <div className="d-flex" style={{ gap: "20px" }}>
              <button className="btn btn_enquiry">Export Excel</button>
            </div>
          </div>
          

      

            <table className="table_client_2" border="1" cellSpacing="0" width="100%">
              <tr className="tr-client text-center">
                <td className="td-2">
                  <div>
                    <MdOutlineCheckBoxOutlineBlank />
                  </div>
                </td>
                <td className="td-3">
                  S.No
                </td>
                <td className="td-2">
                Staff Name
                </td>
                <td className="td-3">
                Punch Date
                </td>
                <td className="td-2">
                First Punch
                </td>
                <td className="td-3">
                Last Punch
                </td>
                <td className="td-2">
                Total No of hours
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
                Deepika Shah
                </td>
                <td className="td-2">
                13/Aug/2022
                </td>
                <td className="td-3">
                10:23:00
                </td>
                <td className="td-2">
                18:04:00
                </td>
                <td className="td-3">
                7:41
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default AttendanceRegister