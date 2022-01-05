import { Link } from "@chakra-ui/react";
import FRUITS_SETTING from "../fruitSetting";

const PickFruit = () => {
  return (
    <div>
      {Object.keys(FRUITS_SETTING).map((name) => {
        return (
          <Link key={name} to={`/fruit/${name}`}>
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default PickFruit;
