import React, { Component } from "react";


class UserForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      department: "CSE",
      memo_no:"",
      gender:"Male"
    };

    this.getMemoID = this.getMemoID.bind(this);
    this.handleDeptSelectionChange = this.handleDeptSelectionChange.bind(this);
    this.handleGenderSelectionChange = this.handleGenderSelectionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    window.location.href = "/printDocx.html";
  }
  componentDidMount(){
    this.getMemoID(this.state.department);
    if (localStorage.getItem("current_user") == null){
       window.location = '/';
     }
  }

  getMemoID=(dept)=>{
 
    var currentTime = new Date();
    var mn = "UITS/"+dept +"/"+ currentTime.getFullYear().toString().substr(-2)+"/"+
      currentTime.getMonth()+"/"+currentTime.getDay()+"/"+currentTime.getHours()+"/"+
      currentTime.getMinutes() +"/"+ currentTime.getSeconds();

      this.setState({ memo_no: mn ,
                      department:dept});
  }

  getGender=(gen)=>{
    this.setState({gender: gen});
  }

  handleDeptSelectionChange(event){
    this.getMemoID(event.target.value);
  }

  handleGenderSelectionChange(event){
    this.getGender(event.target.value);
  }
  
  render() {
    var isRequiredAll = false;
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
        <form action="/printDocx.html"  >
          <select name="dept" onChange={this.handleDeptSelectionChange} 
          style={{ margin: "20px", alignItems: "center" }}>
            <option value="CSE">
              Department of Computer Science and Technology (CSE)
            </option>
            <option value="IT">
              Department of Information Technology (IT)
            </option>
            <option value="EEE">Department of Electrical and Electronics Engineering (EEE)</option>
            <option value="PHA">Department of Pharmacy (PHA)</option>
            <option value="CIVIL">Department of Civil Engineering (CE)</option>
            <option value="BBA">Department of Business Administration (BBA)</option>
            <option value="MBA">Masters of Business Administration (MBA)</option>
            <option value="LAW">Department of Law</option>
          </select>

          <br />
          <select name="gender" onChange={this.handleGenderSelectionChange}
            style={{ margin: "20px", alignItems: "center" }}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />
          <input
            type="text"
            name="id"
            required={isRequiredAll}
            placeholder="Student ID:"
            style={{ margin: "20px" }
          }
          />
          <br />
          <input
            required={isRequiredAll}
            type="text"
            name="name"
            placeholder="Student name:"
            style={{ margin: "20px" }}
          />
          <br />
          <input
            required={isRequiredAll}
            style={{ margin: "20px" }}
            type="text"
            name="fName"
            placeholder="Student father name:"
          />
          <br />
          <input
            required={isRequiredAll}
            style={{ margin: "20px" }}
            type="text"
            name="mName"
            placeholder="Student mother name:"
          />
          <br />
          <input
            required={isRequiredAll}
            style={{ margin: "20px" }}
            type="text"
            name="from_sem"
            placeholder="From semester:"
          />
          <br />
          <input
            required={isRequiredAll}
            style={{ margin: "20px" }}
            type="text"
            name="to_sem"
            placeholder="To semester:"
          />
          <p style={{ marginLeft: "20px", fontWeight: "bold" }}>
            Date of pass:
          </p>
          <input
            required={isRequiredAll}
            style={{ marginLeft: "20px" }}
            type="date"
            dateformat="d M y"
            name="date_of_pass"
            placeholder="Date of pass:"
          />
          <br />
          <input
            required={isRequiredAll}
            style={{ margin: "20px", style: "bold" }}
            type="number"
            name="cgpa"
            step="0.01"
            placeholder="CGPA:"
          />
          <br />
        
          <input
            type="hidden"
            name="memo_no"
            value={this.state.memo_no}
          />
          <input
            type="hidden"
            name="type"
            value={this.props.match.params.type}
          />
          <input
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
