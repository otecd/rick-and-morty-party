import React, { FC } from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { CHARACTERS } from './gql-operations/queries';
import { Characters, CharactersVariables } from './gql-operations/types/Characters';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
`;
const App: FC = () => {
  const { loading, error, data } = useQuery<Characters, CharactersVariables>(CHARACTERS, {
    variables: { page: 2, filter: {} }
  });
  const getContent = (children: JSX.Element | string): JSX.Element => (
    <StyledApp>
      <p>
        {children}
      </p>
    </StyledApp>
  );

  if (loading) return getContent('Loading...');
  if (error) return getContent(`Error! ${error}`);

  return getContent(`Result: characters count is ${data?.characters?.info?.count}`);
};

export default App;
