import Image from "next/image";
import Page from "./card/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[var(--Very-Dark-Blue)] text-[var(--White)]">
      <div className="flex items-center justify-center w-[90%]">
        <div className="flex items-center justify-center h-96 w-full bg-dark-blue text-[var(--White)]">
          <Page />
        </div>
      </div>
    </div>
  );
}
