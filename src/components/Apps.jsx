import service from "../styles/app.module.css";
import service1 from "../assets/services/games.webp";
import service2 from "../assets/services/crypto.webp";
import service3 from "../assets/services/trading.webp";
import Button from "./Button";

export default function Apps() {
  return (
    <div id="apps" className="h-[100vh] pt-16">
      <h1 className="text-center py-16">Apps</h1>

      <div className="flex justify-evenly px-20">
        <div>
          <div className={service.card}>
            <img className={service.image} src={service1} alt="services" />
            <p className={service.numberH1}>01</p>
            <p className={service.h1}> Fantasy League App </p>
            <p className={service.p}>
              Engage in fantasy sports, create dream teams, and compete for cash
              prizes with our easy-to-use app.
            </p>
          </div>
        </div>
        <div>
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
      <div className=" flex justify-center py-16">
        <Button message="Coming Soon - Stay Tuned!" />
      </div>
    </div>
  );
}
