import React, { Component } from "react";
import { PizZip ,PizZipUtils} from "pizzip";
import fileSaver from "file-saver";
class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      department: "CSE"
    };
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          overflow: "hidden",
          justifyContent: "center",
          alignItems: "center",
          height: "Auto"
        }}
      >
        <form action='/printDocx.html'>
          <select style={{ margin: "20px", alignItems: "center" }}>
            <option value="CSE">
              Department of Computer Science and Technology (CSE)
            </option>
            <option value="IT">
              Department of Information Technology (IT)
            </option>
            <option value="EEE">EEE</option>
            <option value="PHA">PHA</option>
            <option value="CIVIL">CIVIL</option>
            <option value="BBA">BBA</option>
            <option value="MBA">MBA</option>
            <option value="LAW">LAW</option>
          </select>

          <br />
          <input
            type="text"
            name="id"
            placeholder="Student ID:"
            style={{ margin: "20px" }}
          />
          <br />
          <input
            type="text"
            name="name"
            placeholder="Student name:"
            style={{ margin: "20px" }}
          />
          <br />
          <input
            style={{ margin: "20px" }}
            type="text"
            name="fName"
            placeholder="Student father name:"
          />
          <br />
          <input
            style={{ margin: "20px" }}
            type="text"
            name="mName"
            placeholder="Student mother name:"
          />
          <br />
          <input
            style={{ margin: "20px" }}
            type="text"
            name="fromSemester"
            placeholder="From semester:"
          />
          <br />
          <input
            style={{ margin: "20px" }}
            type="text"
            name="toSemester"
            placeholder="To semester:"
          />
          <p style={{ marginLeft: "20px", fontWeight: "bold" }}>
            Date of pass:
          </p>
          <input
            style={{ marginLeft: "20px" }}
            type="date"
            name="passDate"
            placeholder="Date of pass:"
          />
          <br />
          <input
            style={{ margin: "20px", style: "bold" }}
            type="text"
            name="cgpa"
            placeholder="CGPA:"
          />
          <br />

          <input
            onClick={this.onSubmit}
            style={{ margin: "20px" }}
            type="submit"
            value="Print"
          />
        </form>
      </div>
    );
  }
}

export default UserForm;
