// https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-type-predicates

type Fish = {
  swim: Function;
};

type Bird = {
  fly: Function;
};

type Snake = {
  slither: Function;
  swim: Function;
};

const swim = () => {
  console.log('I swim.');
};
const fly = () => {
  console.log('I fly.');
};
const slither = () => {
  console.log('I slither.');
};

type Pet = Fish | Bird | Snake;

function isFish(pet: Pet): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function isBird(pet: Pet): pet is Bird {
  return (pet as Bird).fly !== undefined;
}

function isSnake(pet: Pet): pet is Snake {
  return (
    (pet as Snake).slither !== undefined && (pet as Snake).swim !== undefined
  );
}

export function testTypePredicate() {
  const fish: any = {fly: fly}; // carelessly misplaced fish and bird
  const bird: any = {swim: swim}; // carelessly misplaced fish and bird
  const snake: any = {slither: slither, swim: swim};
  if (isFish(fish)) {
    console.log('fish> I am a fish because I can swim.');
    fish.swim(); // autocompletion
  } else {
    console.log(
      "fish> isFish() says I am not a fish because I can't swim. Let me try to fly...",
    );
    fish.fly(); // no autocompletion
  }
  if (isBird(bird)) {
    console.log('bird> I am a bird because I can fly.');
    bird.fly(); // autocompletion
  } else {
    console.log(
      "bird> isBird() says I am not a bird because I can't fly. Let me try to swim...",
    );
    bird.swim(); // no autocompletion
  }
  if (isSnake(snake)) {
    console.log('snake> I am a snake because I can slither and swim.');
    snake.slither(); // autocompletion
    snake.swim(); // autocompletion
  } else {
    console.log(
      "snake> isSnake() says I am not a snake because I can't slither or swim.",
    );
  }
}
