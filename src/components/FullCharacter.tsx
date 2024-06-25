import { Character, Episode } from "@/api/Models";
import { IconGitCompare } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import Card from "./Card";

export default async function FullCharacter({
  character,
  showCompare,
}: {
  character: Character;
  showCompare: boolean;
}) {
  let episodes = [];

  for (const link of character.episode) {
    const response = await fetch(link);
    if (!response.ok) {
      continue;
    }
    episodes.push((await response.json()) as Episode);
  }

  return (
    <Card className="p-4">
      <div className="flex flex-row gap-4 justify-around">
        <div>
          <Image
            className="rounded-lg"
            src={character.image}
            alt={character.name}
            width={100}
            height={100}
          />
        </div>
        <div>
          <h1 className="text-2xl">{character.name}</h1>
          <p className="text-neutral-500">
            {character.gender} {character.type}
          </p>
          <Category name="Localización" value={character.location.name} />
          <Category name="Planeta de Origen" value={character.origin.name} />
          {episodes.length > 0 && (
            <Category
              name="Episodio de Debut"
              value={`${episodes[0].name} (${episodes[0].air_date})`}
            />
          )}
        </div>
        <div>
          {showCompare && (
            <Link href={`/character/${character.id}/compare`}>
              <IconGitCompare className="text-blue-400 hover:text-blue-600 cursor-pointer duration-100" />
            </Link>
          )}
        </div>
      </div>
      <hr />
      <h2 className="text-neutral-500">Episodios</h2>
      <div>
        {episodes.map((x) => {
          return (
            <p key={x.id}>
              {x.name}
              <span className="ml-1 text-neutral-500">{x.air_date}</span>
            </p>
          );
        })}
      </div>
    </Card>
  );
}

function Category({ name, value }: { name: string; value: string }) {
  return (
    <>
      <hr className="mt-2" />
      <h2>{name}</h2>
      <p className="text-neutral-500">{value}</p>
    </>
  );
}
