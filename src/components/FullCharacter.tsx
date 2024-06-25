import { Character } from "@/api/Models";
import Image from "next/image";

export default function FullCharacter({ character }: { character: Character }) {
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
        <Category name="Location" value={character.location.name} />
        <Category name="Origin" value={character.origin.name} />
        {character.episode.length > 0 && (
          <Category name="Debut" value={character.episode[0]} />
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
