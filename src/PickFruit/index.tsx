import FRUITS_SETTING from "../fruitSetting";

const PickFruit = () => {
  return (
    <div>
      {Object.keys(FRUITS_SETTING).map((name) => {
        return (
          <a key={name} href={`/fruit/${name}`}>
            {name}
          </a>
        );
      })}
    </div>
  );
};

export default PickFruit;
