import { Character, Episode, PagedCharacters } from "./Models";

const BASE_URL: string = "https://rickandmortyapi.com/api";

async function getJson<T>(url: string): Promise<T | undefined> {
  const response = await fetch(`${BASE_URL}/${url}`);

  if (!response.ok) {
    return undefined;
  }

  const json = await response.json();

  return json as T;
}

export async function getCharacter(id: number): Promise<Character | undefined> {
  return await getJson(`character/${id}`);
}

export async function getCharacters(
  page: number,
): Promise<PagedCharacters | undefined> {
  return await getJson(`character?page=${page}`);
}

export async function getAllCharacters(): Promise<PagedCharacters | undefined> {
  return await getJson("character");
}

export async function getEpisode(id: number): Promise<Episode | undefined> {
  return await getJson(`episode/${id}`);
}
