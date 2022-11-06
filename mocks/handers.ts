import { graphql } from "msw";

import { characterData, characterListData, paginationInfo } from "./mockData";

export const handlers = [
  graphql.query("getCharacter", (_req, res, ctx) => {
    return res(
      ctx.data({
        character: characterData,
      })
    );
  }),

  graphql.query("getCharacterList", (_req, res, ctx) => {
    return res(
      ctx.data({
        characters: {
          results: characterListData,
          info: paginationInfo,
        },
      })
    );
  }),
];
