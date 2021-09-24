import React, { Component } from "react";
import { connect } from "react-redux";
import { actionHuyGhe } from "./modules/action";
class Thongtindatghe extends Component {
  render() {
    return (
      <div>
        <div className="text-light mt-5" style={{ fontSize: "40px" }}>
          Danh sách ghế bạn chọn
        </div>
        <div className="d-flex align-items-end mt-5">
          <button className="gheDuocChon mr-2"></button>
          <div className="text-light" style={{ fontSize: "20px" }}>
            Ghế đã chọn
          </div>
        </div>

        <div className="d-flex align-items-end mt-1">
          <button className="gheDangChon mr-2"></button>
          <div className="text-light" style={{ fontSize: "20px" }}>
            Ghế đang chọn
          </div>
        </div>

        <div className="d-flex align-items-end mt-1">
          <button
            className="ghe mr-2"
            style={{ fontSize: "20px", marginLeft: "0%" }}
          ></button>
          <div className="text-light" style={{ fontSize: "20px" }}>
            Ghế chưa đặt
          </div>
        </div>
        <div style={{ overflow: "auto", height: "300px" }}>
          <table
            style={{ backgroundColor: "rgba(0, 0, 0, 0.747)" }}
            className="table mt-2 text-light"
            border="2px"
          >
            <thead>
              <tr>
                <th scope="col">Số ghế</th>
                <th scope="col">Giá</th>
                <th scope="col">Hủy</th>
              </tr>
            </thead>
            <tbody>
              {this.props.thongTinGhe.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{value.soGhe}</td>
                    <td className="text-warning">
                      {value.gia.toLocaleString()}
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          this.props.dispatch(actionHuyGhe(value.soGhe));
                        }}
                      >
                        Hủy
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td>Tổng tiền</td>
                <td>
                  {this.props.thongTinGhe
                    .reduce((total, value) => {
                      return (total += value.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    thongTinGhe: state.bookingReducer.bookingMovie,
  };
};

export default connect(mapStateToProp, null)(Thongtindatghe);
