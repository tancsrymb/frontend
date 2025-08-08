import { Prompt } from 'next/font/google';
import Card from './Card';

const prompt = Prompt({
  subsets: ['thai', 'latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: "Formula 1",
};

export default function Home() {
  return (
    <main className={`${prompt.className} min-h-screen flex flex-col items-center justify-start  px-4 pt-12` }>

      <div className="w-full container mx-auto py-8" style={{ marginTop: '20px', backgroundColor: '#1a1a1a' }}> 
        <Card />
      </div>
    
    </main>
  );
}