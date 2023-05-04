import Image from "next/image";
import { Inter } from "next/font/google";
import Hrhr from "./components/Hrhr";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hrhr />
    </main>
  );
}
