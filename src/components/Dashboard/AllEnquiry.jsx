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

const AllEnquiry = () => {
  const [action, setAction] = useState('Today')
  const [value, onChange] = useState(new Date());
  const [openCal, setCal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div className="text-center" style={{ fontSize: "23px" }}>ALL ENQUIRY</div>
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
                  <a class="dropdown-item" href="#" onClick={() => setAction("Today")}>Today</a>
                  <a class="dropdown-item" href="#" onClick={() => setAction("Last Seven Days")}>Last Seven Days</a>
                  <a class="dropdown-item" href="#" onClick={() => setAction("Month Till Date")}>Month Till Date</a>
                  <a class="dropdown-item" href="#" onClick={() => setAction("Custom Date Range")}>Custom Date Range</a>
                </div>
              </div>
              <div>
                <button className="btn btn-primary">Go</button>
              </div>
            </div>
            <div className="d-flex" style={{ gap: "20px" }}>
              <button className="btn btn_enquiry">Import Enquiry</button>
              <button className="btn btn_enquiry">Enquiry Archive</button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="lead-1">
                <div className="text-center lead-l1">
                  <div className="lead-l3">
                    Enquiries
                  </div>
                </div>
                <div className="row text-center ">
                  <div className="col-lg-4">
                    <div className="lead-l2">
                      <div>OPEN</div>
                      <div className="green"><b>0</b></div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="lead-l2">
                      <div>Converted</div>
                      <div className="green"><b>0</b></div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="lead-l2">
                      <div>Archived/Lost</div>
                      <div className="green"><b>0</b></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="lead-1">
                <div className="text-center lead-l1">
                  <div className="lead-l3">
                    Enquiry
                  </div>
                </div>
                <div className="row text-center ">
                  <div className="col-lg-3 padding_reducer">
                    <div className="lead-l2">
                      <div>Enquiry</div>
                      <div className="green"><b>0</b></div>
                    </div>
                  </div>
                  <div className="col-lg-3 padding_reducer">
                    <div className="lead-l2">
                      <div>Trails</div>
                      <div className="green"><b>0</b></div>
                    </div>
                  </div>
                  <div className="col-lg-3 padding_reducer">
                    <div className="lead-l2">
                      <div>Post Trails</div>
                      <div className="green"><b>0</b></div>
                    </div>
                  </div>
                  <div className="col-lg-3 padding_reducer">
                    <div className="lead-l2">
                      <div>Sales</div>
                      <div className="green"><b>0</b></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="lead-1">
                <div className="text-center lead-l1">
                  <div className="lead-l3">
                    Trials
                  </div>
                </div>
                <div className="row text-center ">
                  <div className="col-lg-4">
                    <div className="lead-l2">
                      <div>Trial Scheduled</div>
                      <div className="green"><b>0</b></div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="lead-l2">
                      <div>Trial Completed</div>
                      <div className="green"><b>0</b></div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="lead-l2">
                      <div>Converted</div>
                      <div className="green"><b>0</b></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dbox-10">
          <div>
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
                  ID
                </td>
                <td className="td-2">
                  Date
                </td>
                <td className="td-3">
                  Name
                </td>
                <td className="td-2">
                  Service
                </td>
                <td className="td-3">
                  Source
                </td>
                <td className="td-2">
                  Stage
                </td>
                <td className="td-3">
                  Status
                </td>
                <td className="td-2">
                  Tag
                </td>
                <td className="td-3">
                  log
                </td>
                <td className="td-2">
                  Invoice
                </td>
                <td className="td-3">
                  Trail
                </td>
                <td className="td-3">
                  Appointment
                </td>
                <td className="td-2">
                  Staff
                </td>
                <td className="td-3">
                  Action
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
                2461833
                </td>
                <td className="td-2">
                05-08-2022
                </td>
                <td className="td-3">
                Sheetal Jain
                </td>
                <td className="td-2">
                TTC
                </td>
                <td className="td-3">
                Facebook
                </td>
                <td className="td-2">
                Enquiry
                </td>
                <td className="td-3">
                Enquiry
                </td>
                <td className="td-2">
                <AiOutlineMinusSquare/>
                </td>
                <td className="td-3">
                  <MdOutlineAddBox/>
                </td>
                <td className="td-2">
                  <button className="btn btn-invoice">Invoice</button>
                </td>
                <td className="td-3">
                <MdOutlineAddBox/>
                </td>
                <td className="td-2">
                <MdOutlineAddBox/>
                </td>
                <td className="td-3">
                Sejal Ganatra
                </td>
                <td className="td-2">
                  <div className="d-flex justify-content-between">
                    <div className="bg-icon d-flex justify-content-center align-items-center"><AiFillEdit/></div>
                    <div className="bg-icon d-flex justify-content-center align-items-center"><AiOutlineDelete/></div>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <div className="bg-icon d-flex justify-content-center align-items-center"><FaWhatsapp/></div>
                    <div className="bg-icon d-flex justify-content-center align-items-center"><FiMail/></div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllEnquiry