import { getCharacters } from "@/api/Api";
import { CharacterList } from "@/components/CharacterList";
import PageControl from "@/components/PageControl";

export default async function Page({ params }: { params: { slug: number } }) {
  const page = Number(params.slug);
  const characters = await getCharacters(page);

  if (characters == undefined) {
    throw new Error("TODO: Error handling");
  }
  return (
    <div className="flex flex-col items-center align-middle justify-center">
      <div className="max-w-screen-lg ">
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
