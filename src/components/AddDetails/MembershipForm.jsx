import React from "react";
import Navbar from "../Layout/Navbar";
import Tabs from "../Tabs";
import FitnessProfile from "./FitnessProfile";
import PersonalInformation from "./PersonalInformation";
import ProfessionalInformation from "./ProfessionalInformation";

const MembershipForm = () => {
  const data = [
    {
      title: "Personal Information",
      compo: <PersonalInformation />,
    },
    {
      title: "Professional Information",
      compo: <ProfessionalInformation />,
    },
    { title: "Fitness Profile", compo: <FitnessProfile /> },
  ];

  return (
    <>
      <Navbar />
      <div className="page_reducer_1">
        <div className="dbox-10">
          <div
            className="text-center"
            style={{ fontWeight: "bold", fontSize: "23px" }}
          >
            Membership Form
          </div>
          <div className="mt-3">
            <Tabs data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MembershipForm;
