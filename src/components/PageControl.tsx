"use client";

import { createRangeArray } from "@/utils/Arrays";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div
      onClick={() => {
        const current = new URLSearchParams(Array.from(searchParams.entries()));

        current.set("page", number.toString());
        router.push(`${pathname}?${current.toString()}`);
      }}
      className={`${
        active ? "bg-blue-300" : "cursor-pointer hover:bg-blue-400"
      } min-h-10 min-w-10 flex items-center justify-center rounded-full`}
    >
      <label className={`${!active ? "cursor-pointer text-white" : ""}`}>
        {number}
      </label>
    </div>
  );
}
