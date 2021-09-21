import React, { Component } from "react";
import data from "./../../Data/danhSachGhe.json";
import Ghe from "./ghe";
export default class Hangghe extends Component {
  renderHangGhe = () => {
    return data.map((ghe, index) => {
      return <Ghe key={index} ghe={ghe} soHangGhe={index} />;
    });
  };
  render() {
    return (
      <div>
        <div
          className=" mt-2 text-warning text-center"
          style={{ fontSize: "40px" }}
        >
          ĐẶT VÉ XEM PHIM
        </div>
        <div
          className="text-light mt-2 text-center"
          style={{ fontSize: "20px" }}
        >
          Màn hình
        </div>
        <div className="d-flex-column">
          <div className="screen"></div>
          {this.renderHangGhe()}
        </div>
      </div>
    );
  }
}
