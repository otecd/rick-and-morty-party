import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ApolloError } from 'apollo-boost';
import styled from 'styled-components';
import { CHARACTERS } from '../../gql-operations/queries';
import { Characters, CharactersVariables } from '../../gql-operations/types/Characters';

interface Props {
  onCompleted?: (data: Characters) => void;
  onError?: (error: ApolloError) => void;
}

const StyledInput = styled.input`
  border: 1px solid #A0A0A0;
  text-transform: uppercase;
  font: inherit;
  width: 750px;
  padding: 0.7rem 0.9rem;

  @media (max-width: 820px) {
    width: 85%;
  }
`;

export default (props: Props): JSX.Element => {
  const {
    onCompleted,
    onError,
  } = props;
  const { loading } = useQuery<Characters, CharactersVariables>(CHARACTERS, {
    variables: { page: 1, filter: {} },
    onCompleted,
    onError,
  });
  const onChange: (event: React.ChangeEvent<HTMLInputElement>) => void = event => loading;

  return (
    <StyledInput
      onChange={onChange}
      placeholder="Type a character name here"
    />
  );
};
