import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import App from "../../components/App";

const background =
  "background-image: linear-gradient(to bottom, #f2753b, #f08542, #ee934c, #eda058, #ebad65)";

test("renders home page with background orange background-color and image", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const app = screen.getByTestId("app");
  const tennisBallImage = screen.getByTestId("tennis-ball-img");

  expect(app).toHaveStyle(background);
  expect(tennisBallImage).toBeInTheDocument();
});
