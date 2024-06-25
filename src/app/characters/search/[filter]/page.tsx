import { getAllCharacters } from "@/api/Api";
import { CharacterList } from "@/components/CharacterList";
import Link from "next/link";

export default async function Page({ params }: { params: { filter: string } }) {
  const filter = decodeURIComponent(params.filter).trim();
  const characters = await getAllCharacters();

  if (characters == undefined) {
    return <div>Error getting list of characters</div>;
  }

  const displayCharacters = characters.results.filter((x) => {
    if (filter.length == 0) return true;

    if (x.name.toLowerCase().includes(filter.toLowerCase())) return true;
    if (x.gender.toLowerCase().includes(filter.toLowerCase())) return true;
    if (x.location.name.toLowerCase().includes(filter.toLowerCase()))
      return true;
    if (x.species.toLowerCase().includes(filter.toLowerCase())) return true;

    return false;
  });

  return (
    <div className="flex flex-col items-center align-middle justify-center">
      <div className="max-w-screen-xl p-4">
        <CharacterList characters={displayCharacters} />
      </div>
    </div>
  );
}
