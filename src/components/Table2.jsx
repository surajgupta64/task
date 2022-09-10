import { useState, useEffect } from "react";
import "./Table.css";

const SalesClosure = ({ data, title }) => {
  const [target, setTarget] = useState(0);
  const [newsales, setNewsales] = useState(0);
  const [renewals, setRenewals] = useState(0);
  const [balance, setBalance] = useState(0);
  const [collected, setCollected] = useState(0);
  const [achived, setAchived] = useState(0);

  useEffect(() => {
    data.map((value1) => {
      setTarget(target + Number(value1.Target));
      setNewsales(newsales + Number(value1.NewSales));
      setRenewals(renewals + Number(value1.Renewals));
      setBalance(balance + Number(value1.Balance));
      setCollected(collected + Number(value1.Collected));
      setAchived(achived + Number(value1.Achived));
      console.log(value1.target);
    });
  }, []);

  return (
    <table style={{ width: "100%", marginTop: "20px" }}>
      <thead>
        <tr>
          <th colSpan={9} style={{ padding: "0px" }}>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{
                fontSize: "21px",
                color: "#fff",
                padding: "5px",
                paddingLeft: "10px",
                paddingRight: "10px",
                backgroundColor: "#2AA31C",
              }}
            >
              <div className=" text-capitalize">{title}</div>
              <div style={{ fontSize: "18px" }}>
                Total {title}: {data.length}
              </div>
            </div>
          </th>
        </tr>
        <tr>
          <th>Sr No</th>
          <th>Counseller</th>
          <th>Target</th>
          <th>New Sales</th>
          <th>Renewals</th>
          <th>Balance Collection</th>
          <th>Collected</th>
          <th>Achived %</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, key) => {
          return (
            <tr key={key}>
              <td>{value.Srno}</td>
              <td>{value.Counseller}</td>
              <td>{value.Target}</td>
              <td>{value.NewSales}</td>
              <td>{value.Renewals}</td>
              <td>{value.Balance}</td>
              <td>{value.Collected}</td>
              <td>{value.Achived}%</td>
            </tr>
          );
        })}
        <tr>
          <td colSpan={2}>Total</td>
          <td>{target}</td>
          <td>{newsales}</td>
          <td>{renewals}</td>
          <td>{balance}</td>
          <td>{collected}</td>
          <td>{achived}%</td>
        </tr>
      </tbody>
    </table>
  );
};

const ClientClosure = ({ data, title }) => {
  const [target, setTarget] = useState(0);
  const [newsales, setNewsales] = useState(0);
  const [renewals, setRenewals] = useState(0);
  const [balance, setBalance] = useState(0);
  const [achived, setAchived] = useState(0);

  useEffect(() => {
    data.map((value1) => {
      setTarget(target + Number(value1.TargetClient));
      setNewsales(newsales + Number(value1.NewClient));
      setRenewals(renewals + Number(value1.RenewalsClient));
      setBalance(balance + Number(value1.Closure));
      setAchived(achived + Number(value1.Achived));
      console.log(value1.target);
    });
  }, []);

  return (
    <table style={{ width: "100%", marginTop: "20px" }}>
      <thead>
        <tr>
          <th colSpan={9} style={{ padding: "0px" }}>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{
                fontSize: "21px",
                color: "#fff",
                padding: "5px",
                paddingLeft: "10px",
                paddingRight: "10px",
                backgroundColor: "#2C73D4",
              }}
            >
              <div className=" text-capitalize">{title}</div>
              <div style={{ fontSize: "18px" }}>
                Total {title}: {data.length}
              </div>
            </div>
          </th>
        </tr>
        <tr>
          <th>Sr No</th>
          <th>Counseller</th>
          <th>Target</th>
          <th>New Client</th>
          <th>Renewals Client</th>
          <th>No Of Closure</th>
          <th>Achived %</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, key) => {
          return (
            <tr key={key}>
              <td>{value.Srno}</td>
              <td>{value.Counseller}</td>
              <td>{value.TargetClient}</td>
              <td>{value.NewClient}</td>
              <td>{value.RenewalsClient}</td>
              <td>{value.Closure}</td>
              <td>{value.Achived}%</td>
            </tr>
          );
        })}
        <tr>
          <td colSpan={2}>Total</td>
          <td>{target}</td>
          <td>{newsales}</td>
          <td>{renewals}</td>
          <td>{balance}</td>
          <td>{achived}%</td>
        </tr>
      </tbody>
    </table>
  );
};

