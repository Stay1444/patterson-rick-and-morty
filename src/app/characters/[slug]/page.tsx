import { getCharacters } from "@/api/Api";
import { CharacterList } from "@/components/CharacterList";
import PageControl from "@/components/PageControl";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: number } }) {
  const page = Number(params.slug);
  const characters = await getCharacters(page);

  if (characters == undefined) {
    return <div>Error getting list of characters</div>;
  }

  return (
    <div className="flex flex-col items-center align-middle justify-center">
      <div className="max-w-screen-xl p-4">
        <CharacterList characters={characters.results} />
      </div>
      <PageControl
        className="mt-auto mb-2"
        current={page}
        max={characters.info.pages}
      />
    </div>
  );
}
