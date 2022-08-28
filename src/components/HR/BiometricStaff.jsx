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
import Table from '../Table'

const BiometricStaff = () => {

  const Users = [
    {
      "id": 1,
      "staff_name": "Deepika Shah",
      "attendance_id": "S25317",
      "rf_id": "Prabha.y1116@gmail.com",
      "fingerprint": "F",
      "active": "ON",
      "admin_rights": "Super Admin",
    },
    {
      "id": 2,
      "staff_name": "Deepika Shah",
      "attendance_id": "S25317",
      "rf_id": "Prabha.y1116@gmail.com",
      "fingerprint": "F",
      "active": "ON",
      "admin_rights": "Super Admin",
    },
  ]


  const column = [
    { heading: 'S.No', value: 'id' },
    { heading: 'Staff Name', value: 'staff_name' },
    { heading: 'Attendance ID', value: 'attendance_id' },
    { heading: 'RF ID', value: 'rf_id' },
    { heading: 'Fingerprint', value: 'fingerprint' },
    { heading: 'Active', value: 'active' },
    { heading: 'Biometric', value:'',btn: 'Resync' },
    { heading: 'Admin Rights', value: 'admin_rights' },
    { heading: 'Fingerprint Option',value:'', btn: 'Delete' },
    
  ]



  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        
        <div className="dbox-10">
          <div>
          <div className="text-center" style={{ fontSize: "23px" }}>Staff Biometric</div>
        
          <Table data={Users} column={column} />
          </div>
        </div>
      </div>
    </>
  )
}

export default BiometricStaff