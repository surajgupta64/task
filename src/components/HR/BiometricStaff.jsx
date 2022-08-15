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

const BiometricStaff = () => {
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
          <div className="text-center" style={{ fontSize: "23px" }}>Staff Biometric</div>
          

      

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
                Attendance ID
                </td>
                <td className="td-2">
                RF ID
                </td>
                <td className="td-3">
                Fingerprint
                </td>
                <td className="td-2">
                Active
                </td>
                <td className="td-3">
                Biometric
                </td>
                <td className="td-2">
                Admin Rights
                </td>
                <td className="td-3">
                Fingerprint Option
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
                S25317
                </td>
                <td className="td-3">
                Prabha.y1116@gmail.com
                </td>
                <td className="td-2">
                F
                </td>
                <td className="td-3">
                ON
                </td>
                <td className="td-2">
            
                <button className="btn btn_enquiry">Resync</button>
                </td>
                <td className="td-3">
                Super Admin
                </td>
                <td className="td-2">
                
              <button className="btn btn_enquiry">Delete</button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default BiometricStaff