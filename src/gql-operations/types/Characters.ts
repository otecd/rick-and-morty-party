/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FilterCharacter } from "./../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: Characters
// ====================================================

export interface Characters_characters_info {
  __typename: "Info";
  /**
   * The length of the response.
   */
  count: number | null;
}

export interface Characters_characters {
  __typename: "Characters";
  info: Characters_characters_info | null;
}

export interface Characters {
  /**
   * Get the list of all characters
   */
  characters: Characters_characters | null;
}

export interface CharactersVariables {
  page?: number | null;
  filter?: FilterCharacter | null;
}
