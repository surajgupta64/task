import React, { useState } from 'react'
import Navbar from '../Layout/Navbar'
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox, MdOutlineAddBox } from 'react-icons/md'
import { AiOutlineMinusSquare } from 'react-icons/ai'
import { BsCalendarCheck, BsFillCaretDownFill } from 'react-icons/bs'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const EmployeePerformance = () => {
    const [action, setAction] = useState('All Staff');
    const [call, setCall] = useState('All Call');
    const [month, setMonth] = useState('Aug');
    const [year, setYear] = useState('2022');
    const [value, onChange] = useState(new Date());
    const [openCal, setCal] = useState(false);
    return (
        <>
            <Navbar />
            <div className="page_reducer_1">
                <div className="dbox-10">
                    <div className="text-center mb-2 mt-3" style={{ fontSize: "23px" }}>EMPLOYEE PERFORMANCE</div>
                   

                    <div className="d-flex justify-content-between mt-10">
                        <div className="d-flex" style={{ gap: "30px" }}>
                            <div className="d-flex align-items-center" style={{ gap: "20px" }}>
                                <div>Month</div>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-own dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {month}
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#" onClick={() => setMonth("Jan")}>Jan</a>
                                        <a class="dropdown-item" href="#" onClick={() => setMonth("Feb")}>Feb</a>
                                        <a class="dropdown-item" href="#" onClick={() => setMonth("Mar")}>Mar</a>
                                    </div>
                                </div>
                                <div>Year</div>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-own dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {year}
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#" onClick={() => setYear("2022")}>2022</a>
                                        <a class="dropdown-item" href="#" onClick={() => setYear("2021")}>2021</a>
                                        <a class="dropdown-item" href="#" onClick={() => setYear("202")}>2020</a>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <input type="text" class="btn btn-own" placeholder='Enter Staff Name'/>
                                </div>
                                <div>
                                    <button className='btn btn-primary'>Go</button>
                                </div>
                                <div>
                                    <button className='btn btn_enquiry'>Export Excel</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>

                    
                    <div className="text-center mt-5" style={{ fontSize: "18px",backgroundColor:"white",bottom:0,color:"black",padding:"8px" }}>Sales Closure </div>
                        <table className="table_client_2" border="1" cellSpacing="0" width="100%">
                            
                            <tr className="tr-client-1 text-center">
                                <td className="td-a1">
                                    <div>
                                        <MdOutlineCheckBoxOutlineBlank />
                                    </div>
                                </td>
                                <td className="td-a2" style={{ width: "50px" }}>
                                    S.No
                                </td>
                                <td className="td-a3">
                                Assign Date & Time
                                </td>
                                <td className="td-a2">
                                    Client Name
                                </td>
                                <td className="td-a3">
                                    Mobile
                                </td>
                                <td className="td-a2">
                                Service Card
                                </td>
                                <td className="td-a3">
                                Payments
                                </td>
                                <td className="td-a2">
                                Call Logs
                                </td>
                                <td className="td-a3">
                                Staff Name
                                </td>
                            </tr>

                            <tr className="tr-client-1 text-center">
                                <td className="td-a1" style={{ width: "15px" }}>
                                    <div>
                                        <MdOutlineCheckBoxOutlineBlank />
                                    </div>
                                </td>
                                <td className="td-a2" style={{ width: "70px" }}>
                                    1
                                </td>
                                <td className="td-a3">
                                    05-08-2022

                                </td>
                                <td className="td-a2">
                                    Anand
                                </td>
                                <td className="td-a3">
                                    1234567890
                                </td>
                                <td className="td-a2">
                                    TTC
                                </td>
                                <td className="td-a3">
                                    Facebook
                                </td>
                                <td className="td-a2">
                                    Enquiry
                                </td>
                                <td className="td-a3">
                                    Enquiry
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeePerformance