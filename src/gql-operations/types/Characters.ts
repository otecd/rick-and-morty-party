/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FilterCharacter } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: Characters
// ====================================================

export interface Characters_characters_info {
  __typename: "Info";
  /**
   * The amount of pages.
   */
  pages: number | null;
  /**
   * Number of the next page (if it exists)
   */
  next: number | null;
  /**
   * Number of the previous page (if it exists)
   */
  prev: number | null;
}

export interface Characters_characters_results {
  __typename: "Character";
  /**
   * The id of the character.
   */
  id: string | null;
  /**
   * The name of the character.
   */
  name: string | null;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: string | null;
}

export interface Characters_characters {
  __typename: "Characters";
  info: Characters_characters_info | null;
  results: (Characters_characters_results | null)[] | null;
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
