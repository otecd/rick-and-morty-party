import React from 'react';
import LazyFinder from './LazyFinder';
import { CHARACTERS } from '../../gql-operations/queries';

export default (): JSX.Element => (
  <LazyFinder dataType="characters" query={CHARACTERS} />
);
