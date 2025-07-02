import { Prompt } from 'next/font/google';

const prompt = Prompt({
  subsets: ['thai', 'latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: "Product",
};

export default function Home() {
  return (
    <main className={`${prompt.className} min-h-screen flex items-center justify-center bg-white px-4`}>
      <h1 className="text-4xl text-[#a1866f] tracking-wide text-center">
        ERROR : 404 <br />
        go find some error lmao
      </h1>
    </main>
  );
}