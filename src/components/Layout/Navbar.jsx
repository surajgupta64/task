import React from 'react'
import yog_logo from '../../Images/yog_logo.png';
import { FiSearch } from 'react-icons/fi'
import { HiUserAdd } from 'react-icons/hi'
import { FaSwatchbook } from 'react-icons/fa'
import { BsCalendarEvent, BsFilePostFill,  } from 'react-icons/bs'
import { ImTelegram } from 'react-icons/im'
import { CgProfile } from 'react-icons/cg'
import { TbBrandBooking } from 'react-icons/tb'
import { RiSpeedLine } from 'react-icons/ri'

const Navbar = () => {
    return (
        <>
            <div className="admin_navbar">
                <div className="bunty d-flex align-items-center justify-content-between" style={{ height: "100%;" }}>
                    <div>
                        <img src={yog_logo} width="100px" height="100px" alt="error" />
                    </div>
                    <ul className="d-flex" style={{ gap: "50px" }}>
                        <li className="nav-icons"><FiSearch /></li>
                        <li className="nav-icons"><HiUserAdd /></li>
                        <li className="nav-icons"><TbBrandBooking /></li>
                        <li className="nav-icons"><BsCalendarEvent /></li>
                        <li className="nav-icons"><RiSpeedLine /></li>
                        <li className="nav-icons"><BsFilePostFill /></li>
                        <li className="nav-icons"><ImTelegram /></li>
                        <li className="nav-icons"><CgProfile /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar