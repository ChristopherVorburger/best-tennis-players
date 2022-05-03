import { getName, overwrite } from "country-list";

// Affiliation des codes pays à un nom
overwrite([
  {
    code: "ESP",
    name: "Spain",
  },
  {
    code: "SRB",
    name: "Serbia",
  },
  {
    code: "USA",
    name: "USA",
  },
  {
    code: "SUI",
    name: "Swiss",
  },
  {
    code: "MAR",
    name: "Mars",
  },
]);

export { getName };
