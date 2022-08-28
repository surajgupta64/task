import "./Table.css";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";
import { MdOutlineAddBox } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";

const confirmDelete = () => {
  confirmAlert({
    title: "Confirm to submit",
    message: "Are you sure to do this.",
    buttons: [
      {
        label: "Yes",
        onClick: () => alert("Click Yes"),
      },
      {
        label: "No",
        onClick: () => alert("Click No"),
      },
    ],
  });
};

const Table = ({ data, column }) => {
  return (
    <table>
      <thead>
        <tr>
          {column.map((item, index) => (
            <TableHeadItem item={item} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow item={item} column={column} />
        ))}
      </tbody>
    </table>
  );
};

const TableHeadItem = ({ item }) => <th>{item.heading}</th>;
const TableRow = ({ item, column }) => (
  <tr>
    {column.map((columnItem, index) => {

        return(
            <td key={index}>{
                (columnItem.value!= undefined) && item[`${columnItem.value}`]  
            } {
              (columnItem.btn!= undefined) && <button>{columnItem.btn}</button>
            } {
              (columnItem.btn1!= undefined) && columnItem.btn1
            } {
              (columnItem.btn2!= undefined) && columnItem.btn2
            } {
              (columnItem.btn3!= undefined) && columnItem.btn3
            } {
              (columnItem.btn4!= undefined) && columnItem.btn4
            } {
              (columnItem.label!= undefined) && <a className="lebel" href="#">{item[`${columnItem.label}`] }</a>
            }</td>
        )


    })}
  </tr>
);

export default Table;
