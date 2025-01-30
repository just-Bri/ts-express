import { readFileSync } from "fs";

type Person = {
  firstName: string;
  lastName: string;
  fullName: string;
};

interface Fakedb {
  people: Person[];
}

const db: Fakedb = JSON.parse(readFileSync("./src/fakedb.json", "utf-8"));

export const getPeople = (version: string) => {
  switch (version) {
    case "v1":
      return db.people.map(({ fullName, ...rest }) => rest);
    case "v2":
      return db.people.map(({ fullName }) => ({ fullName }));
    default:
      // Added warning for invalid version
      console.warn(`Unsupported API version: ${version}`);
      throw new Error("Invalid API version");
  }
};
