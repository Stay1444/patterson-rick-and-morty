"use client";

import { createRangeArray } from "@/utils/Arrays";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PageControl({
  current,
  max,
  className,
}: {
  current: number;
  max: number;
  className?: string;
}) {
  const pageStart = Math.max(1, current - 3);
  const pageEnd = Math.min(max, current + 3);

  const buttons = createRangeArray(pageStart, pageEnd);

  return (
    <div className={`flex flex-row gap-2 ${className}`}>
      {buttons.map((x) => (
        <PageButton key={x} number={x} active={x == current} />
      ))}
    </div>
  );
}

function PageButton({ number, active }: { number: number; active: boolean }) {
  return (
    <Link
      href={`/characters/${number}`}
      className={`${
        active ? "bg-blue-300" : "cursor-pointer hover:bg-blue-400"
      } min-h-10 min-w-10 flex items-center justify-center rounded-full`}
    >
      <label className={`${!active ? "cursor-pointer" : ""}`}>{number}</label>
    </Link>
  );
}
