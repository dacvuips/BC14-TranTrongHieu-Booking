import React, { Component } from "react";
import { connect } from "react-redux";
import { actionDatGhe } from "./modules/action";

class Ghe extends Component {
  renderGhe = () => {
    return this.props.ghe.danhSachGhe.map((value) => {
      let cssGheDaDat = "";
      let disabled = false;
      if (value.daDat === true) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }

      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === value.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheDaDat = "gheDangChon";
      }

      return (
        <div key={value.soGhe}>
          <button
            onClick={() => {
              this.props.datVe(value);
            }}
            disabled={disabled}
            className={` ${cssGheDaDat}  ghe ${cssGheDangDat} ml-3`}
          >
            {value.soGhe}
          </button>
        </div>
      );
    });
  };
  renderSoHang = () => {
    return this.props.ghe.danhSachGhe.map((hang, index) => {
      return (
        <span key={index} className="rowNumber">
          {hang.soGhe}
        </span>
      );
    });
  };
  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div className="text-light justify-content-center ml-4 mt-3 d-flex ">
          {this.props.ghe.hang} {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div className="text-light justify-content-center mt-3 d-flex ">
          {this.props.ghe.hang} {this.renderGhe()}
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <div>{this.renderHangGhe()}</div>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    danhSachGheDangDat: state.bookingReducer.bookingMovie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datVe: (ghe) => {
      dispatch(actionDatGhe(ghe));
    },
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(Ghe);
