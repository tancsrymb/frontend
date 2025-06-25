import { Prompt } from 'next/font/google';
import Navigation from "./components/carousel";
import Carousel from './components/carousel';



const prompt = Prompt({
  subsets: ['thai', 'latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className={`${prompt.className} min-h-screen flex items-center justify-center bg-white px-4`}>
      <Carousel></Carousel>
      <h1 className="text-4xl text-[#a1866f] tracking-wide text-center">
        Mr.Jittiphat Junthakee
      </h1>
    </main>
  );
}
