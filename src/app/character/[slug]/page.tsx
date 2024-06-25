import { getCharacter } from "@/api/Api";
import FullCharacter from "@/components/FullCharacter";

export default async function Page({ params }: { params: { slug: number } }) {
  const character = await getCharacter(params.slug);

  if (character == undefined) {
    throw new Error("Unknown character");
  }

  return (
    <div className="flex justify-center m-10">
      <FullCharacter character={character} />
    </div>
  );
}
