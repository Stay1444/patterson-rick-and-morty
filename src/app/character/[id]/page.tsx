import { getCharacter } from "@/api/Api";
import FullCharacter from "@/components/FullCharacter";

export default async function Page({ params }: { params: { id: number } }) {
  const character = await getCharacter(params.id);

  if (character == undefined) {
    return <div>Character not found</div>;
  }

  return (
    <div className="flex flex-row justify-center align-middle">
      <FullCharacter showCompare character={character} />
    </div>
  );
}