const LeadTarget = ({ data, title }) => {
  const [target, setTarget] = useState(0);
  const [newsales, setNewsales] = useState(0);
  const [renewals, setRenewals] = useState(0);
  const [balance, setBalance] = useState(0);
  const [achived, setAchived] = useState(0);

  useEffect(() => {
    data.map((value1) => {
      setTarget(target + Number(value1.LeadAssin));
      setNewsales(newsales + Number(value1.SpotConversions));
      setRenewals(renewals + Number(value1.TotalLeads));
      setBalance(balance + Number(value1.TotalAmount));
      setAchived(achived + Number(value1.Achived));
      console.log(value1.target);
    });
  }, []);

  return (
    <table style={{ width: "100%", marginTop: "20px" }}>
      <thead>
        <tr>
          <th colSpan={9} style={{ padding: "0px" }}>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{
                fontSize: "21px",
                color: "#fff",
                padding: "5px",
                paddingLeft: "10px",
                paddingRight: "10px",
                backgroundColor: "#F7A618",
              }}
            >
              <div className=" text-capitalize">{title}</div>
              <div style={{ fontSize: "18px" }}>
                Total {title}: {data.length}
              </div>
            </div>
          </th>
        </tr>
        <tr>
          <th>Sr No</th>
          <th>Counseller</th>
          <th>Lead Assin</th>
          <th>Spot Conversions</th>
          <th>Total leads Conversion</th>
          <th>Total Amount</th>
          <th>Achived %</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, key) => {
          return (
            <tr key={key}>
              <td>{value.Srno}</td>
              <td>{value.Counseller}</td>
              <td>{value.LeadAssin}</td>
              <td>{value.SpotConversions}</td>
              <td>{value.TotalLeads}</td>
              <td>{value.TotalAmount}</td>
              <td>{value.Achived}%</td>
            </tr>
          );
        })}
        <tr>
          <td colSpan={2}>Total</td>
          <td>{target}</td>
          <td>{newsales}</td>
          <td>{renewals}</td>
          <td>{balance}</td>
          <td>{achived}%</td>
        </tr>
      </tbody>
    </table>
  );
};
const RenewalsTarget = ({ data, title }) => {
  const [target, setTarget] = useState(0);
  const [newsales, setNewsales] = useState(0);
  const [renewals, setRenewals] = useState(0);
  const [balance, setBalance] = useState(0);
  const [achived, setAchived] = useState(0);

  useEffect(() => {
    data.map((value1) => {
      setTarget(target + Number(value1.TargetPer));
      setNewsales(newsales + Number(value1.NoRenewals));
      setRenewals(renewals + Number(value1.Conversion));
      setBalance(balance + Number(value1.TotalAmount));
      setAchived(achived + Number(value1.Achived));
      console.log(value1.target);
    });
  }, [data]);

  return (
    <table style={{ width: "100%", marginTop: "20px" }}>
      <thead>
        <tr>
          <th colSpan={9} style={{ padding: "0px" }}>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{
                fontSize: "21px",
                color: "#fff",
                padding: "5px",
                paddingLeft: "10px",
                paddingRight: "10px",
                backgroundColor: "#C7F718",
              }}
            >
              <div className=" text-capitalize">{title}</div>
              <div style={{ fontSize: "18px" }}>
                Total {title}: {data.length}
              </div>
            </div>
          </th>
        </tr>
        <tr>
          <th>Sr No</th>
          <th>Counseller</th>
          <th>Target %</th>
          <th>No Of Renewals</th>
          <th>Conversion</th>
          <th>Total Amount</th>
          <th>Achived %</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, key) => {
          return (
            <tr key={key}>
              <td>{value.Srno}</td>
              <td>{value.Counseller}</td>
              <td>{value.TargetPer}%</td>
              <td>{value.NoRenewals}</td>
              <td>{value.Conversion}</td>
              <td>{value.TotalAmount}</td>
              <td>{value.Achived}%</td>
            </tr>
          );
        })}
        <tr>
          <td colSpan={2}>Total</td>
          <td>{target}%</td>
          <td>{newsales}</td>
          <td>{renewals}</td>
          <td>{balance}</td>
          <td>{achived}%</td>
        </tr>
      </tbody>
    </table>
  );
};

