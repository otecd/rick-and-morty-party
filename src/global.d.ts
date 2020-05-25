import { DocumentNode } from 'apollo-boost';
import {
  Characters,
  CharactersVariables,
  Characters_characters_results,
} from './gql-operations/types/Characters';
import { NAME_MORTY, NAME_RICK } from './const';

declare global {
  type Item = Characters_characters_results;
  type QueryData = Characters | undefined;
  type QueryVariables = CharactersVariables;
  type GlobalDocumentNode = DocumentNode;
  type DataType = 'characters';
  type PartyRole = NAME_MORTY | NAME_RICK;

  interface ReducerAction {
    type: string;
    payload?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  }
}
