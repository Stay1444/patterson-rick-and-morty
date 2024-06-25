import { getCharacters } from "@/api/Api";
import CharacterCard from "@/components/CharacterCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center align-middle justify-center">
      <CharacterList />
    </div>
  );
}

async function CharacterList() {
  const characters = await getCharacters(1);
  if (characters == undefined) {
    throw new Error("TODO: Error handling");
  }

  return (
    <div className="flex gap-2 p-5 flex-wrap max-w-screen-lg">
      {characters.results.map((x) => (
        <CharacterCard key={x.id} character={x} />
      ))}
    </div>
  );
}
