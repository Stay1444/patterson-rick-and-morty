import { getCharacters } from "@/api/Api";
import { CharacterList } from "@/components/CharacterList";
import PageControl from "@/components/PageControl";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: number } }) {
  const page = Number(params.slug);
  const characters = await getCharacters(page);

  if (characters == undefined) {
    throw new Error("TODO: Error handling");
  }

  return (
    <div>
      <div className="flex flex-row items-center gap-4 p-4 bg-blue-300 shadow-2xl w-full h-14">
        <Link href={"/characters/1"} className="text-2xl">
          Personajes
        </Link>
      </div>
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
    </div>
  );
}
