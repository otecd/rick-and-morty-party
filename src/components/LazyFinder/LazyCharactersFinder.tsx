import React from 'react';
import LazyFinder from './LazyFinder';
import { CHARACTERS } from '../../gql-operations/queries';
import { Characters_characters_results } from '../../gql-operations/types/Characters';

interface Props {
  onCompleted?: (resultsByPages: Characters_characters_results[][]) => void;
  onError?: (error: Error) => void;
  onLoading?: Function;
  excludedItems: Characters_characters_results[];
}

export default ({
  onCompleted,
  onError,
  onLoading,
  excludedItems,
}: Props): JSX.Element => (
  <LazyFinder
    onCompleted={onCompleted}
    onError={onError}
    onLoading={onLoading}
    excludedItems={excludedItems}
    dataType="characters"
    query={CHARACTERS}
  />
);