const RefranceLeadTarget = ({ data, title }) => {
  const [target, setTarget] = useState(0);
  const [newsales, setNewsales] = useState(0);
  const [renewals, setRenewals] = useState(0);
  const [balance, setBalance] = useState(0);
  const [achived, setAchived] = useState(0);

  useEffect(() => {
    data.map((value1) => {
      setTarget(target + Number(value1.NoRefranceTaget));
      setNewsales(newsales + Number(value1.LeadGenerated));
      setRenewals(renewals + Number(value1.ConvertMember));
      setBalance(balance + Number(value1.TotalAmount));
      setAchived(achived + Number(value1.Achived));
      console.log(value1.target);
    });
  }, [data]);

  return (
    <table style={{ width: "100%", marginTop: "20px" }}>
      <thead>
        <tr>
          <th colSpan={9} style={{ padding: "0px" }}>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{
                fontSize: "21px",
                color: "#fff",
                padding: "5px",
                paddingLeft: "10px",
                paddingRight: "10px",
                backgroundColor: "#F7188A",
              }}
            >
              <div className=" text-capitalize">{title}</div>
              <div style={{ fontSize: "18px" }}>
                Total {title}: {data.length}
              </div>
            </div>
          </th>
        </tr>
        <tr>
          <th>Sr No</th>
          <th>Counseller</th>
          <th>No Of Refrance Taget </th>
          <th>Lead Generated</th>
          <th>Convert To Member</th>
          <th>Total Amount</th>
          <th>Achived %</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, key) => {
          return (
            <tr key={key}>
              <td>{value.Srno}</td>
              <td>{value.Counseller}</td>
              <td>{value.NoRefranceTaget}</td>
              <td>{value.LeadGenerated}</td>
              <td>{value.ConvertMember}</td>
              <td>{value.TotalAmount}</td>
              <td>{value.Achived}%</td>
            </tr>
          );
        })}
        <tr>
          <td colSpan={2}>Total</td>
          <td>{target}</td>
          <td>{newsales}</td>
          <td>{renewals}</td>
          <td>{balance}</td>
          <td>{achived}%</td>
        </tr>
      </tbody>
    </table>
  );
};

const DailyCalls = ({ data, title }) => {
  const [target, setTarget] = useState(0);
  const [newsales, setNewsales] = useState(0);
  const [renewals, setRenewals] = useState(0);
  const [balance, setBalance] = useState(0);
  const [member, setMember] = useState(0);
  const [renewalsCall, setRenewalsCall] = useState(0);
  const [achived, setAchived] = useState(0);

  useEffect(() => {
    data.map((value1) => {
      setTarget(target + Number(value1.CallTarget));
      setNewsales(newsales + Number(value1.TotalCompleted));
      setRenewals(renewals + Number(value1.FollowupCall));
      setBalance(balance + Number(value1.ServicesCall));
      setMember(member + Number(value1.MemberCall));
      setRenewalsCall(renewalsCall + Number(value1.RenewalsCall));
      setAchived(achived + Number(value1.Achived));
      console.log(value1.target);
    });
  }, [data]);

  return (
    <table style={{ width: "100%", marginTop: "20px" }}>
      <thead>
        <tr>
          <th colSpan={9} style={{ padding: "0px" }}>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{
                fontSize: "21px",
                color: "#fff",
                padding: "5px",
                paddingLeft: "10px",
                paddingRight: "10px",
                backgroundColor: "#347A42",
              }}
            >
              <div className=" text-capitalize">{title}</div>
              <div style={{ fontSize: "18px" }}>
                Total {title}: {data.length}
              </div>
            </div>
          </th>
        </tr>
        <tr>
          <th>Sr No</th>
          <th>Counseller</th>
          <th>Call Target</th>
          <th>Total Completed</th>
          <th>Follow ups Call</th>
          <th>Services Call</th>
          <th>Member call</th>
          <th>Renewals Call</th>
          <th>Achived %</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, key) => {
          return (
            <tr key={key}>
              <td>{value.Srno}</td>
              <td>{value.Counseller}</td>
              <td>{value.CallTarget}</td>
              <td>{value.TotalCompleted}</td>
              <td>{value.FollowupCall}</td>
              <td>{value.ServicesCall}</td>
              <td>{value.MemberCall}</td>
              <td>{value.RenewalsCall}</td>
              <td>{value.Achived}%</td>
            </tr>
          );
        })}
        <tr>
          <td colSpan={2}>Total</td>
          <td>{target}</td>
          <td>{newsales}</td>
          <td>{renewals}</td>
          <td>{balance}</td>
          <td>{member}</td>
          <td>{renewalsCall}</td>
          <td>{achived}%</td>
        </tr>
      </tbody>
    </table>
  );
};

