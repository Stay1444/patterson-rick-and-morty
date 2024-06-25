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
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {characters.map((x) => {
        return <CharacterCard key={x.id} character={x} sendTo={sendTo} />;
      })}
    </div>
  );
}
