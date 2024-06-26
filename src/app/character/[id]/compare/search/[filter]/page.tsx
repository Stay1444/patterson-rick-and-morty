import { getAllCharacters } from "@/api/Api";
import { CharacterList } from "@/components/CharacterList";
import PageControl from "@/components/PageControl";

export default async function Page({
  params,
}: {
  params: { id: number; filter: string };
}) {
  const filter = decodeURIComponent(params.filter).trim();
  const characters = await getAllCharacters();

  if (characters == undefined) {
    return <div>Error getting list of characters</div>;
  }

  const displayCharacters = characters.filter((x) => {
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
        <CharacterList
          characters={displayCharacters.filter((x) => x.id != params.id)}
          sendTo={`/character/${params.id}/compare`}
        />
      </div>
    </div>
  );
}
