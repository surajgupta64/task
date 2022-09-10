import { useNavigate } from "react-router-dom";
import { IoCallSharp } from "react-icons/io5";
import { FaUserSlash, FaBirthdayCake } from "react-icons/fa";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { GiOrganigram } from "react-icons/gi";
import { SiHandshake } from "react-icons/si";
import { MdOutlineUpgrade, MdFeedback } from "react-icons/md";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { FiRefreshCcw } from "react-icons/fi";
const DropDown = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="side-box-1"
        onClick={() => navigate("/followups/welcomecall")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div style={{ fontSize: "15px" }}>
            <SiHandshake />
          </div>
          <div>WELCOME</div>
          <div style={{ fontSize: "15px" }}>
            <IoCallSharp />
          </div>
        </div>
      </div>

      <div
        className="side-box-1"
        onClick={() => navigate("/followups/paymentcall")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div style={{ fontSize: "15px" }}>
            <BsFillCreditCard2FrontFill />
          </div>
          <div>PAYMENT</div>
          <div style={{ fontSize: "15px" }}>
            <IoCallSharp />
          </div>
        </div>
      </div>

      <div
        className="side-box-1"
        onClick={() => navigate("/followups/upgradecall")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div style={{ fontSize: "15px" }}>
            <MdOutlineUpgrade />
          </div>
          <div>UPGRADE</div>
          <div style={{ fontSize: "15px" }}>
            <IoCallSharp />
          </div>
        </div>
      </div>

      <div
        className="side-box-1 "
        onClick={() => navigate("/followups/renewalcall")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div style={{ fontSize: "15px" }}>
            <FiRefreshCcw />
          </div>
          <div>RENEWAL</div>
          <div style={{ fontSize: "15px" }}>
            <IoCallSharp />
          </div>
        </div>
      </div>

      <div
        className="side-box-1 "
        onClick={() => navigate("/followups/cross_sell")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div style={{ fontSize: "15px" }}>
            <ImCross />
          </div>
          <div>Cross Sell Call</div>
          <div style={{ fontSize: "15px" }}>
            <IoCallSharp />
          </div>
        </div>
      </div>

      <div
        className="side-box-1 "
        onClick={() => navigate("/followups/feedback")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div style={{ fontSize: "15px" }}>
            <MdFeedback />
          </div>
          <div>Feedback Call</div>
          <div style={{ fontSize: "15px" }}>
            <IoCallSharp />
          </div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/followups/courtesy")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div style={{ fontSize: "15px" }}>
            <AiOutlineUserSwitch />
          </div>
          <div>COURTESY </div>
          <div style={{ fontSize: "15px" }}>
            <IoCallSharp />
          </div>
        </div>
      </div>

      <div
        className="side-box-1"
        onClick={() => navigate("/followups/inboundcall")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div style={{ fontSize: "15px" }}>
            <GiOrganigram />
          </div>
          <div>INBOUND</div>
          <div style={{ fontSize: "15px" }}>
            <IoCallSharp />
          </div>
        </div>
      </div>

      <div
        className="side-box-1"
        onClick={() => navigate("/followups/irregularcall")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div style={{ fontSize: "15px" }}>
            <FaUserSlash />
          </div>
          <div>IRREGULAR</div>
          <div style={{ fontSize: "15px" }}>
            <IoCallSharp />
          </div>
        </div>
      </div>

      <div
        className="side-box-1"
        onClick={() => navigate("/followups/birthday&annversarycall")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div style={{ fontSize: "15px" }}>
            <FaBirthdayCake />
          </div>
          <div>CELEBRATIONS </div>
          <div style={{ fontSize: "15px" }}>
            <IoCallSharp />
          </div>
        </div>
      </div>
    </>
  );
};
const DropDown2 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="side-box-1 "
        onClick={() => navigate("/empDashboard/empPerfomance")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Sales Target</div>
        </div>
      </div>

      <div
        className="side-box-1"
        onClick={() => navigate("/empDashboard/ptPerformance")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>PT Target</div>
        </div>
      </div>

      <div
        className="side-box-1"
        onClick={() => navigate("/empDashboard/corPerformance")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Corporate Target</div>
        </div>
      </div>

      <div className="side-box-1" onClick={() => navigate("/enquiryForm/form")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Enquiry Form</div>
        </div>
      </div>

      <div
        className="side-box-1"
        onClick={() => navigate("/membershipForm/form")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Membership Form</div>
        </div>
      </div>
    </>
  );
};

const Engagement = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="side-box-1" onClick={() => navigate("/offer/marketing")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Offer</div>
        </div>
      </div>
    </>
  );
};

const Data = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="side-box-1"
        onClick={() => navigate("/unqualified/marketing")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Unqualify Data</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/followups")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Custom Mailing</div>
        </div>
      </div>
    </>
  );
};

const Promotion = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="side-box-1" onClick={() => navigate("/followups")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Customer Review</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/followups")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Profile</div>
        </div>
      </div>
    </>
  );
};

const ValidityBased = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="side-box-1" onClick={() => navigate("/all/clients")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>All Clients</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/active/clients")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Active Clients</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/inactive/clients")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>In-Active Clients</div>
        </div>
      </div>
    </>
  );
};

const ServiceCategory = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="side-box-1" onClick={() => navigate("/personal/clients")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>PT Training</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/group/clients")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Group Training</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/teacher/clients")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Teacher Training Cilent</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/diet/clients")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Diet Counselling Cilent</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/allBatch/clients")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>All Batch</div>
        </div>
      </div>
    </>
  );
};

const DataFromApp = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="side-box-1" onClick={() => navigate("/personal/clients")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Extra Facility's</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/customer_review/marketing")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Customer Reviews</div>
        </div>
      </div>
    </>
  );
};

const ClientServicesReport = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="side-box-1"
        onClick={() => navigate("/referrers/clients")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Referrers</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/irregularMember/clients")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Irregular Member</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/gender/clients")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Gender</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/renewalsVSLeftClinet/clients")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Renewals VS Left Clinet</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/upgradeReport/clients")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Upgrade Report</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/checkInOut/clients")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Cilent Check In / Out</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/freezeDateChange/clients")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Freeze & Date Change</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/serviceTransferReport/clients")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Services Transfer Report</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/batchReport/clients")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Batch Report</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/birthdayAnniversaryReport/clients")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Birthday & Anniversary Report</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/attendanceRegister/clients")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Attendance Register</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/attendanceDetails/clients")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Attendance Deatils </div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/membershipRetention/clients")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Membership Retention</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/cancellationReport/clients")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Cancellation Report</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/transferReport/clients")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Transfer Report</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/supportReport/clients")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Support Report</div>
        </div>
      </div>
    </>
  );
};

