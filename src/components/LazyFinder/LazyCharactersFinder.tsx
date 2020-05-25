import React, { ReactElement } from 'react';
import LazyFinder from './LazyFinder';
import { CHARACTERS } from '../../gql-operations/queries';

export default (): ReactElement => (
  <LazyFinder dataType="characters" query={CHARACTERS} />
);
