"use client";

import { getCharacter } from "@/api/Api";
import { Character } from "@/api/Models";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type PropsWithId = {
  id: number;
  character?: never;
};

type PropsWithCharacter = {
  id?: never;
  character: Character;
};

type CharacterCardProps = PropsWithId | PropsWithCharacter;

export default function CharacterCard(props: CharacterCardProps) {
  const [character, setCharacter] = useState<Character | null>(null);
  const router = useRouter();

  useEffect(() => {
    if ("id" in props) {
      getCharacter(props.id!).then((x) => setCharacter(x!));
    } else if ("character" in props) {
      setCharacter(props.character);
    }
  }, [props]);

  if (character == null) {
    return <div>Loading...</div>;
  }

  return (
    <div
      onClick={() => {
        router.replace(`/character/${character.id}`);
      }}
      className="flex flex-col gap-2 w-36 items-center p-2 border-gray-400 bg-gray-100 shadow-md border rounded-lg cursor-pointer hover:scale-105 duration-100"
    >
      <Image
        src={character.image}
        alt={character.name}
        width={128}
        height={128}
        className="rounded-lg"
      />
      <h2 className="text-center text-wrap">{character.name}</h2>
      <p className="text-center text-xs">
        {character.gender}, {character.status}
      </p>
    </div>
  );
}
