import { Character, PagedCharacters } from "./Models";

const BASE_URL: string = "https://rickandmortyapi.com/api";

export async function getCharacter(id: number): Promise<Character | undefined> {
  const response = await fetch(`${BASE_URL}/character/${id}`);

  if (!response.ok) {
    return undefined;
  }

  return (await response.json()) as Character;
}

export async function getCharacters(
  page: number,
): Promise<PagedCharacters | undefined> {
  const response = await fetch(`${BASE_URL}/character?page=${page}`);

  if (!response.ok) {
    return undefined;
  }

  return (await response.json()) as PagedCharacters;
}
