import { getCharacters } from "@/api/Api";
import { CharacterList } from "@/components/CharacterList";
import PageControl from "@/components/PageControl";

type PageProps = {
  params: { id: number };
  searchParams?: { [key: string]: string | undefined };
};

export default async function Page(props: PageProps) {
  const page = Number(props.searchParams ? props.searchParams["page"] ?? 1 : 1);

  const characters = await getCharacters(page);

  if (characters == undefined) {
    return <div>Character not found</div>;
  }

  return (
    <div className="flex flex-col items-center align-middle justify-center">
      <div className="max-w-screen-xl p-4">
        <CharacterList
          characters={characters.results.filter((x) => x.id != props.params.id)}
          sendTo={`/character/${props.params.id}/compare`}
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
