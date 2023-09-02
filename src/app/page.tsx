import PageContainer from "@/components/PageContainer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center gap-2 md:gap-4 mb-4">
        <p className="text-2xl md:text-5xl font-bold mb-1">Welcome to</p>
        <Image
          className="block md:hidden"
          src={"/images/infsworld_border.png"}
          alt="infsworld"
          width={150}
          height={150}
        />
        <Image
          className="hidden md:block"
          src={"/images/infsworld_border.png"}
          alt="infsworld"
          width={250}
          height={150}
        />
      </div>

      <p>
        My name is <b>Luca Kuiper</b> and I&apos;m a 20 year old{" "}
        <b>Full-Stack Developer</b> from The Netherlands
      </p>
    </div>
  );
}
