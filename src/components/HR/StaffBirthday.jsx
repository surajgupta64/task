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
  const [action, setAction] = useState('Birthday')
  
  const [action1, setAction1] = useState('August')
  const [value, onChange] = useState(new Date());
  const [openCal, setCal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        
        <div className="dbox-10">
          <div>
          <div className="text-center" style={{ fontSize: "23px" }}>Staff Birthday Report</div>
          
          <div className="d-flex justify-content-between mt-10">
            <div className="d-flex" style={{ gap: "30px" }}>
              <div className={action === "Birthday" ? "d-flex align-items-center" : "hide"} style={{ gap: "30px" }}>
                <div style={{ fontSize: "15px" }}>From</div>
                <div className="cal-icon">
                  <BsCalendarCheck onClick={() => setCal(true)} />
                  {openCal &&
                    <div>
                      <Calendar onChange={onChange} value={value} />
                    </div>
                  }
                </div>
                <div style={{ fontSize: "15px" }}>To</div>
                <div className="cal-icon">
                  <BsCalendarCheck onClick={() => setCal(false)} />
                  {openCal &&
                    <div>
                      <Calendar onChange={onChange} value={value} />
                    </div>
                  }
                </div>
              </div>
              <div class="btn-group">
                <button type="button" class="btn btn-own dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {action}
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#" onClick={() => setAction("Birthday")}>Birthday</a>
                </div>
              </div>
              <div>
                <button className="btn btn-primary">Go</button>
              </div>
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
                Name
                </td>
                <td className="td-3">
                  Mobile
                </td>
                <td className="td-2">
                Mail
                </td>
                <td className="td-3">
                Staff Profile
                </td>
                <td className="td-2">
                Birthday
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
                9819123291
                </td>
                <td className="td-3">
                ypsoperations@gmail.com
                </td>
                <td className="td-2">
                <a href="#">View</a>
                </td>
                <td className="td-3">
                10/Aug/2021
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