import "./styles.css";

function Homework_06() {
  const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];
  type Car = {
    brand: string;
    price: number;
    isDiesel: boolean;
  };

  return (
    <div className="car-container">
      {cars.map((car) => (
        <div className="car-card ">
          <h3 className="nameh3">{car.brand}</h3>
          <p className="namep">Price: {car.price}</p>
          <p className="namep">Brennstoff: {car.isDiesel ? "Diesel" : "Benzin"}</p>
        </div>
      ))};
    </div>
  );
}

export default Homework_06;
