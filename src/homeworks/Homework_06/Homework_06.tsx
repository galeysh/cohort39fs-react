import "./styles.css";
import { v4 } from "uuid";
import { Car } from "./types";

function Homework_06() {
  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const carCards = cars.map((carObject: Car) => {
    return (
      <div key={v4()} className="car-container">
        <div className="car-card">
          <h3 className="nameh3">{carObject.brand}</h3>
          <p className="namep">Price: {`${carObject.price}$`}</p>
          <p className="namep">
            Brennstoff: {carObject.isDiesel ? "Diesel" : "Benzin"}
          </p>
        </div>
      </div>
    );
  });

  return <div className="page_wrapper">{carCards}</div>;
}

export default Homework_06;
