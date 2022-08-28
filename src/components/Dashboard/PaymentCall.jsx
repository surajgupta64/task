import React, { useState } from 'react'
import Navbar from '../Layout/Navbar'
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox, MdOutlineAddBox,MdPhoneMissed,MdInfoOutline } from 'react-icons/md'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import Table from '../Table'
import 'react-calendar/dist/Calendar.css';
const PaymentCall = () => {
    const [staff, setStaff] = useState('Select');
    const [value, onChange] = useState(new Date());
    const [openCal, setCal] = useState(false);

    const column = [
        /* 
        value: keyword for normal value passing
        btn: keyword for button
        btn1 to btn4: keyword for component passing
        lebel: keyword for anchor tag
        Note: please don't pass empty values or perameters
        */
        { heading: 'S.No', value: 'id' },
        { heading: 'Assign Date & Time', value: 'date_time' },
        { heading: 'Member Name', label: 'member_name' },
        { heading: 'Mobile', value: 'mobile' },
        { heading: 'Purchase Date', value: 'purchase_date' },
        { heading: 'Total', value: 'total' },
        { heading: 'Paid', value:'paid' },
        { heading: 'Due', label: 'dua'  },
        { heading: 'Delay',value:'delay'},
        { heading: 'Call Logs',btn1:<div className="bg-icon d-flex justify-content-center align-items-center"><MdOutlineAddBox /></div>,btn2:<div className="bg-icon d-flex justify-content-center align-items-center"><MdPhoneMissed/></div> },
        { heading: 'Staff Name',value:'staff_name' },
        { heading: 'Payment Link',btn:'Send' },
        
      ]
    
      const Users = [
        {
          "id": 1,
          "date_time": "25-08-2022 03:00 PM",
          "member_name": "Bhakti Kataria",
          "mobile": "9136123476",
          "purchase_date": "19-08-2022",
          "total": "18000",
          "paid": "5000",
          "dua": "13000",
          "delay":"7",
          "staff_name": "Sejal Ganatra",
        },
        {
            "id": 2,
            "date_time": "25-08-2022 03:00 PM",
            "member_name": "Bhakti Kataria",
            "mobile": "9136123476",
            "purchase_date": "19-08-2022",
            "total": "18000",
            "paid": "5000",
            "dua": "13000",
            "delay":"7",
            "staff_name": "Sejal Ganatra",
        },
      ]    

    return (
        <>
            <Navbar />
            <div className="page_reducer_1">
                <div className="dbox-10">
                    
                    <div className="text-center mb-2 mt-3" style={{ fontSize: "23px" }}>PAYMENT CALLS</div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex" style={{ gap: "30px" }}>
                            <div className="d-flex align-items-center" style={{ gap: "20px" }}>
                            
                                <div>Communicate</div>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-own dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {staff}
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#" onClick={() => setStaff("Select")}>Select</a>
                                        <a class="dropdown-item" href="#" onClick={() => setStaff("Send E-mail")}>Send E-mail</a>
                                        <a class="dropdown-item" href="#" onClick={() => setStaff("Send SMS")}>Send SMS</a>
                                    </div>
                                </div>
                                <button className='btn btn_enquiry'>Export Excel</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Table data={Users} column={column} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentCall