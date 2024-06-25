"use client";

import { Character, Episode } from "@/api/Models";
import { IconGitCompare } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FullCharacter({
  character,
  showCompare,
}: {
  character: Character;
  showCompare: boolean;
}) {
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    let requests = character.episode.map((x) => fetch(x));
    Promise.all(requests)
      .then((responses) => responses.map((x) => x.json()))
      .then((responses) => {
        Promise.all(responses).then((episodes) => setEpisodes(episodes));
      });
  }, [setEpisodes, character]);

  return (
    <div className="border p-4 rounded  border-gray-400 bg-gray-100 shadow-md">
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
            <IconGitCompare className="text-blue-400 hover:text-blue-600 cursor-pointer duration-100" />
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
    </div>
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
