"use client";

import { Character, Episode } from "@/api/Models";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FullCharacter({ character }: { character: Character }) {
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    character.episode.forEach((url) => {
      fetch(url).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setEpisodes((episodes) =>
              [...episodes, data].sort((a, b) => a.id - b.id),
            );
          });
        }
      });
    });
  }, [setEpisodes, character]);

  return (
    <div className="border p-4 rounded flex flex-row gap-4 border-gray-400 bg-gray-100 shadow-md">
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
          <Category name="Episodio de Debut" value={episodes[0].name} />
        )}
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
