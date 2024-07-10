import { useState } from "react";

import LoginForm from "components/LoginForm/LoginForm";
import SimponsCard from "components/SimponsCard/SimponsCard";
import Input from "components/Input/Input";
import Feedback from "components/Feedback/Feedback";

import "./styles.css";

function Homework_07() {
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const onLike = (): void => {
    setLike((prevValue: number) => prevValue + 1);
  };

  const onDislike = (): void => {
    setDislike((prevValue: number) => prevValue + 1);
  };
  const resetResults = (): void => {
    setLike(0);
    setDislike(0);
  };

  const homerSimpson = {
    firstName: "Homer",
    lastName: "Simpson",
    job: "Nuclear Safety Inspector",
    hobby: "beer Duff",
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  };

  return (
    <div className="homework07-wrapper">
      <LoginForm />
      {/* Альтернатива: Вместо 5 св-в можно передать 1 - это обьект, в котором буду храниться эти св-ва */}
      {/* <SimponsCard simpsonData={homerSimpson} /> */}
      <SimponsCard
        avatar={homerSimpson.avatar}
        firstName={homerSimpson.firstName}
        lastName={homerSimpson.lastName}
        job={homerSimpson.job}
        hobby={homerSimpson.hobby}
      />
      <Input
        id="input-1"
        label="First name"
        placeholder="Enter your first name"
        name="first_name"
      />
      <Feedback
        like={like}
        dislike={dislike}
        onLike={onLike}
        onDislike={onDislike}
        resetResults={resetResults}
      />
    </div>
  );
}

export default Homework_07;
