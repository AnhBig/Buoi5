import React, { Component } from "react";
import { connect } from "react-redux";

class UserManage extends Component {
  //render List mà mk lấy về từ store
  renderContent = () => {
    return this.props.userList.map((element, idx) => {
       return (
        <tr key={element.maSV}>
      <td>{element.maSV}</td>
      <td>{element.HoTen}</td>
      <td>{element.SoĐT}</td>
      <td>{element.Email}</td>
    </tr>
       );
    });
  };

  render() {
    return (
      <div className="card p-0 mt-3">
        {/* <div className="card-header font-weight-bold">USER MANAGEMENT</div> */}
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

          {/* <div className="col-3 ml-auto">
              <div className="form-group mb-0">
                <select className="form-control">
                  <option>All</option>
                  <option>Client</option>
                  <option>Admin</option>
                </select>
              </div>
            </div> */}
        </div>

        <div className="card-body">
          <table className="table">
            <thead>
              <tr className="bg-dark text-white font-weight-bold">
                <th>Mã Sinh Viên</th>
                <th>Họ Tên</th>
                <th>Số Điện Thoại</th>
                <th>Email</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
                {this.renderContent()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

//muốn lấy dl từ store về
const MapStateToProps = (state) => {
  return {
    userList: state.userReducer.userList,
  };
};

export default connect(MapStateToProps)(UserManage);
