import { getCharacter } from "@/api/Api";
import FullCharacter from "@/components/FullCharacter";

export default async function Page({ params }: { params: { id: number } }) {
  const character = await getCharacter(params.id);

  if (character == undefined) {
    throw new Error("Unknown character");
  }

  return (
    <div className="flex flex-row justify-center align-middle items-center min-h-full">
      <FullCharacter character={character} />
    </div>
  );
}
