import "./Navigation.css";
import vector from "../../assets/Vector.png";
import search from "../../assets/search.svg";
import box from "../../assets/box.svg";
import car from "../../assets/car.svg";
import clock from "../../assets/clock.svg";
import paper from "../../assets/paper.svg";
import people from "../../assets/people.svg";
import home from "../../assets/home.svg";
import chart from "../../assets/chart.svg";
import help from "../../assets/help.svg";
import button from "../../assets/button.svg";
import notification from "../../assets/notification.svg";
import wallet from "../../assets/wallet.svg";
import person from "../../assets/person.svg";

function NavigationComponent() {
  return (
    <div className="navigation-container">
      <div className="navigation-icons">
        <img alt="img" src={vector} />
        <img alt="img" src={search} />
        <img alt="img" src={box} />
        <img alt="img" src={car} />
        <img alt="img" src={clock} />
        <img alt="img" src={paper} />
        <img alt="img" src={people} />
        <img alt="img" src={home} />
        <img alt="img" src={chart} />
        <img alt="img" src={help} />
        <img alt="img" src={button} />
      </div>

      <div className="navigation-icons">
        <img alt="img" src={notification} />
        <img alt="img" src={wallet} />
        <img alt="img" src={person} />
      </div>
    </div>
  );
}

export default NavigationComponent;
