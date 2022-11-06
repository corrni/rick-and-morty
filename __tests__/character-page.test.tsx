import { render } from "@testing-library/react";

import {
  default as CharacterPage,
  getServerSideProps,
} from "../pages/character/[id]";
import { characterData } from "../mocks/mockData";

const renderCharacterPage = () =>
  render(<CharacterPage character={characterData} />);

describe("CharacterPage", () => {
  it("fetches SSR data", async () => {
    const context = { params: { id: "1" } } as any;

    const result: any = await getServerSideProps(context);

    expect(result.props.character).toMatchObject({
      id: "1",
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
    });
    expect(result.props.character.episode).toHaveLength(51);
  });

  it("displays an individual character", () => {
    const { getByText } = renderCharacterPage();
    const characterInfo = (kind: string) =>
      getByText(kind).parentNode!.textContent;

    expect(getByText("Character: Rick Sanchez")).toBeInTheDocument();
    expect(characterInfo("Name:")).toMatch("Rick Sanchez");
    expect(characterInfo("Status:")).toMatch("Alive");
    expect(characterInfo("Species:")).toMatch("Human");
    expect(characterInfo("Gender:")).toMatch("Male");
    expect(characterInfo("Origin:")).toMatch("Earth (C-137)");
    expect(characterInfo("Last known location:")).toMatch("Citadel of Ricks");
    expect(characterInfo("Number of episodes:")).toMatch("51");
  });

  it("navigates back to the list of characters", () => {
    const { getByText } = renderCharacterPage();

    const backButton = getByText("Back to Home", { selector: "a" });

    expect(backButton).toHaveAttribute("href", "/");
  });
});
