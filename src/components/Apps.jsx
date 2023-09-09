import React from "react";
import service from "../styles/app.module.css";
import service1 from "../assets/services/games.webp";
import service2 from "../assets/services/crypto.webp";
import service3 from "../assets/services/trading.webp";
import Button from "./Button";

export default function Apps() {
  return (
    <div id="apps" className="pt-12 lg:pt-24">
      <h1 className="sec-title text-center">Apps</h1>

      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center px-4 lg:px-20">
        <div className="mb-8 lg:mb-0">
          <div className={service.card}>
            <img className={service.image} src={service1} alt="services" />
            <p className={service.numberH1}>01</p>
            <p className={service.h1}> Fantasy League App </p>
            <p className={service.p}>
              Engage in fantasy sports, create dream teams, and compete for cash
              prizes with our easy-to-use.
            </p>
          </div>
        </div>
        <div className="mb-8 lg:mb-0">
          <div className={service.card}>
            <img className={service.image} src={service2} alt="services" />
            <p className={service.numberH1}>02</p>
            <p className={service.h1}> Crypto Trading App </p>
            <p className={service.p}>
              Navigate the crypto world with real-time data and news, ensuring
              informed decision-making.
            </p>
          </div>
        </div>
        <div>
          <div className={service.card}>
            <img className={service.image} src={service3} alt="services" />
            <p className={service.numberH1}>03</p>
            <p className={service.h1}> Trading App </p>
            <p className={service.p}>
              Master trading with advanced tools, real-time data, and market
              insights for various assets.
            </p>
          </div>
        </div>
      </div>
      <div className="py-8 lg:py-16 flex justify-center text-center">
        <Button message="Coming Soon - Stay Tuned!" />
      </div>
    </div>
  );
}
