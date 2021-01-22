import { Button, Stack, Tag } from "@chakra-ui/react";
import { useState } from "react";

export function Counter({ startingValue } : { startingValue: number }) {
  const [count, setCount] = useState(startingValue);
  return (

    <Stack direction="column">
      <Tag>{count}</Tag>
      <Button colorScheme="red" onClick={() => setCount(count - 1)}>-1</Button>
      <Button colorScheme="green" onClick={() => setCount(count + 1)}>+1</Button>
    </Stack>
  );
}
