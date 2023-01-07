import React, { Component } from "react";
import RegisterForm from "./RegisterForm";
import UserManage from "./UserManage";

export default class QuanLySinhVien extends Component {
  render() {
    return (
        <div className="w-75 mx-auto mt-5">
            < RegisterForm />
        {/* <div className="card p-0">
          <div className="card-header bg-dark text-white font-weight-bold">
            Thông tin sinh viên
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label>Mã Sinh Viên</label>
                    <input type="text" className="form-control" />
                    <span className="text-danger"></span>
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group">
                    <label>Họ Tên</label>
                    <input type="text" className="form-control" />
                    <span className="text-danger"></span>
                  </div>
                </div>
                
                <div className="col-6">
                  <div className="form-group">
                    <label>Số Điện Thoại</label>
                    <input type="text" className="form-control" />
                    <span className="text-danger"></span>
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" />
                    <span className="text-danger"></span>
                  </div>
                </div>
                
              </div>
            </form>
          </div>

          <div className="m-3 text-muted">
            <button className="btn btn-success mr-2">Thêm Sinh Viên</button>
            
          </div>
        </div> */}

        < UserManage />
        {/* <div className="card p-0 mt-3">
        
          <div className="row mt-4 px-3 ">
            <div className="col-4">
              <div className="form-group mb-0">
                <input
                  type="text"
                  placeholder="Search by full name..."
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="card-body">
            <table className="table">
              <thead>
                <tr className="bg-dark text-white font-weight-bold">
                  <th>Mã Sinh Viên</th>
                  <th>Họ Tên</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr >
                  <td>1</td>
                  <td>Nguyễn Văn A</td>
                  <td>nguyenvanA@gmail.com</td>
                  <td>085512123123.</td>
                  
                </tr>

                <tr>
                  <td>2</td>
                  <td>Nguyễn Văn B</td>
                  <td>085512456456</td>
                  <td>khai.tran@gmail.com</td>

                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
      </div>
    )
  }
}