const ClientDataReport = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="side-box-1"
        onClick={() => navigate("/newClient/clients")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>New Cilent</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/renewedClient/clients")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Renewed Cilent</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/membership/clients")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Membership</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/batch/clients")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Membership Expriry</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/pt/clients")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>PT Expiry</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/batch/clients")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Cilent Summary</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/batch/clients")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>One Time Purchase Client</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/batch/clients")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Member Package Histrory </div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/batch/clients")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Data Hygiene Report</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/batch/clients")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Cilent Bday / Anniversary Report</div>
        </div>
      </div>
    </>
  );
};

const Marketing = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="side-box-1" onClick={() => navigate("/offers/TReports")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Offers</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/discount/TReports")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Discount Code</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/leadSource/TReports")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Lead Source</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/referral/TReports")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Referral</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/smsReport/TReports")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>SMS Report</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/loyalty/TReports")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Loyalty Points Usage</div>
        </div>
      </div>
    </>
  );
};

const HR = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="side-box-1"
        onClick={() => navigate("/staffBiometric/HR")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>EMP Check Ins</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/staffBiometric/HR")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Attendance Report</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/staffBiometric/HR")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Class Register</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/staffBiometric/HR")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Trainner Deatils</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/staffBiometric/HR")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Trainner Attendance Register</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/staffBiometric/HR")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Trial Report (PT / Group)</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/staffBiometric/HR")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Staff Biometric</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/attendanceRegister/HR")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Attendance Register</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/manageStaff/HR")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Manage Staff</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/staffBirthday/HR")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Staff Birthday</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/followups")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Staff Substitution</div>
        </div>
      </div>
    </>
  );
};

