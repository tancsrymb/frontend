import { Prompt } from 'next/font/google';
import Driver from '../components/Driver';

const prompt = Prompt({
  subsets: ['thai', 'latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: "Driver",
};

export default function Home() {
  return (
    <main className={`${prompt.className} min-h-screen flex items-center justify-center bg-black px-4`}>

      <div className="w-full container mx-auto py-8" style={{ marginTop: '20px' , backgroundColor : '#000000' }}>
        <Driver />
      </div>

    </main>
  );
}