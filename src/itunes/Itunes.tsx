import { Button, Input, Spinner, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EbookTable } from './ebookTable/EbookTable';
import { selectEbooks, selectIsLoading, fetchEbooks } from './itunesSlice';

export function Itunes() {
  const ebooks = useSelector(selectEbooks);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <Stack>
      <Stack direction="row">
        <Input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <Button
          colorScheme="blue"
          onClick={() => dispatch(fetchEbooks(searchTerm))}
        >
          Search
        </Button>
      </Stack>
      {isLoading ? <Spinner /> : <EbookTable ebooks={ebooks} />}
    </Stack>
  );
}
