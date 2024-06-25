import { getCharacter } from "@/api/Api";
import CharacterComparison from "@/components/CharacterComparison";

export default async function Page({
  params,
}: {
  params: { id: number; otherId: number };
}) {
  const characterA = await getCharacter(params.id);
  const characterB = await getCharacter(params.otherId);

  if (characterA == undefined || characterB == undefined) {
    return <div>Character not found</div>;
  }

  return (
    <div className="flex flex-row justify-center align-middle">
      <CharacterComparison characterA={characterA} characterB={characterB} />
    </div>
  );
}
