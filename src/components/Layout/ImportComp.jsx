import { useNavigate } from 'react-router-dom'
import { IoCallSharp } from 'react-icons/io5'
import { FaUserSlash, FaBirthdayCake } from 'react-icons/fa'
import { AiOutlineUserSwitch } from 'react-icons/ai'
import { GiOrganigram } from 'react-icons/gi'
import { SiHandshake } from 'react-icons/si'
import { MdOutlineDashboardCustomize, MdAutorenew, MdOutlineUpgrade } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { BsFillCaretDownFill, BsFillCaretUpFill, BsFillCreditCard2FrontFill } from 'react-icons/bs'
const DropDown = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="side-box-1 " onClick={() => navigate('/followups/renewalcall')}>
                <div className="d-flex justify-content-between align-items-center">
                    <div style={{ fontSize: "15px" }}><MdAutorenew /></div>
                    <div>RENEWAL</div>
                    <div style={{ fontSize: "15px" }}><IoCallSharp /></div>
                </div>
            </div>

            <div className="side-box-1" onClick={() => navigate('/followups/paymentcall')}>
                <div className="d-flex justify-content-between align-items-center">
                    <div style={{ fontSize: "15px" }}><BsFillCreditCard2FrontFill /></div>
                    <div>PAYMENT</div>
                    <div style={{ fontSize: "15px" }}><IoCallSharp /></div>
                </div>
            </div>

            <div className="side-box-1" onClick={() => navigate('/followups/upgradecall')}>
                <div className="d-flex justify-content-between align-items-center">
                    <div style={{ fontSize: "15px" }}><MdOutlineUpgrade /></div>
                    <div>UPGRADE</div>
                    <div style={{ fontSize: "15px" }}><IoCallSharp /></div>
                </div></div>


            <div className="side-box-1" onClick={() => navigate('/followups/inboundcall')}>
                <div className="d-flex justify-content-between align-items-center">
                    <div style={{ fontSize: "15px" }}><AiOutlineUserSwitch /></div>
                    <div>COURTESY </div>
                    <div style={{ fontSize: "15px" }}><IoCallSharp /></div>
                </div>

            </div>

            <div className="side-box-1" onClick={() => navigate('/followups/welcomecall')}>
                <div className="d-flex justify-content-between align-items-center">
                    <div style={{ fontSize: "15px" }}><GiOrganigram /></div>
                    <div>INBOUND</div>
                    <div style={{ fontSize: "15px" }}><IoCallSharp /></div>
                </div>
            </div>

            <div className="side-box-1" onClick={() => navigate('/followups/irregularcall')}>
                <div className="d-flex justify-content-between align-items-center">
                    <div style={{ fontSize: "15px" }}><FaUserSlash /></div>
                    <div>IRREGULAR</div>
                    <div style={{ fontSize: "15px" }}><IoCallSharp /></div>
                </div>
            </div>

            <div className="side-box-1" onClick={() => navigate('/followups/welcomecall')}>
                <div className="d-flex justify-content-between align-items-center">
                    <div style={{ fontSize: "15px" }}><SiHandshake /></div>
                    <div>WELCOME</div>
                    <div style={{ fontSize: "15px" }}><IoCallSharp /></div>
                </div>
            </div>
            <div className="side-box-1" onClick={() => navigate('/followups/birthday&annversarycall')}>
                <div className="d-flex justify-content-between align-items-center">
                    <div style={{ fontSize: "15px" }}><FaBirthdayCake /></div>
                    <div>CELEBRATIONS </div>
                    <div style={{ fontSize: "15px" }}><IoCallSharp /></div>
                </div>
            </div>
        </>
    )
}
const DropDown2 = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="side-box-1 " onClick={() => navigate('/empDashboard/empPerfomance')}>
                <div className="d-flex justify-content-between align-items-center">
                    <div>Emplyoee Performance</div>
                </div>
            </div>

            <div className="side-box-1" onClick={() => navigate('/empDashboard/ptPerformance')}>
                <div className="d-flex justify-content-between align-items-center">
                    <div>PT Performance</div>
                </div>
            </div>

        </>
    )
}

