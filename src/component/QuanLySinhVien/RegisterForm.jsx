import React, { Component } from "react";
import { connect } from "react-redux";

 class RegisterForm extends Component {
  //ref
  constructor(props) {
    super(props);

    this.formRef = React.createRef();
  }

//lấy đc event rồi h sẽ lưu trong gtri STATE
    state = {
      values : {
        maSV: "",
        HoTen: "",
        SoĐT:"",
        Email: "",
      },

      errors : {
        maSV: "",
        HoTen: "",
        SoĐT:"",
        Email: "",
      },

    };
//onChange
  handleChange = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);

  // tách 
   const {name, value} = event.target
// set lại khi nhập vô input
  this.setState ({
    values : {
      ...this.state.values,
      [name]: value,
    },
    
  });
  };

// onSubmit
handleSubmit = (event) => {
  // console.log(event)

  // tránh LOAD lại
  event.preventDefault();

  //chặn ko cho THÊM nếu có lỗi
  const isValid = event.target.checkValidity();

  if(!isValid) {
    return;
  };

  // console.log(isValid);

  // sau khi submit thì sẽ dipatch lên màn hình==> thêm vô cái ms màn hình ==> gửi lên STORE
  this.props.dispatch ({
    type: "ADD_USER",
    payload: this.state.values,// payload ở đây là gtri lưu trữ ooqr STATE
  });
};

//onBlur
handleBlur = (event) => {
  let message = "";
  const {validationMessage, name, validity, title, minLength, maxLength,} = event.target;

  const {valueMissing, tooLong, tooShort,  patternMismatch} = validity

  console.log(patternMismatch);

  if (patternMismatch) {
    message = `${title} không đúng định dạng`
  };

  if(valueMissing) {
    message = `${title} không để rỗng`
  };

  if( tooLong || tooShort) {
    message = `${title} phải từ ${minLength}-${maxLength} kí tự`
  }
  // console.log(event);
  // console.log(validationMessage);

  this.setState ({
    errors: {
      ...this.state.errors,
      [name] : message,
    },
  });
};



  render() {
    return (
        <div className="card p-0">
        <div className="card-header bg-dark text-white font-weight-bold">
          Thông tin sinh viên
        </div>
        <div className="card-body">
          <form ref={this.formRef} noValidate onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>Mã Sinh Viên</label>
                  <input 
                  title="Mã sinh viên"
                  required
                  name="maSV"
                  type="text" 
                  className="form-control" 
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}/>
                  <span className="text-danger">
                  {this.state.errors.maSV}
                  </span>
                </div>
              </div>

              <div className="col-6">
                <div className="form-group">
                  <label>Họ Tên</label>
                  <input 
                  title="Họ tên"
                  required
                  minLength={5}
                  maxLength={10}
                  name="HoTen"
                  type="text" 
                  className="form-control" 
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}/>
                  <span className="text-danger">
                    {this.state.errors.HoTen}
                  </span>
                </div>
              </div>
              
              <div className="col-6">
                <div className="form-group">
                  <label>Số Điện Thoại</label>
                  <input 
                  title="Số điện thoại"
                  required
                  name="SoĐT"
                  type="text" 
                  className="form-control" 
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}/>
                  <span className="text-danger">
                  {this.state.errors.SoĐT}
                  </span>
                </div>
              </div>

              <div className="col-6">
                <div className="form-group">
                  <label>Email</label>
                  <input 
                  title="email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  name="Email"
                  type="text" 
                  className="form-control" 
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}/>
                  <span className="text-danger">
                  {this.state.errors.Email}
                  </span>
                </div>
              </div>
            </div>

            <div className="m-3 text-muted">
          <button disabled={!this.formRef.current?.checkValidity()} className="btn btn-success mr-2">Thêm Sinh Viên</button>
        </div>

          </form>
        </div>

       
      </div>
    )
  }
}

// gửi lên store để thêm mới
export default connect()(RegisterForm)