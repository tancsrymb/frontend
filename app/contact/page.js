import { Prompt } from 'next/font/google';

const prompt = Prompt({
  subsets: ['thai', 'latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: "Contact",
};

export default function Home() {
  return (
    <main className={`${prompt.className} min-h-screen flex items-center justify-center bg-#000000 px-4 text-white`}>
      <h1 className="text-4xl text-[#a1866f] tracking-wide text-center">
        IG : lewandowsga
      </h1>
    </main>
  );
}