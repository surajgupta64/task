import "./Tabs.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useState } from "react";

const Tabs = ({ data }) => {
  const [tabs, setTabs] = useState(0);

  return (
    <>
      <div
        class="tab d-flex align-items-center text-center justify-content-between mt-3"
        style={{ borderRadius: "5px" }}
      >
        {data.map((item, index) => {
          return (
            <button
              className={tabs === index ? "selected" : "tabBtn"}
              onClick={() => setTabs(index)}
              style={{ paddingLeft: "5px", paddingRight: "5px " }}
            >
              {item.title}
            </button>
          );
        })}
      </div>

      {data.map((item, index) => {
        return <div className={tabs === index ? "" : "hide"}>{item.compo}</div>;
      })}
    </>
  );
};

export default Tabs;
