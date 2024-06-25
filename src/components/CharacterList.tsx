"use client";
import { Character } from "@/api/Models";
import CharacterCard from "./CharacterCard";
import { useMemo, useState } from "react";
import Link from "next/link";

export function CharacterList({
  characters,
  sendTo,
}: {
  characters: Character[];
  sendTo?: string;
}) {
  const [filter, setFilter] = useState("");

  const displayCharacters = useMemo(() => {
    return characters.filter((x) => {
      if (filter.length == 0) return true;

      if (x.name.toLowerCase().includes(filter.toLowerCase())) return true;
      if (x.gender.toLowerCase().includes(filter.toLowerCase())) return true;
      if (x.location.name.toLowerCase().includes(filter.toLowerCase()))
        return true;
      if (x.species.toLowerCase().includes(filter.toLowerCase())) return true;

      return false;
    });
  }, [filter, characters]);

  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {displayCharacters.map((x) => {
        return <CharacterCard key={x.id} character={x} sendTo={sendTo} />;
      })}
    </div>
  );
}

function FilterControls({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (filter: string) => void;
}) {
  return (
    <div className="bg-blue-300 rounded p-3 flex flex-row gap-2">
      <h1>Personajes</h1>
      <input
        className="ml-auto rounded"
        value={filter}
        onSubmit={() => alert("hello")}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter"
      />
    </div>
  );
}
