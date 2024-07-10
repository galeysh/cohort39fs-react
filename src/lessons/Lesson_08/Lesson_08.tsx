import Button from "components/Button/Button";

import { Lesson08Wrapper, ButtonControl, Box1, Box2, Box3 } from "./styles";

function Lesson_08() {
  //   let isBlack = false;

  return (
    <Lesson08Wrapper
    // style={{ color: isBlack ? "black" : "red", backgroundColor: "green" }}
    >
      <ButtonControl>
        <Button
          isRed={false}
          disabled={true}
          name="Send"
          onClick={() => {
            console.log("This button works");
          }}
        />
      </ButtonControl>
      <Box1>Box 1</Box1>
      <Box2>Box 2</Box2>
      <Box3>Box 3</Box3>
    </Lesson08Wrapper>
  );
}

export default Lesson_08;
