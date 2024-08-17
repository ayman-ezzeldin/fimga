'use client'
import Aym from "@/components/Aym";
import { Room } from "./Room";
import Live from "@/components/Live";

export default function Page() {
  return (
    <div>
      <Live />
    </div>
    // <Room>
    //   <Aym/>
    //   <Live />
    // </Room>
  );
}