import { Button, Stack, Tag } from '@chakra-ui/react';
// import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
  decCount,
  incCount,
  incCountDelayed,
  selectCount,
} from './counterSlice';

export function Counter({ startingValue }: { startingValue: number }) {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  // const [count, setCount] = useState(startingValue);
  return (
    <Stack direction="row">
      <Tag>{count}</Tag>
      <Button colorScheme="red" onClick={() => dispatch(decCount(1))}>
        -1
      </Button>
      <Button colorScheme="green" onClick={() => dispatch(incCount(1))}>
        +1
      </Button>
      <Button colorScheme="yellow" onClick={() => dispatch(incCountDelayed(1))}>
        +1 delayed
      </Button>
    </Stack>
  );
}
