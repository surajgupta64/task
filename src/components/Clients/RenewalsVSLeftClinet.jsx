import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import Tabs from "../Tabs";
import MemberShipRenewed from "./MemberShipRenewed";
import PTRenewedVSLeftClient from "./PTRenewedVSLeftClient";

const RenewalsVSLeftClinet = () => {
  const data = [
    {
      title: "Membership Renewed vs Left Clinet",
      compo: <MemberShipRenewed />,
    },
    { title: "PT Renewed vs Left Clinet", compo: <PTRenewedVSLeftClient /> },
  ];

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div className="text-center" style={{ fontSize: "23px" }}>
            Renewals VS Left Client
          </div>
          <div className="mt-3">
            <Tabs data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RenewalsVSLeftClinet;
