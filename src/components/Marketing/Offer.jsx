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

const Offer = () => {
  const [action, setAction] = useState('All Client')
  const [value, onChange] = useState(new Date());
  const [openCal, setCal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        
        <div className="dbox-10">
          <div>
          <div className="text-center" style={{ fontSize: "23px" }}>Offer</div>
          <div className="d-flex justify-content-between">
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
            
            <div className="d-flex align-items-center" style={{ gap: "20px" }}>
            <button className="btn btn_enquiry">Add Deal</button>
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
                Date
                </td>
                <td className="td-2">
                Service Name
                </td>
                <td className="td-3">
                Deal Name
                </td>
                <td className="td-2">
                Start Date
                </td>
                <td className="td-3">
                End Date
                </td>
                <td className="td-2">
                Service Variations
                </td>
                <td className="td-3">
                Service Fee	
                </td>
                <td className="td-2">
                Discount Rate
                </td>
                <td className="td-3">
                Discount Value
                </td>
                <td className="td-2">
                Net Fee
                </td>
                <td className="td-3">
                Edit
                </td>
                <td className="td-2">
                Status
                </td>
                <td className="td-3">
                Delete	
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
                08-08-2022
                </td>
                <td className="td-2">
                Yoga
                </td>
                <td className="td-3">
                Independence Week
                </td>
                <td className="td-2">
                12-08-2022
                </td>
                <td className="td-3">
                15-08-2022
                </td>
                <td className="td-2">
                1 Month
                </td>
                <td className="td-3">
                2500
                </td>
                <td className="td-2">
                50 %
                </td>
                <td className="td-3">
                1250
                </td>
                <td className="td-2">
                1250
                </td>
                <td className="td-3">
                
                <div className="bg-icon d-flex justify-content-center align-items-center"><AiFillEdit/></div>
                </td>
                <td className="td-2">
                inactive
                </td>
                <td className="td-3">
                -
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Offer