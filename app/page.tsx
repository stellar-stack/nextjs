import Image from "next/image";
import Hello from "./components/hello";

export default function Home() {
  console.log('What am i? --SERVER/CLINT');

  return (
    <>
   <h1 className="text-3xl">Welcome to Nextjs</h1>
   <Hello />
    </>
  );
}  
