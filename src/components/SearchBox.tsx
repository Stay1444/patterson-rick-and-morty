"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox({ className }: { className?: string }) {
  const [filter, setFilter] = useState("");
  const router = useRouter();
  return (
    <div className={`${className} gap-2 flex flex-row`}>
      <input
        placeholder="Buscar..."
        className="rounded p-2"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button
        className="p-2 bg-blue-100 hover:bg-blue-200 duration-100 rounded"
        onClick={() => {
          // muy sucio, pero bueno. habria que cambiar esto para que con un ContextProvider o similares se pudiese decirle al SearchBox donde redirigir.
          // O incluir la busqueda dentro del CharacterList component directamente.
          if (window.location.pathname.includes("compare")) {
            router.push(window.location.pathname + "/search/" + filter);
          } else {
            router.push(`/characters/search/${filter}`);
          }
          router.refresh();
        }}
      >
        Buscar
      </button>
    </div>
  );
}
