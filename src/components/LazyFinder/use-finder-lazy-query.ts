import { useCallback } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';

export default ({ query, errorMessageCb }: {
  query: GlobalDocumentNode;
  errorMessageCb: Function;
}): {
  doQuery: Function;
  data: QueryData;
} => {
  const [executeQuery, { data }] = useLazyQuery<QueryData, QueryVariables>(query, {
    partialRefetch: true,
    onError: (error) => {
      errorMessageCb(error.message || 'Error');
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
