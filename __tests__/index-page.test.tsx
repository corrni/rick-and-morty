import { render } from "@testing-library/react";

import { default as IndexPage, getServerSideProps } from "../pages/index";
import { characterListData, paginationInfo } from "../mocks/mockData";

const renderIndexPage = () =>
  render(
    <IndexPage
      characters={characterListData}
      currentPage={1}
      info={paginationInfo}
    />
  );

describe("IndexPage", () => {
  it("fetches SSR data", async () => {
    const context = { query: { page: "1" } } as any;

    const result: any = await getServerSideProps(context);

    expect(result.props.info).toMatchObject(paginationInfo);
    expect(result.props.currentPage).toBe(1);
    expect(result.props.characters).toHaveLength(20);
  });

  it("displays a list of characters", () => {
    const { getAllByRole, getByText } = renderIndexPage();

    expect(getByText("List of Characters")).toBeInTheDocument();
    expect(getAllByRole("listitem")).toHaveLength(20);
    expect(getByText("Previous", { selector: "a" })).toBeInTheDocument();
    expect(getByText("Next", { selector: "a" })).toBeInTheDocument();
  });

  it("links to the character page", () => {
    const { getByText } = renderIndexPage();

    const alienMorty = getByText("Alien Morty").closest("a");
    expect(alienMorty).toHaveAttribute("href", "character/14");
  });

  it("navigates between pages", () => {
    const { getByText } = renderIndexPage();

    const prevLink = getByText("Previous");
    expect(prevLink).toHaveAttribute("href", "/?page=1");

    const nextLink = getByText("Next");
    expect(nextLink).toHaveAttribute("href", "/?page=2");
  });

  it("shows pagination info", () => {
    const { getByLabelText } = renderIndexPage();

    const pagination = getByLabelText("Pagination");
    expect(pagination.textContent).toMatch("Showing 1 to 20 of 862 results");
  });
});
