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
            <div className="side-box-1 " onClick={() => navigate('/remindercall/renewalcall')}>
                <div className="d-flex justify-content-between align-items-center">
                    <div style={{ fontSize: "15px" }}><MdAutorenew /></div>
                    <div>RENEWAL</div>
                    <div style={{ fontSize: "15px" }}><IoCallSharp /></div>
                </div>
            </div>

            <div className="side-box-1 text-center" onClick={() => navigate('/remindercall/paymentcall')}>
                <div className="d-flex justify-content-between align-items-center">
                    <div style={{ fontSize: "15px" }}><BsFillCreditCard2FrontFill /></div>
                    <div>PAYMENT</div>
                    <div style={{ fontSize: "15px" }}><IoCallSharp /></div>
                </div>
            </div>

            <div className="side-box-1 text-center" onClick={() => navigate('/remindercall/upgradecall')}>
                <div className="d-flex justify-content-between align-items-center">
                    <div style={{ fontSize: "15px" }}><MdOutlineUpgrade /></div>
                    <div>UPGRADE</div>
                    <div style={{ fontSize: "15px" }}><IoCallSharp /></div>
                </div></div>


            <div className="side-box-1 text-center" onClick={() => navigate('/remindercall/inboundcall')}>
                <div className="d-flex justify-content-between align-items-center">
                    <div style={{ fontSize: "15px" }}><AiOutlineUserSwitch /></div>
                    <div>COURTESY </div>
                    <div style={{ fontSize: "15px" }}><IoCallSharp /></div>
                </div>

            </div>

            <div className="side-box-1 text-center" onClick={() => navigate('/remindercall/welcomecall')}>
                <div className="d-flex justify-content-between align-items-center">
                    <div style={{ fontSize: "15px" }}><GiOrganigram /></div>
                    <div>INBOUND</div>
                    <div style={{ fontSize: "15px" }}><IoCallSharp /></div>
                </div>
            </div>

            <div className="side-box-1 text-center" onClick={() => navigate('/remindercall/irregularcall')}>
                <div className="d-flex justify-content-between align-items-center">
                    <div style={{ fontSize: "15px" }}><FaUserSlash /></div>
                    <div>IRREGULAR</div>
                    <div style={{ fontSize: "15px" }}><IoCallSharp /></div>
                </div>
            </div>

            <div className="side-box-1 text-center" onClick={() => navigate('/remindercall/welcomecall')}>
                <div className="d-flex justify-content-between align-items-center">
                    <div style={{ fontSize: "15px" }}><SiHandshake /></div>
                    <div>WELCOME</div>
                    <div style={{ fontSize: "15px" }}><IoCallSharp /></div>
                </div>
            </div>
            <div className="side-box-1 text-center" onClick={() => navigate('/remindercall/birthday&annversarycall')}>
                <div className="d-flex justify-content-between align-items-center">
                    <div style={{ fontSize: "15px" }}><FaBirthdayCake /></div>
                    <div>CELEBRATIONS </div>
                    <div style={{ fontSize: "15px" }}><IoCallSharp /></div>
                </div>
            </div>
        </>
    )
}
export { DropDown }