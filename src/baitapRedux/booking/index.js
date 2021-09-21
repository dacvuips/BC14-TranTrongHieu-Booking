import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import Hangghe from "./hangghe";
import Thongtindatghe from "./thongtindatghe";
export default class Booking extends Component {
  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          backgroundImage: "url(./img/bgmovie.jpg)",
          width: "100%",
          height: "100%",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backgroundSize: "100%",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="containers">
            <div className="row">
              <div className="col-md-8">
                <Hangghe />
              </div>
              <div className="col-md-3">
                <Thongtindatghe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
