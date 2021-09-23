import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import Landing from "../pages/Landing";
import Header from "../components/Header";

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: {
        results: [
          {
            name: "bulbasaur",
          },
          {
            name: "ivysaur",
          },
          {
            name: "venusaur",
          },
          {
            name: "charmander",
          },
          {
            name: "charmeleon",
          },
          {
            name: "charizard",
          },
          {
            name: "squirtle",
          },
          {
            name: "wartortle",
          },
          {
            name: "blastoise",
          },
          {
            name: "caterpie",
          },
          {
            name: "metapod",
          },
          {
            name: "butterfree",
          },
          {
            name: "weedle",
          },
          {
            name: "kakuna",
          },
          {
            name: "beedrill",
          },
          {
            name: "pidgey",
          },
          {
            name: "pidgeotto",
          },
          {
            name: "pidgeot",
          },
          {
            name: "rattata",
          },
          {
            name: "raticate",
          },
        ],
      },
    }),
  },
}));

const MockedLanding = () => {
  return (
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  );
};

describe("Landing Page", () => {
  describe("Header Component", () => {
    it("should render Header component with the title passed on prop", () => {
      render(<Header title="Lista de Pokemons" />);

      const title = screen.getByText("Lista de Pokemons");

      expect(title).toBeInTheDocument();
    });
  });

  describe("Pokemons list", () => {
    it("should render twenty pokemon names", async () => {
      render(<MockedLanding />);

      const pokemonItem = await screen.findAllByTestId(/pokemon-item/i);

      expect(pokemonItem.length).toBe(20);
    });
  });

  describe("Pagination", () => {
    it("should render page number and start with number 1", async () => {
      render(<Landing />);

      const firstPage = await screen.findByTestId("page-number");

      expect(firstPage).toHaveTextContent("1");
    });

    it("should render pagination buttons", async () => {
      render(<Landing />);

      const prevButton = await screen.findByText("Anterior");
      const nextButton = await screen.findByText("Próxima");

      expect(prevButton).toBeInTheDocument();
      expect(nextButton).toBeInTheDocument();
    });

    it("should render previous button disabled", async () => {
      render(<Landing />);

      const prevButton = await screen.findByTestId(/previous-button/i);
      expect(prevButton.disabled).toBeTruthy();
    });

    it("should enable previous button after first click on next button", async () => {
      render(<Landing />);

      const nextButton = await screen.findByText("Próxima");
      userEvent.click(nextButton);

      const prevButton = await screen.findByText("Anterior");
      expect(prevButton).not.toBeDisabled();
    });

    it("should add 1 when clicked on next button", async () => {
      render(<Landing />);

      const pageBeforeClick = await screen.findByTestId("page-number");
      expect(pageBeforeClick).toHaveTextContent("1");

      const nextButton = await screen.findByText("Próxima");
      userEvent.click(nextButton);

      const pageAfterClick = await screen.findByTestId("page-number");
      expect(pageAfterClick).toHaveTextContent("2");
    });

    it("should subtract 1 when clicked on previous button", async () => {
      render(<Landing />);

      const pageBeforeClick = await screen.findByTestId("page-number");
      expect(pageBeforeClick).toHaveTextContent("1");

      // Sequence of two clicks on next button
      const nextButton = await screen.findByText("Próxima");
      userEvent.click(nextButton);
      userEvent.click(nextButton);

      // Click on previous button
      const previousButton = await screen.findByText("Anterior");
      userEvent.click(previousButton);

      const pageAfterClicks = await screen.findByTestId("page-number");
      expect(pageAfterClicks).toHaveTextContent("2");
    });
  });
});
