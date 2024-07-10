import { useState } from "react";

import Button from "components/Button/Button";
import Counter from "components/Counter/Counter";

import { WEATHER_CODES } from "./types";
import "./styles.css";


import 

// Создайте функцию, которая бы принимала бы следующие параметры:
//   код погоды и функция decode, которая дает расшифровку погоды по коду.
//   Функция должна возвращать строку, описывающую погоду. Таблица соответствия
//   код-описание: SQ – шквал PO – пыльный вихрь FC - торнадо BR – дымка
//   (видимость от 1 до 9 км) HZ – мгла (видимость менее 10 км) FU – дым
//   (видимость менее 10 км) DS - пыльная буря (видимость менее 10 км) SS -
//   песчаная буря (видимость менее 10 км) Подсказка: удобно использовать в
//   одном из методов switch-case:

function Lesson07() {
  //11. тип enum
  const decode = (weatherCode: WEATHER_CODES): string => {
    switch (weatherCode) {
      case WEATHER_CODES.SQ: {
        return "шквал";
      }
      case WEATHER_CODES.PO: {
        return "пыльный вихрь";
      }
      case WEATHER_CODES.FC: {
        return "торнадо";
      }
      case WEATHER_CODES.BR: {
        return "дымка(видимость от 1 до 9 км)";
      }
      case WEATHER_CODES.HZ: {
        return " мгла (видимость менее 10 км)";
      }
      case WEATHER_CODES.FU: {
        return "дым(видимость менее 10 км)";
      }
      case WEATHER_CODES.DS: {
        return "пыльная буря (видимость менее 10 км)";
      }
      case WEATHER_CODES.SS: {
        return "песчаная буря (видимость менее 10 км)";
      }
      default:
        return "This code doesnt exist";
    }
  };

  const showWeather = (
    weatherCode: WEATHER_CODES,
    decodeFunc: (weatherCode: WEATHER_CODES) => string
  ) => {
    console.log(decodeFunc(weatherCode));
  };

  showWeather(WEATHER_CODES.DS, decode);

  //13. Generic
  type ArrayGenerator<ValueType> = ValueType[];
  //   const someStringArray = ["a", "b", "c"];
  const someStringsArray: ArrayGenerator<string> = ["a", "b", "c"];
  const numbers: ArrayGenerator<number> = [1, 2, 3, 4, 5];

  interface ValueForMac {
    model: string;
    articul: number;
  }

  // Можно прокидывать не только 1 дженерик аргумент, а сколько угодно через запятую
  interface ShopItems<ValueType> {
    type: string;
    value: ValueType;
  }

  const item1: ShopItems<number> = {
    type: "TV",
    value: 1235346245,
  };

  const item2: ShopItems<string> = {
    type: "PC",
    value: "Xiaomi Model 123",
  };
  const item3: ShopItems<ValueForMac> = {
    type: "PC",
    value: {
      model: "Apple Pro Book",
      articul: 1231241352345,
    },
  };
///////////////////////////////////////////////////////
const [count, setCount] = useState<number>(0);

  const onPlus = (): void => {
    setCount((prevValue: number) => {
      return prevValue + 1;
    });
  };

  const onMinus = (): void => {
    setCount((prevValue: number) => {
      return prevValue - 1;
    });
  };

  const sendCountToServer = async () => {
    //тут мне нужно отправить запрос на сервер с значение count
    // const response = await fetch("someURL", {
    //   method: "POST",
    //   body: JSON.stringify({ count: count }),
    // });
  };

  return (
    <div className="homework7-wrapper">
      <Counter count={count} onMinus={onMinus} onPlus={onPlus} />
      <Button name="Send count" onClick={sendCountToServer} />
    </div>
  );
}

export default Lesson07;
