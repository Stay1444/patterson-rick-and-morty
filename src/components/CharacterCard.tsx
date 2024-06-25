import { getCharacter } from "@/api/Api";
import { Character } from "@/api/Models";
import Image from "next/image";

type PropsWithId = {
  id: number;
  character?: never;
};

type PropsWithCharacter = {
  id?: never;
  character: Character;
};

type CharacterCardProps = PropsWithId | PropsWithCharacter;

export default async function CharacterCard(props: CharacterCardProps) {
  let character: Character | undefined;

  if ("id" in props) {
    character = await getCharacter(props.id!);
  } else if ("character" in props) {
    character = props.character;
  }

  if (character == undefined) {
    throw new Error("TODO: Error handling");
  }

  return (
    <div className="flex flex-col gap-2 w-36 items-center p-2 border-gray-400 bg-gray-100 shadow-md border rounded-lg cursor-pointer">
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
