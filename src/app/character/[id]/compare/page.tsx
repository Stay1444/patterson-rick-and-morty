import { getCharacters } from "@/api/Api";
import { CharacterList } from "@/components/CharacterList";
import PageControl from "@/components/PageControl";

export default async function Page({ params }: { params: { id: number } }) {
  const page = 1;
  const characters = await getCharacters(page);

  if (characters == undefined) {
    throw new Error("TODO: Error handling");
  }

  return (
    <div className="flex flex-col items-center align-middle justify-center">
      <div className="max-w-screen-xl p-4">
        <CharacterList
          characters={characters.results.filter((x) => x.id != params.id)}
          sendTo={`/character/${params.id}/compare`}
        />
      </div>
      <PageControl
        className="mt-auto mb-2"
        current={page}
        max={characters.info.pages}
      />
    </div>
  );
}
