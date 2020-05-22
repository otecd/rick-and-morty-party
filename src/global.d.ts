import { DocumentNode } from 'apollo-boost';
import {
  Characters,
  CharactersVariables,
  Characters_characters_results,
} from './gql-operations/types/Characters';

declare global {
  type Item = Characters_characters_results;
  type QueryData = Characters;
  type QueryVariables = CharactersVariables;
  type GlobalDocumentNode = DocumentNode;
  type DataType = 'characters';

  interface ReducerAction {
    type: string;
    payload?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  }

}
