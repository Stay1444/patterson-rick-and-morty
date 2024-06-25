export type PagedCharacters = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: [Character];
};

export type Character = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: "Human";
  type: string;
  gender: "Female" | "Male";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [string];
  url: string;
  crated: string;
};
