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

// The Rick and Morty API has a query function where you can filter by different properties, but since ive not added any dropdown selector to select race,
// gender, name, etc we simply get all the characters and filter manually, which is not a real world solution
export async function getAllCharacters(): Promise<Character[] | undefined> {
  let characters: Character[] = [];

  let p = 1;
  while (true) {
    const page = await getCharacters(p);
    if (page == undefined) {
      break;
    }

    characters.push(...page.results);

    if (p >= page.info.pages) {
      break;
    }

    p++;
  }

  return characters;
}

export async function getEpisode(id: number): Promise<Episode | undefined> {
  return await getJson(`episode/${id}`);
}
