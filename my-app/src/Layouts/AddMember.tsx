import React from "react";
import { NavBar } from "../NavBar";
import { IBaseProps, IAddMemberForm, IValidatedStatus } from "../BaseInterfaces/BaseInterface";
import "../assets/AddMember.css";
import {ValidatedAddForm} from "../events"


const list = [
  {
    _name: "Le Minh Huy",
    _gender: "Male",
    _email: "leminhhuy.hcmus@gmail.com",
    _phone: "0905083642",
    _username: "huyleminh",
    _password: "1",
    _role: "Admin"
  }, 
  {
    _name: "Bach Minh Khoi",
    _gender: "Male",
    _email: "bachkhoi@gmail.com",
    _phone: "0935062635",
    _username: "khoibach",
    _password: "1",
    _role: "User"
  }
]

localStorage.setItem("list", JSON.stringify(list))

class AddMember extends React.Component<IBaseProps, IAddMemberForm> {
  private validatedStatus: IValidatedStatus;
  private message: any;
  
  constructor(props: IBaseProps) {
    super(props);
    this.state = {
      _name: "",
      _gender: "Male",
      _email: "",
      _phone: "",
      _username: "",
      _password: "",
      _confirm: "",
      _role: "Admin",
    };

    this.validatedStatus = {
      isEmpty: true,
      _name : true,
      _email : false,
      _phone : false,
      _username: false,
      _password: false,
      _confirm: false
    }

    this.message = {
      _name: "Tên đã tồn tại hoặc không hợp lệ.",
      _email: "Email sai định dạng.",
      _phone: "Số điện thoại sai định dạng.",
      _username: "Tài khoản đã tồn tại hoặc không hợp lệ.",
      _password: "Mật khẩu sai định dạng.",
      _confirm: "Xác nhận mật khẩu không thành công." 
    }

    ValidatedAddForm.Init.baseOn("checkEmpty", () => {
      const member = this.state;
      for (const item in member) {
        if (member[item] === "") {
          this.validatedStatus.isEmpty = true;
          return;
        }
      }
      this.validatedStatus.isEmpty = false;
    })

    ValidatedAddForm.Init.baseOn("validateName", () => { 
      const lists = (localStorage.getItem("list"));
      const regex = /^(([A-Z]{1})+([a-z]{1,})+ )+([A-Z]{1})+([a-z]{1,})$/g;

      //Validate valid name format
      if (this.state._name?.match(regex)) {
        if (lists === null) {
          this.validatedStatus._name = true;
        }
        else {
          const members = JSON.parse(lists);

          for (const item of members) {
            if (item._name === this.state._name || this.state._name === "") {
              this.validatedStatus._name = false;
              return;
            }
          }
          this.validatedStatus._name = true;
        }
      }
      else {
        this.validatedStatus._name = false;
      }
    })

    ValidatedAddForm.Init.baseOn("validateEmail", () => {
      const regex = /^([A-Za-z\d!#$%&'*+-/=?^_`{|}~"])+@+([A-Za-z]+[A-Za-z-\.]+[A-Za-z])$/gm;

      if (this.state._email?.match(regex)) {
        this.validatedStatus._email = true;
      }
    })

    ValidatedAddForm.Init.baseOn("validatePhone", () => {
      const regex = /((086|096|097|098|032|033|034|035|036|037|038|039|088|091|094|083|094|085|081|082|089|090|093|070|076|077|078|079|092|056|058)+([0-9]{7})\b)/;
      const phone = this.state._phone;

      if (phone?.match(regex)) {
        this.validatedStatus._phone = true;
      }
    })

    ValidatedAddForm.Init.baseOn("validateUsername", () => {
      const lists = (localStorage.getItem("list"));

      if (lists === null) {
        this.validatedStatus._username = false;
      }
      else {
        const members = JSON.parse(lists);

        for (const item of members) {
          if (item._username === this.state._username || this.state._username === "") {
            this.validatedStatus._username = false;
            return;
          }
        }
        this.validatedStatus._username = true;
      }
    })

    ValidatedAddForm.Init.baseOn("validatePassword", () => {
      const password = this.state._password;
      const confirm = this.state._confirm;
      const regex = /^\S+$/;

      if (password?.match(regex)) {
        //Match form password 
        this.validatedStatus._password = true;
        
        //Match form password
        if (confirm?.match(regex)) {
          if (confirm === password) {
            this.validatedStatus._confirm = true;
          }
        }
      }
    })
  }

  handleChange = (event: any) => {
    const name: string = event.target.name;
    const value: IAddMemberForm = event.target.value;
    this.setState({
        [name]: value,
    });
  }

  onSubmitForm = (event: any) => {
    //Raise check empty
    ValidatedAddForm.Init.baseEmit("checkEmpty");
    if (this.validatedStatus.isEmpty === true) {
      alert("Vui lòng điền đầy đủ thông tin.")
      event.preventDefault();
      return;
    }

    //Raise check valid name
    ValidatedAddForm.Init.baseEmit("validateName");
    ValidatedAddForm.Init.baseEmit("validateEmail");
    ValidatedAddForm.Init.baseEmit("validatePhone");
    ValidatedAddForm.Init.baseEmit("validateUsername");
    ValidatedAddForm.Init.baseEmit("validatePassword");

    //Alert message
    for (const item in this.message) {
      if (this.validatedStatus[item] === false) {
        alert(this.message[item])
        event.preventDefault();
        return;
      }
    }

    const lists = localStorage.getItem("list");
    if (lists) {
      const members = JSON.parse(lists);
      const member = {
        _name: this.state._name,
        _gender: this.state._gender,
        _email: this.state._email,
        _phone: this.state._phone,
        _username: this.state._username,
        _password: this.state._password,
        _role: this.state._role
      }

      members.push(member)

      localStorage.setItem("list" ,JSON.stringify(members));
      alert("Thêm mới thành viên thành công.");
    }
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <NavBar />

        <form className="container" onSubmit={this.onSubmitForm}>
          <div className="add-container">
            <div className="add-item">
              <h1>Add new member</h1>
            </div>

            <div className="add-item">
              <div className="add-item-text">
                <label htmlFor="_name">Name:</label>
              </div>

              <div className="add-item-input">
                <input
                  type="text"
                  className="add-input"
                  placeholder="Name"
                  name="_name"
                  value={this.state._name}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="add-item">
              <div className="add-item-text">
                <label htmlFor="_gender">Gender:</label>
              </div>

              <div className="add-item-input">
                <select name="_gender" className="add-item-select" value={this.state._gender} onChange={this.handleChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
              </div>
            </div>

            <div className="add-item">
              <div className="add-item-text">
                <label htmlFor="">Email:</label>
              </div>

              <div className="add-item-input">
                <input 
                    type="text" 
                    className="add-input" 
                    placeholder="Email" 
                    name="_email"
                    value={this.state._email}
                    onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="add-item">
              <div className="add-item-text">
                <label htmlFor="">Phone:</label>
              </div>

              <div className="add-item-input">
                <input
                  type="text"
                  className="add-input"
                  placeholder="Phone number"
                  name="_phone"
                  value={this.state._phone}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="add-item">
              <div className="add-item-text">
                <label htmlFor="">Username:</label>
              </div>

              <div className="add-item-input">
                <input
                  type="text"
                  className="add-input"
                  placeholder="Username"
                  name="_username"
                  value={this.state._username}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="add-item">
              <div className="add-item-text">
                <label htmlFor="">Password:</label>
              </div>

              <div className="add-item-input">
                <input
                  type="password"
                  className="add-input"
                  placeholder="Password"
                  autoComplete="off"
                  name="_password"
                  value={this.state._password}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="add-item">
              <div className="add-item-text">
                <label htmlFor="">Confirm:</label>
              </div>

              <div className="add-item-input">
                <input
                  type="password"
                  className="add-input"
                  placeholder="Confirm password"
                  autoComplete="off"
                  name="_confirm"
                  value={this.state._confirm}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="add-item">
              <div className="add-item-text">
                <label htmlFor="">Role:</label>
              </div>

              <div className="add-item-input">
                <select name="_role" className="add-item-select" value={this.state._role} onChange={this.handleChange}>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                  <option value="Guest">Guest</option>
                </select>
              </div>
            </div>

            <div className="add-item">
              <button className="add-item-btn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddMember;
