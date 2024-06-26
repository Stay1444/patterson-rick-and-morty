import { getCharacters } from "@/api/Api";
import { CharacterList } from "@/components/CharacterList";
import PageControl from "@/components/PageControl";
import Link from "next/link";

type PageProps = {
  searchParams?: { [key: string]: string | undefined };
};

export default async function Page(props: PageProps) {
  const page = Number(props.searchParams ? props.searchParams["page"] ?? 1 : 1);
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
