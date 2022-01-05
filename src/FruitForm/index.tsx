import { useParams, Link } from "react-router-dom";
import { FormControl, FormLabel, Input, Button, Box } from "@chakra-ui/react";
import { useState } from "react";

const FruitForm = () => {
  const { fruitName } = useParams();
  const [value, setValue] = useState<any>();

  const handleOnSubmit = async (e: any) => {
    console.log(value);
    e.preventDefault();
    try {
      await fetch("https://localhost/api/apple", {
        body: JSON.stringify(value),
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Link to="/">
        <Button>Back to home Pages</Button>
      </Link>
      <Box marginTop="20px">Customize my {fruitName}</Box>
      <form onSubmit={handleOnSubmit}>
        <FormControl>
          <FormLabel htmlFor="textEngraving">textEngraving</FormLabel>
          <Input
            id="textEngraving"
            type="text"
            onChange={(e: any) =>
              setValue({
                ...value,
                textEngraving: e.target.value,
              })
            }
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="color">color</FormLabel>
          <Input
            id="color"
            type="text"
            onChange={(e: any) =>
              setValue({
                ...value,
                color: e.target.value,
              })
            }
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="size">size</FormLabel>
          <Input
            id="size"
            type="text"
            onChange={(e: any) =>
              setValue({
                ...value,
                size: e.target.value,
              })
            }
          />
        </FormControl>
        <Button type="submit">ORDER</Button>
      </form>
    </div>
  );
};

export default FruitForm;