const MediaTarget = ({ data, title }) => {
  const [target, setTarget] = useState(0);
  const [newsales, setNewsales] = useState(0);
  const [renewals, setRenewals] = useState(0);
  const [balance, setBalance] = useState(0);
  const [achived, setAchived] = useState(0);

  useEffect(() => {
    data.map((value1) => {
      setTarget(target + Number(value1.GoogleReviews));
      setNewsales(newsales + Number(value1.FB));
      setRenewals(renewals + Number(value1.Instagram));
      setBalance(balance + Number(value1.FeedbackVideo));
      setAchived(achived + Number(value1.Achived));
      console.log(value1.target);
    });
  }, [data]);

  return (
    <table style={{ width: "100%", marginTop: "20px" }}>
      <thead>
        <tr>
          <th colSpan={9} style={{ padding: "0px" }}>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{
                fontSize: "21px",
                color: "#fff",
                padding: "5px",
                paddingLeft: "10px",
                paddingRight: "10px",
                backgroundColor: "#DE1818",
              }}
            >
              <div className=" text-capitalize">{title}</div>
              <div style={{ fontSize: "18px" }}>
                Total {title}: {data.length}
              </div>
            </div>
          </th>
        </tr>
        <tr>
          <th>Sr No</th>
          <th>Counseller</th>
          <th>Google Reviews</th>
          <th>Facebook</th>
          <th>Instagram</th>
          <th>Feedback Video</th>
          <th>Achived %</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, key) => {
          return (
            <tr key={key}>
              <td>{value.Srno}</td>
              <td>{value.Counseller}</td>
              <td>{value.GoogleReviews}</td>
              <td>{value.FB}</td>
              <td>{value.Instagram}</td>
              <td>{value.FeedbackVideo}</td>
              <td>{value.Achived}%</td>
            </tr>
          );
        })}
        <tr>
          <td colSpan={2}>Total</td>
          <td>{target}</td>
          <td>{newsales}</td>
          <td>{renewals}</td>
          <td>{balance}</td>
          <td>{achived}%</td>
        </tr>
      </tbody>
    </table>
  );
};

const RevenueTarget = ({ data, title }) => {
  const [target, setTarget] = useState(0);
  const [collected, setCollected] = useState(0);
  const [newsales, setNewsales] = useState(0);
  const [renewals, setRenewals] = useState(0);
  const [balance, setBalance] = useState(0);
  const [achived, setAchived] = useState(0);

  useEffect(() => {
    data.map((value1) => {
      setTarget(target + Number(value1.Target));
      setCollected(collected + Number(value1.Collected));
      setNewsales(newsales + Number(value1.NewSales));
      setRenewals(renewals + Number(value1.Renewals));
      setBalance(balance + Number(value1.Balance));
      setAchived(achived + Number(value1.Achived));
      console.log(value1.target);
    });
  }, [data]);

  return (
    <table style={{ width: "100%", marginTop: "20px" }}>
      <thead>
        <tr>
          <th colSpan={9} style={{ padding: "0px" }}>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{
                fontSize: "21px",
                color: "#fff",
                padding: "5px",
                paddingLeft: "10px",
                paddingRight: "10px",
                backgroundColor: "#2AA31C",
              }}
            >
              <div className=" text-capitalize">{title}</div>
              <div style={{ fontSize: "18px" }}>
                Total {title}: {data.length}
              </div>
            </div>
          </th>
        </tr>
        <tr>
          <th>Sr No</th>
          <th>Counseller</th>
          <th>Target</th>
          <th>Achieved/Collected</th>
          <th>New Sales</th>
          <th>Renewals</th>
          <th>Balance Collection</th>
          <th>View</th>
          <th>Achived %</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, key) => {
          return (
            <tr key={key}>
              <td>{value.Srno}</td>
              <td>{value.Counseller}</td>
              <td>{value.Target}</td>
              <td>{value.Collected}</td>
              <td>{value.NewSales}</td>
              <td>{value.Renewals}</td>
              <td>{value.Balance}</td>
              <td>
                <button className="btn btn_enquiry">View</button>
              </td>
              <td>{value.Achived}%</td>
            </tr>
          );
        })}
        <tr>
          <td colSpan={2}>Total</td>
          <td>{target}</td>
          <td>{collected}</td>
          <td>{newsales}</td>
          <td>{renewals}</td>
          <td>{balance}</td>
          <td>-</td>
          <td>{achived}%</td>
        </tr>
      </tbody>
    </table>
  );
};

export {
  SalesClosure,
  ClientClosure,
  LeadTarget,
  RenewalsTarget,
  RefranceLeadTarget,
  MediaTarget,
  DailyCalls,
  RevenueTarget,
};