const Engagement = () => {
    const navigate = useNavigate();
    return(
        <>
        <div className="side-box-1" onClick={() => navigate('/offer/marketing')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Offer</div>
            </div>
        </div>
        </>
    )
}

const Data = () =>{
    
    const navigate = useNavigate();
    return(
        <>
        
        <div className="side-box-1" onClick={() => navigate('/unqualified/marketing')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Unqualify Data</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/followups')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Custom Mailing</div>
            </div>
        </div>
        </>
    )
}

const Promotion = () =>{
    
    const navigate = useNavigate();
    return(
        <>
        
        <div className="side-box-1" onClick={() => navigate('/followups')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Customer Review</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/followups')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Profile</div>
            </div>
        </div>
        </>
    )
}

const ValidityBased = () =>{
    
    const navigate = useNavigate();
    return(
        <>
        <div className="side-box-1" onClick={() => navigate('/all/clients')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>All Clients</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/active/clients')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Active Clients</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/inactive/clients')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>In-Active Clients</div>
            </div>
        </div>
        </>
    )
}

const ServiceCategory = () =>{
    
    const navigate = useNavigate();
    return(
        <>
        
        <div className="side-box-1" onClick={() => navigate('/teacher/clients')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Teacher Training</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/personal/clients')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Personal Training</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/diet/clients')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Diet Counselling</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/pt/clients')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>PT Expiry</div>
            </div>
        </div>
        </>
    )
}

const CustomGroups = () =>{
    
    const navigate = useNavigate();
    return(
        <>
        
        <div className="side-box-1" onClick={() => navigate('/batch/clients')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Batch</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/addBatch/clients')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Add Batch</div>
            </div>
        </div>
        </>
    )
}

const Marketing = () =>{
    
    const navigate = useNavigate();
    return(
        <> 
        <div className="side-box-1" onClick={() => navigate('/offers/TReports')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Offers</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/discount/TReports')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Discount Code</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/leadSource/TReports')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Lead Source</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/referral/TReports')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Referral</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/smsReport/TReports')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>SMS Report</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/loyalty/TReports')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Loyalty Points Usage</div>
            </div>
        </div>
        </>
    )
}

const HR = () =>{
    
    const navigate = useNavigate();
    return(
        <> 
        <div className="side-box-1" onClick={() => navigate('/staffBiometric/HR')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Staff Biometric</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/attendanceRegister/HR')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Attendance Register</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/manageStaff/HR')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Manage Staff</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/staffBirthday/HR')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Staff Birthday</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/followups')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Staff Substitution</div>
            </div>
        </div>
        </>
    )
}


const Finance = () =>{
    const navigate = useNavigate()
    return(
        <>
        <div className="side-box-1" onClick={() => navigate('/allInvoice/finance')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>All Invoice</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/paidInvoice/finance')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Paid Invoice</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/serviceReceipt/finance')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Service Receipt</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/CancelledInvoice/finance')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Cancelled Invoice</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/writtenOff/finance')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Written Off Invoices</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/refund/finance')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Refund Report</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/revenue/finance')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Revenue Realization</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/serviceReceipt/finance')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>{`Revenue Realization(Sale)`}</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/CancelledInvoice/finance')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>{`Revenue Realization(FY)`}</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/writtenOff/finance')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Revenue VS Utilization</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/postpaidRevenue/finance')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Postpaid Revenue Realisation</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/paidInvoice/finance')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Collection Report</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/serviceReceipt/finance')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Payment Mode</div>
            </div>
        </div>
        <div className="side-box-1" onClick={() => navigate('/CancelledInvoice/finance')}>
            <div className="d-flex justify-content-between align-items-center">
                <div>Subscription Balance Payment</div>
            </div>
        </div>
        </>
    )
}
export { DropDown,DropDown2, Engagement,Data, Promotion, ValidityBased, ServiceCategory, CustomGroups, Marketing, HR, Finance}