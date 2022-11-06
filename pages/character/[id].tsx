import Image from "next/image";
import { GetServerSideProps, NextPage } from "next";

import { apolloClient } from "config";
import { GET_CHARACTER } from "graphql/character.gql";
import {
  GetCharacterQuery,
  GetCharacterQueryVariables,
} from "graphql-types/graphql";
import { BackToHome, Header } from "components";

interface CharacterInfoProps {
  kind: string;
  value: string | number;
}

const CharacterInfo: React.FC<CharacterInfoProps> = ({ kind, value }) => (
  <p className="text-lg">
    <span className="font-bold">{kind}: </span>
    {value}
  </p>
);

interface CharacterPageProps {
  character: NonNullable<GetCharacterQuery["character"]>;
}

const CharacterPage: NextPage<CharacterPageProps> = ({ character }) => (
  <div>
    <Header title={`Character: ${character.name}`} />
    <main className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 sm:py-4 lg:py-8">
      <Image
        className="rounded-lg mb-4"
        alt={character.name!}
        src={character.image!}
        width={600}
        height={600}
      />
      <CharacterInfo kind="Name" value={character.name!} />
      <CharacterInfo kind="Status" value={character.status!} />
      <CharacterInfo kind="Species" value={character.species!} />
      <CharacterInfo kind="Gender" value={character.gender!} />
      <CharacterInfo kind="Origin" value={character.origin?.name!} />
      <CharacterInfo
        kind="Last known location"
        value={character.location?.name!}
      />
      <CharacterInfo
        kind="Number of episodes"
        value={character.episode!.length}
      />
      <BackToHome />
    </main>
  </div>
);

export default CharacterPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id: characterId } = params as { id: string };

  const { data } = await apolloClient.query<
    GetCharacterQuery,
    GetCharacterQueryVariables
  >({
    query: GET_CHARACTER,
    variables: {
      characterId,
    },
  });

  return {
    props: {
      character: data.character,
    },
  };
};
