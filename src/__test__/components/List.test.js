import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import List from "../../components/List";

test("display input and list of players", async () => {
  render(
    <BrowserRouter>
      <List />
    </BrowserRouter>
  );

  await waitForElementToBeRemoved(() =>
    screen.queryByText(/chargement des données/i)
  );

  const listOfPlayers = await screen.findByTestId(/list-players/i);
  const inputList = screen.getByPlaceholderText(/Rechercher un joueur/i);
  const players = await screen.findAllByTestId(/player/i);
  const rankNumber = await screen.findAllByText(/RANK/i);
  const pointsNumber = await screen.findAllByText(/POINTS/i);
  const countryName = await screen.findAllByText(/COUNTRY/i);

  // Expect the input in the component List
  expect(listOfPlayers).toContainElement(inputList);

  // Expect the list of players
  expect(players).toBeTruthy();

  // Expect the stats texts of players
  expect(rankNumber).toBeTruthy();
  expect(pointsNumber).toBeTruthy();
  expect(countryName).toBeTruthy();
});

test("search players feature for existing tennis player", async () => {
  render(
    <BrowserRouter>
      <List />
    </BrowserRouter>
  );

  const listOfPlayers = await screen.findByTestId(/list-players/i);
  const inputList = screen.getByPlaceholderText(/Rechercher un joueur/i);

  userEvent.type(inputList, "Novak");

  const rankNumber = await screen.findByText(/RANK/i);
  const pointsNumber = await screen.findByText(/POINTS/i);
  const countryName = await screen.findByText(/COUNTRY/i);

  // Expect the input in the component List
  expect(listOfPlayers).toContainElement(inputList);

  // Expect the player
  expect(await screen.findByText(/Novak/i)).toBeInTheDocument();
  expect(await screen.findByText(/Djokovic/i)).toBeInTheDocument();

  // Expect the stats texts of players
  expect(rankNumber).toBeInTheDocument();
  expect(pointsNumber).toBeInTheDocument();
  expect(countryName).toBeInTheDocument();
});

test("search players feature for unknown tennis player", async () => {
  render(
    <BrowserRouter>
      <List />
    </BrowserRouter>
  );

  const listOfPlayers = await screen.findByTestId(/list-players/i);
  const inputList = screen.getByPlaceholderText(/Rechercher un joueur/i);

  userEvent.type(inputList, "Chabal");

  // Expect the input in the component List
  expect(listOfPlayers).toContainElement(inputList);
  expect(await screen.findByText(/Aucun joueur trouvé/i)).toBeInTheDocument();
});
