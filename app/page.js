import { Prompt } from 'next/font/google';
import Carousel from './components/carousel';
import Card from './components/Card';

const prompt = Prompt({
  subsets: ['thai', 'latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: "FERRARI",
};

export default function Home() {
  return (
    <main className={`${prompt.className} min-h-screen flex flex-col items-center justify-start bg-white px-4 pt-12`}>
      <Carousel />

      <div className="w-full container mx-auto py-8" style={{ marginTop: '50px' }}>
        <Card />
      </div>

      <h1 className="text-4xl text-[#a1866f] tracking-wide text-center mt-8">
        Mr.Jittiphat Junthakee
      </h1>
    </main>
  );
}