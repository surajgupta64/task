import React, { useState } from 'react'
import Navbar from '../Layout/Navbar'
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox, MdOutlineAddBox,MdPhoneMissed,MdInfoOutline } from 'react-icons/md'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import Table from '../Table'
import 'react-calendar/dist/Calendar.css';
const RenewalCall = () => {
    const [action, setAction] = useState('All Clients');
    const [call, setCall] = useState('All');
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
        { heading: 'Service Name', value: 'service_name' },
        { heading: 'Service Variation Name', value: 'variation_name' },
        { heading: 'Expiry Date', value:'expiry_date' },
        { heading: 'Info',btn1:<div className="bg-icon d-flex justify-content-center align-items-center"><AiOutlineInfoCircle/></div> },
        { heading: 'Renew', btn: 'Renew' },
        { heading: 'Call Logs',btn1:<div className="bg-icon d-flex justify-content-center align-items-center"><MdOutlineAddBox /></div>,btn2:<div className="bg-icon d-flex justify-content-center align-items-center"><MdPhoneMissed/></div> },
        { heading: 'Sales Rep',value:'sales_rep' },
        { heading: 'PT Trainer',value:'pt_trainer'},
        { heading: 'Trainer',value:'trainer'},
        { heading: 'Staff Name',value:'staff_name' },
        
      ]
    
      const Users = [
        {
          "id": 1,
          "date_time": "25-08-2022 03:00 PM",
          "member_name": "Nayana Nagrecha",
          "mobile": "9136123476",
          "service_name": "Yoga",
          "variation_name": "3 Months",
          "expiry_date": "31-08-2022",
          "sales_rep": "Sejal Ganatra",
          "pt_trainer": "-",
          "trainer": "Prabha Yadav",
          "staff_name": "Sejal Ganatra",
        },
        {
            "id": 2,
            "date_time": "25-08-2022 03:00 PM",
            "member_name": "Nayana Nagrecha",
            "mobile": "9136123476",
            "service_name": "Yoga",
            "variation_name": "3 Months",
            "expiry_date": "31-08-2022",
            "sales_rep": "Sejal Ganatra",
            "pt_trainer": "-",
            "trainer": "Prabha Yadav",
            "staff_name": "Sejal Ganatra",
        },
      ]    

    return (
        <>
            <Navbar />
            <div className="page_reducer_1">
                <div className="dbox-10">
                    
                    <div className="text-center mb-2 mt-3" style={{ fontSize: "23px" }}>RENEWAL CALLS</div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex" style={{ gap: "30px" }}>
                            <div className="d-flex align-items-center" style={{ gap: "20px" }}>
                            <div class="btn-group">
                                    <button type="button" class="btn btn-own dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {action}
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#" onClick={() => setAction("All Clients")}>All Clients</a>
                                        <a class="dropdown-item" href="#" onClick={() => setAction("Active Clients")}>Active Clients</a>
                                        <a class="dropdown-item" href="#" onClick={() => setAction("Inactive Clients")}>Inactive Clients</a>
                                        <a class="dropdown-item" href="#" onClick={() => setAction("Personal Training")}>Personal Training</a>
                                        <a class="dropdown-item" href="#" onClick={() => setAction("Non Personal Training")}>Non Personal Training</a>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-own dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {call}
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#" onClick={() => setCall("All")}>All</a>
                                        <a class="dropdown-item" href="#" onClick={() => setCall("Expiring Today")}>Expiring Today</a>
                                    </div>
                                </div>
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
                    <div className="d-flex justify-content-between">
                        
                    <div className="d-flex align-items-center" style={{ gap: "80px",marginTop: "20px"}}>
                            <button className="btn btn_enquiry">SCHEDULED 0</button>
                            <button className="btn btn_enquiry">ATTEMPTED 0</button>
                            <button className="btn btn_enquiry">CONTACTED 0</button>
                            <button className="btn btn_enquiry">NOT CONTACTED 0</button>
                            <button className="btn btn_enquiry">MISSED 0</button>
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

export default RenewalCall