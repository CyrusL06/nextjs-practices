import Link from "next/link";

export default function Home() {
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>

      {/* THis approach habe a flaw */}
      {/* Because now we have another page its not single page */}
      {/* Next Js allows us to  */}
      <p>
        {/* <a href="/about">About Us</a>{" "} */}
        {/* The way we use Anchor in Next */}
        <Link href="/about">About Us Next</Link>
      </p>

      <p></p>
    </main>
  );
}
