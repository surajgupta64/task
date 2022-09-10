import React from "react";
import Navbar from "../Layout/Navbar";
import "react-calendar/dist/Calendar.css";
import Table from "../Table";

const BiometricStaff = () => {
  const Users = [
    {
      id: 1,
      staff_name: "Deepika Shah",
      attendance_id: "S25317",
      rf_id: "Prabha.y1116@gmail.com",
      fingerprint: "F",
      active: "ON",
      admin_rights: "Super Admin",
    },
    {
      id: 2,
      staff_name: "Deepika Shah",
      attendance_id: "S25317",
      rf_id: "Prabha.y1116@gmail.com",
      fingerprint: "F",
      active: "ON",
      admin_rights: "Super Admin",
    },
  ];

  const column = [
    { heading: "S.No", value: "id" },
    { heading: "Staff Name", value: "staff_name" },
    { heading: "Attendance ID", value: "attendance_id" },
    { heading: "RF ID", value: "rf_id" },
    { heading: "Fingerprint", value: "fingerprint" },
    { heading: "Active", value: "active" },
    { heading: "Biometric", value: "", btn: "Resync" },
    { heading: "Admin Rights", value: "admin_rights" },
    { heading: "Fingerprint Option", value: "", btn: "Delete" },
  ];

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div>
            <div className="text-center" style={{ fontSize: "23px" }}>
              Staff Biometric
            </div>

            <Table data={Users} column={column} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BiometricStaff;
