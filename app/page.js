import { Prompt } from 'next/font/google';
import Carousel from './components/carousel';
import Card from './components/Card';

const prompt = Prompt({
  subsets: ['thai', 'latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: "Formula 1",
};

export default function Home() {
  return (
    <main className={`${prompt.className} min-h-screen flex flex-col items-center justify-start bg-black px-4 pt-12` }>
      
      <div className=" container " style={{ marginTop: '25px', backgroundColor: '#000000' }}> 
        <Card />
      </div>

      <div className="w-full container mx-auto py-8" style={{ marginTop: '20px' , backgroundColor : '#000000' }}>
        <Carousel />
      </div>
    
    </main>
  );
}