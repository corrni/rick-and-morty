import type { GetServerSideProps, NextPage } from "next";
import { compact } from "lodash";

import { apolloClient } from "config";

import { CharacterCard, GridList, Header } from "components";
import { GET_CHARACTER_LIST } from "graphql/characterList.gql";
import {
  GetCharacterListQuery,
  GetCharacterListQueryVariables,
} from "graphql-types/graphql";

interface Props {
  currentPage: number;
  info: NonNullable<GetCharacterListQuery["characters"]>["info"];
  characters: NonNullable<
    NonNullable<GetCharacterListQuery["characters"]>["results"]
  >;
}

const IndexPage: NextPage<Props> = ({ characters, currentPage, info }) => (
  <div>
    <Header title="List of Characters" />
    <GridList.Container>
      <GridList.Content>
        {characters.map((file) => (
          <GridList.Item key={file?.id!}>
            <CharacterCard
              defaultSize={300}
              href={`character/${file?.id!}`}
              imgSrc={file?.image!}
              title={file?.name!}
            />
          </GridList.Item>
        ))}
      </GridList.Content>
      <GridList.Pagination paginationInfo={info} currentPage={currentPage} />
    </GridList.Container>
  </div>
);

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page = "1" } = context.query as { page?: string };
  const currentPage = parseInt(page);

  const { data } = await apolloClient.query<
    GetCharacterListQuery,
    GetCharacterListQueryVariables
  >({
    query: GET_CHARACTER_LIST,
    variables: {
      currentPage,
    },
  });

  return {
    props: {
      characters: compact(data.characters?.results),
      info: data.characters?.info,
      currentPage,
    },
  };
};
