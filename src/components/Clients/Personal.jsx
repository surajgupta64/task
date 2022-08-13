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

const Personal = () => {
  const [action, setAction] = useState('Custom Date Range')
  const [value, onChange] = useState(new Date());
  const [openCal, setCal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        
        <div className="dbox-10">
          <div>
          <div className="text-center" style={{ fontSize: "23px" }}>Personal Training</div>
          <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex" style={{ gap: "30px" }}>
              <div className={action === "Custom Date Range" ? "d-flex align-items-center" : "hide"} style={{ gap: "30px" }}>
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
                  <a class="dropdown-item" href="#" onClick={() => setAction("Custom Date Range")}>Custom Date Range</a>
                </div>
              </div>
              <div>
                <button className="btn btn-primary">Go</button>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="mr-3">Filter by:</div>
              <div className="btn-group">
                <button type="button" className="btn btn-own dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {action}
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#" onClick={() => setAction("Today")}>Today</a>
                  <a className="dropdown-item" href="#" onClick={() => setAction("Last Seven Days")}>Last Seven Days</a>
                  <a className="dropdown-item" href="#" onClick={() => setAction("Month Till Date")}>Month Till Date</a>
                  <a className="dropdown-item" href="#" onClick={() => setAction("Custom Date Range")}>Custom Date Range</a>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <div className="mr-3">
                Sub-filter:</div>
              <div className="btn-group">
                <button type="button" className="btn btn-own dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {action}
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#" onClick={() => setAction("Today")}>Today</a>
                  <a className="dropdown-item" href="#" onClick={() => setAction("Last Seven Days")}>Last Seven Days</a>
                  <a className="dropdown-item" href="#" onClick={() => setAction("Month Till Date")}>Month Till Date</a>
                  <a className="dropdown-item" href="#" onClick={() => setAction("Custom Date Range")}>Custom Date Range</a>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="d-flex align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-own dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {action}
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#" onClick={() => setAction("AllClients")}>All Clients</a>
                <a className="dropdown-item" href="#" onClick={() => setAction("Last Seven Days")}>Last Seven Days</a>
                <a className="dropdown-item" href="#" onClick={() => setAction("Month Till Date")}>Month Till Date</a>
                <a className="dropdown-item" href="#" onClick={() => setAction("Custom Date Range")}>Custom Date Range</a>
              </div>
            </div>
              <div className="mr-3">
                Communicate:</div>
              <div className="btn-group">
                <button type="button" className="btn btn-own dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {action}
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#" onClick={() => setAction("Today")}>Today</a>
                  <a className="dropdown-item" href="#" onClick={() => setAction("Last Seven Days")}>Last Seven Days</a>
                  <a className="dropdown-item" href="#" onClick={() => setAction("Month Till Date")}>Month Till Date</a>
                  <a className="dropdown-item" href="#" onClick={() => setAction("Custom Date Range")}>Custom Date Range</a>
                </div>
              </div>
            </div>
            <div className="d-flex align-itmes-center">
              <div className="mr-3">	Mailer list</div>
              <div className="btn-group">
                <button type="button" className="btn btn-own dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {action}
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#" onClick={() => setAction("Today")}>Today</a>
                  <a className="dropdown-item" href="#" onClick={() => setAction("Last Seven Days")}>Last Seven Days</a>
                  <a className="dropdown-item" href="#" onClick={() => setAction("Month Till Date")}>Month Till Date</a>
                  <a className="dropdown-item" href="#" onClick={() => setAction("Custom Date Range")}>Custom Date Range</a>
                </div>
              </div>
            </div>
            <div className="d-flex" style={{ gap: "20px" }}>
              <button className="btn btn_enquiry">Add to Mailer</button>
              <button className="btn btn_enquiry">Export Clients</button>
            </div>
          </div>
          <table className="table_client_2" border="1" cellSpacing="0" width="100%">
              <tr className="tr-client text-center">
                <td className="td-2">
                  <div>
                    <MdOutlineCheckBoxOutlineBlank />
                  </div>
                </td>
                <td className="td-2">
                  S.No
                </td>
                <td className="td-3">
                Profile
                </td>
                <td className="td-2">
                Billing
                </td>
                <td className="td-3">
                Service Card
                </td>
                <td className="td-2">
                Attendance ID/ Checkin
                </td>
                <td className="td-3">
                Call Log
                </td>
                <td className="td-2">
                Appointment
                </td>
                <td className="td-3">
                Training
                </td>
                <td className="td-2">
                Archive
                </td>
              </tr>

              <tr className="tr-client text-center">
                <td className="td-2">
                  <div>
                    <MdOutlineCheckBoxOutlineBlank />
                  </div>
                </td>
                <td className="td-2">
                1
                </td>
                <td className="td-3">
                dakshta
                </td>
                <td className="td-2">
                Payments
                </td>
                <td className="td-3">
                <a href='#'>View</a>
                </td>
                <td className="td-2">
                206
                </td>
                <td className="td-3">
                <AiOutlineMinusSquare/>
                </td>
                <td className="td-2">
                <a href='#'>View</a>
                </td>
                <td className="td-3">
                <a href='#'>View</a>
                </td>
                <td className="td-2">
                Archive
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Personal