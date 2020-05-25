import { useCallback } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { FINDER_ERROR_NOT_FOUND } from '../../const';

export default ({ query, errorMessageCb }: {
  query: GlobalDocumentNode;
  errorMessageCb: Function;
}): {
  doQuery: Function;
  data: QueryData;
} => {
  const [executeQuery, { data }] = useLazyQuery<QueryData, QueryVariables>(query, {
    partialRefetch: true,
    onError: () => {
      errorMessageCb(FINDER_ERROR_NOT_FOUND);
    },
  });
  const doQuery = useCallback(({ page, name }: {
    page: number;
    name: string;
  }) => executeQuery({
    variables: {
      page,
      filter: { name },
    },
  }), [executeQuery]);

  return { doQuery, data };
};
