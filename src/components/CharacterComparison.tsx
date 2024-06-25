import { Character, Episode } from "@/api/Models";
import { IconGitCompare } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import Card from "./Card";
import { useMemo } from "react";

export default async function CharacterComparison({
  characterA,
  characterB,
}: {
  characterA: Character;
  characterB: Character;
}) {
  let episodesA = [];
  let episodesB = [];

  for (const link of characterA.episode) {
    const response = await fetch(link);
    if (!response.ok) {
      continue;
    }
    episodesA.push((await response.json()) as Episode);
  }

  for (const link of characterB.episode) {
    const response = await fetch(link);
    if (!response.ok) {
      continue;
    }
    episodesB.push((await response.json()) as Episode);
  }

  const episodesTogether = episodesA
    .filter((a) => episodesB.some((b) => a.id == b.id))
    .map((x) => {
      return (
        <p key={x.id}>
          {x.name}
          <span className="ml-1 text-neutral-500">{x.air_date}</span>
        </p>
      );
    });

  return (
    <Card className="p-4">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-2">
          <Image
            className="rounded-lg"
            src={characterA.image}
            alt={characterA.name}
            width={100}
            height={100}
          />
          <Image
            className="rounded-lg"
            src={characterB.image}
            alt={characterB.name}
            width={100}
            height={100}
          />
        </div>
        <div>
          <h1 className="text-2xl">
            {characterA.name} | {characterB.name}
          </h1>
          <p className="text-neutral-500">
            {characterA.gender} | {characterB.gender}
          </p>
          <Category
            name="Estado"
            values={[characterA.status, characterB.status]}
          />
          <Category
            name="Localización"
            values={[characterA.location.name, characterB.location.name]}
          />
          <Category
            name="Planeta de Origen"
            values={[characterA.origin.name, characterB.origin.name]}
          />
          {episodesA.length > 0 && (
            <Category
              name="Episodio de Debut"
              values={[
                `${episodesA[0].name} (${episodesA[0].air_date})`,
                `${episodesB[0].name} (${episodesB[0].air_date})`,
              ]}
            />
          )}
        </div>
      </div>
      <hr />
      <h2 className="text-neutral-500">Episodios Conjuntos</h2>
      <div>
        {episodesTogether.length > 0 ? episodesTogether : <h2>Ninguno</h2>}
      </div>
    </Card>
  );
}

function Category({ name, values }: { name: string; values: string[] }) {
  return (
    <>
      <hr className="mt-2" />
      <h2>{name}</h2>
      {values.map((x, i) => (
        <p key={i} className="text-neutral-500">
          {x}
        </p>
      ))}
    </>
  );
}
