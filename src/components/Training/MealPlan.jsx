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

const MealPlan = () => {
  const [toggle, setToggle] = useState(true)  
  const [action, setAction] = useState('2021')
  
  const [action1, setAction1] = useState('Selrct Category')
  const [value, onChange] = useState(new Date());
  const [openCal, setCal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        
        <div className="dbox-10">
          <div>
          <div className="text-center" style={{ fontSize: "23px" }}>Meal Plan Templates</div>
          <div className="d-flex mt-5 justify-content-between">
            <div className="d-flex align-items-center justify-content-center" style={{ gap: "30px" }}>
              
            <div className="mr-3">Search</div>
            <div className="btn-group">
                
              <input
                type="text"
                className="btn btn-own"
                placeholder="Template name"
              />
            </div>
            
            
              <div>
                <button className="btn btn-primary">Go</button>
              </div>
            </div>
            <div className="d-flex" style={{ gap: "20px" }}>
              <button style={{ width:"100%" }} className="btn btn_enquiry">Create New Templates</button>
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
                Meal Type
                </td>
                <td className="td-3">
                Meal Name
                </td>
                <td className="td-2">
                Meal Description
                </td>
                <td className="td-3">
                Details
                </td>
                <td className="td-2">
                Created By
                </td>
                <td className="td-3">
                Edit
                </td>
                <td className="td-2">
                Clone
                </td>
                <td className="td-3">
                Delete
                </td>
              </tr>

              
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default MealPlan