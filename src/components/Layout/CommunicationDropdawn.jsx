import { useNavigate } from 'react-router-dom'
import { IoCallSharp } from 'react-icons/io5'
import { FaUserSlash, FaBirthdayCake } from 'react-icons/fa'
import { AiOutlineUserSwitch } from 'react-icons/ai'
import { GiOrganigram } from 'react-icons/gi'
import { SiHandshake } from 'react-icons/si'
import { MdOutlineDashboardCustomize, MdAutorenew, MdOutlineUpgrade } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { BsFillCaretDownFill, BsFillCaretUpFill, BsFillCreditCard2FrontFill } from 'react-icons/bs'

const CommunicationDropdawn = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="side-box-1 " onClick={() => navigate("/email/marketing")}>
                <div className="d-flex justify-content-between align-items-center">
                    <div>Email</div>
                </div>
            </div>

            <div className="side-box-1 text-center" onClick={() => navigate('/sms/marketing')}>
                <div className="d-flex justify-content-between align-items-center">
                    <div>SMS</div>
                </div>
            </div>

            <div className="side-box-1" onClick={() => navigate('/pushnotification/marketing')}>
                <div className="d-flex justify-content-between align-items-center">
                    <div>Push Notification</div>
                </div>
            </div>
        </>
    )
}
export default CommunicationDropdawn 