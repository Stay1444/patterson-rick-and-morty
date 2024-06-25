import Link from "next/link";

export default function Card({
  children,
  className,
  href,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  href?: string;
}>) {
  const classNameCompleted = `${className} p-2 border-gray-400 bg-gray-100 shadow-md border rounded-lg ${
    href ? "cursor-pointer" : ""
  }`;
  if (href) {
    return (
      <Link href={href} className={classNameCompleted}>
        {children}
      </Link>
    );
  }

  return <div className={classNameCompleted}>{children}</div>;
}
