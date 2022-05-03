import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";

import PlayerDetails from "../../pages/PlayerDetails";

test("renders player details page", async () => {
  render(
    <MemoryRouter initialEntries={["/player/17"]}>
      <Routes>
        <Route path="/player/:id" element={<PlayerDetails />} />
      </Routes>
    </MemoryRouter>
  );

  const player = await screen.findByTestId(/player-details/i);
  const closeIcon = await screen.findByTestId(/close-icon/i);
  const firstname = await screen.findByText(/Rafael/i);
  const lastname = await screen.findByText(/Nadal/i);
  const rank = await screen.findByText(/RANK/i);
  const points = await screen.findByText(/POINTS/i);
  const countryName = await screen.findByText(/COUNTRY/i);
  const birthDay = await screen.findByText(/BIRTHDAY/i);
  const age = await screen.findByText(/AGE/i);
  const weight = await screen.findByText(/WEIGHT/i);
  const height = await screen.findByText(/HEIGHT/i);
  const rankValue = await screen.findByText(/#1/i);
  const title = await screen.findByText(/Roland Garros/i);

  expect(player).toBeTruthy();
  expect(closeIcon).toBeInTheDocument();
  expect(firstname).toBeInTheDocument();
  expect(lastname).toBeInTheDocument();
  expect(rank).toBeInTheDocument();
  expect(points).toBeInTheDocument();
  expect(countryName).toBeInTheDocument();
  expect(birthDay).toBeInTheDocument();
  expect(age).toBeInTheDocument();
  expect(weight).toBeInTheDocument();
  expect(height).toBeInTheDocument();
  expect(rankValue).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

test("navigate to home page on click to close icon", async () => {
  render(
    <MemoryRouter initialEntries={["/player/17"]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player/:id" element={<PlayerDetails />} />
      </Routes>
    </MemoryRouter>
  );

  const closeButton = await screen.findByRole("button");

  userEvent.hover(closeButton);
  userEvent.click(closeButton);

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
