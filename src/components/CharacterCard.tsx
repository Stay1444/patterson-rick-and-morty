"use client";

import { getCharacter } from "@/api/Api";
import { Character } from "@/api/Models";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Card from "./Card";

type PropsWithId = {
  id: number;
  character?: never;
  sendTo?: string;
};

type PropsWithCharacter = {
  id?: never;
  character: Character;
  sendTo?: string;
};

type CharacterCardProps = PropsWithId | PropsWithCharacter;

export default function CharacterCard(props: CharacterCardProps) {
  const [character, setCharacter] = useState<Character | null>(null);

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
    <Card
      href={
        props.sendTo
          ? `${props.sendTo}/${character.id}`
          : `/character/${character.id}`
      }
      className="flex flex-col gap-2 w-36 items-center hover:scale-105 duration-100"
    >
      <InnerContent character={character} />
    </Card>
  );
}

function InnerContent({ character }: { character: Character }) {
  return (
    <>
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
    </>
  );
}