const Finance = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="side-box-1"
        onClick={() => navigate("/allInvoice/finance")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>All Invoice</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/paidInvoice/finance")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Paid Invoice</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/serviceReceipt/finance")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Service Receipt</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/CancelledInvoice/finance")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Cancelled Invoice</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/writtenOff/finance")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Written Off Invoices</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/refund/finance")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Refund Report</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/revenue/finance")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Revenue Realization</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/serviceReceipt/finance")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>{`Revenue Realization(Sale)`}</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/CancelledInvoice/finance")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>{`Revenue Realization(FY)`}</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/writtenOff/finance")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Revenue VS Utilization</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/postpaidRevenue/finance")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Postpaid Revenue Realisation</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/paidInvoice/finance")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Collection Report</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/serviceReceipt/finance")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Payment Mode</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/CancelledInvoice/finance")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Subscription Balance Payment</div>
        </div>
      </div>
    </>
  );
};

const GeneralMaster = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="side-box-1"
        onClick={() => navigate("/staffBiometric/HR")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Getting Started</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/attendanceRegister/HR")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Profile</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/manageStaff/HR")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Manage Services</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/staffBirthday/HR")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Manage Packages</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/followups")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Form Customization</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/followups")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Bill Template</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/followups")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Define Tax</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/followups")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Checkin Notification</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/followups")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Club Agreement</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/followups")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Task Setup</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/followups")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Trial</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/followups")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Service Resource</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/followups")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>ID Card Print</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/followups")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Help</div>
        </div>
      </div>
    </>
  );
};
const MarketingMaster = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="side-box-1"
        onClick={() => navigate("/staffBiometric/HR")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Template Master</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/attendanceRegister/HR")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Lead Sources</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/manageStaff/HR")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Guest Pass</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/staffBirthday/HR")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Gallery </div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/followups")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Automated Communication To staff</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/followups")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Automated Communication To Member</div>
        </div>
      </div>
    </>
  );
};
const ClientManagementMaster = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="side-box-1"
        onClick={() => navigate("/staffBiometric/HR")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Upgarde,Cross Sell & Transfer</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/attendanceRegister/HR")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Appoitment Type</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/manageStaff/HR")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Support Request Type</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/staffBirthday/HR")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Bulk Extension</div>
        </div>
      </div>
    </>
  );
};
const TraningMaster = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="side-box-1"
        onClick={() => navigate("/staffBiometric/HR")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Fitness Log Fields</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/attendanceRegister/HR")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Fitness Goal Type</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/manageStaff/HR")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Workout Template Type</div>
        </div>
      </div>
    </>
  );
};
const StaffManagementMaster = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="side-box-1"
        onClick={() => navigate("/staffBiometric/HR")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Staff Designation</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/attendanceRegister/HR")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Attendance Setup</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/manageStaff/HR")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>Staff Payroll Setup</div>
        </div>
      </div>
    </>
  );
};

const InventoryMaster = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="side-box-1"
        onClick={() => navigate("/staffBiometric/HR")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>All Product List</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/attendanceRegister/HR")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Product Setting</div>
        </div>
      </div>
    </>
  );
};

const ExpenseMaster = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="side-box-1"
        onClick={() => navigate("/staffBiometric/HR")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Expense Template</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/attendanceRegister/HR")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Budget</div>
        </div>
      </div>
    </>
  );
};

const IntergartionsMaster = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="side-box-1"
        onClick={() => navigate("/staffBiometric/HR")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Mailchimp Configuration</div>
        </div>
      </div>
      <div
        className="side-box-1"
        onClick={() => navigate("/attendanceRegister/HR")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>Plug - Ins</div>
        </div>
      </div>
      <div className="side-box-1" onClick={() => navigate("/allright/master")}>
        <div className="d-flex justify-content-between align-items-center">
          <div>All Right</div>
        </div>
      </div>
    </>
  );
};

export {
  DropDown,
  DropDown2,
  Engagement,
  Data,
  Promotion,
  ValidityBased,
  ServiceCategory,
  ClientServicesReport,
  ClientDataReport,
  Marketing,
  DataFromApp,
  HR,
  Finance,
  GeneralMaster,
  MarketingMaster,
  ClientManagementMaster,
  TraningMaster,
  StaffManagementMaster,
  InventoryMaster,
  ExpenseMaster,
  IntergartionsMaster,
};
