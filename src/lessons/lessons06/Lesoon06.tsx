import { DotToken } from "typescript";
import "./styles.css";

function Lesson06() {
  //1 типЮ string - строковый
  let userFullname: string = "John Johson";
  userFullname = "Johny Depp";

  let hello = `Hello, ${userFullname}`; //если мы явно не прописываем тип данных, то тип назначается автоматически, тип будет зависеть от первого присвоеного значения
  console.log(hello);
  ////////////////////////////////////////////////////////////////////////

  //2 тип: number -число

  let number1: number = 100;
  number1 = 35.675;

  let number2 = number1 / 0;
  ////////////////////////////////////////////////////////////////////////////

  //3 тип: boolean
  let isAdmin: boolean = true;
  isAdmin = false;
  ////////////////////////////////////////////////////////////////////////////////

  //4 тип: массивы
  const animals: string[] = ["Tiger", "Lion", "Dog"];
  animals.push("Cat");
  console.log(animals);
  const numbers: number[] = [1, 2, 3, 4, 5];
  //////////////////////////////////////////////////////////////////////////////////

  //5 тип: tupel
  const userArray: [
    string,
    string,
    string,
    number,
    string,
    string,
    string,
    number
  ] = ["name", "John", "age", 30, "name", "Pavel", "age", 40];
  /////////////////////////////////////////////////////////////////////////////////////

  //6 тип: functions
  //ф-ия, которая что-то просто выполняет, но ничего не возвращает
  const sayHi = (personName: string): void => {
    console.log(`Hello, ${personName}`);
  };

  // const makeAlert = () => {alert("This is React Typescript app")};
  // makeAlert();

  // const makeAlert:() => void = () => {alert("This is React Typescript app")};
  // makeAlert();

  sayHi(userFullname);

  //ф-ия кльлоая что-то возвращает
  const add = (a: number, b: number): number => {
    return a + b;
  };
  console.log(add(1, 2));
  ///////////////////////////////////////////////////////////////////////////

  //7тип:Объект
  interface Admin {
    isAdmin: boolean;
  }

  interface UserAnimal {
    pet?: string;
  }

  interface User extends Admin, UserAnimal {
    firstName: string;
    lastName: string;
    age: number;
    job: string;
    isAdmin: boolean;
  }

  interface User {
    isFamily: boolean;
  }

  const user1: User = {
    firstName: "John",
    lastName: "Johnson",
    age: 30,
    job: "QA",
    isAdmin: true,
    pet: "Dog",
    isFamily: true,
  };

  const user2: User = {
    firstName: "Johny",
    lastName: "Depp",
    age: 60,
    job: "Actor",
    isAdmin: false,
    isFamily: true,
  };
  //////////////////////////////////////////////////////////////////////////////////

  //8. undefoned
  let userData: undefined = undefined;
  ///////////////////////////////////////////////////////////////////////////////////

  //9. null
  let emptyVar: null = null;
  ////////////////////////////////////////////////////////////////////////////////////

  //10. any
  let someVariable: any = "Some string";
  someVariable = 1000;

  //11. тип - type
  type UserDataFromServer = User | undefined | null;
  let userDataFromServer: UserDataFromServer = user1;
  userDataFromServer = undefined;
  userDataFromServer = null;

  //типизация объектов
  type GlobalAnimalProps = {
    isAnimal: boolean;
  };
  //мы ге можем наследовать типы
  type Animal = {
    type: string;
    age: number;
    color: string;
    isWild: boolean;
    speed?: string;
  };

  type GlobalAnimal = GlobalAnimalProps | Animal;
  const aimal1: Animal = {
    type: "Tiger",
    age: 12,
    color: "orange",
    isWild: true,
  };

  const aimal2: Animal = {
    type: "Tiger",
    age: 12,
    color: "orange",
    isWild: true,
    speed: "74km/h",
  };

  return (
    <div className="page_wrapper">
      <div>Lesson06</div>
    </div>
  );
}

export default Lesson06;
