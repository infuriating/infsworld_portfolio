import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-container-svh justify-center items-center flex flex-col">
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

      <div className="flex flex-col gap-2">
        <p className="text-center text-lg md:text-2xl mb-4">
          My name is <b>Luca Kuiper</b> and I&apos;m a 20 year old{" "}
          <b>Full-Stack Developer</b> from The Netherlands
        </p>
        <p className="text-center text-md md:text-xl">
          This website was built to showcase my skills, projects and show you
          who I am!
        </p>
        <p className="text-center text-md md:text-xl">
          Feel free to learn more about me by pressing the buttons below!
        </p>
        <div className="flex gap-4 justify-center items-center mt-4">
          <Link
            href="/about"
            className="font-semibold bg-blue-400 px-8 py-2 rounded-lg text-neutral-100 transition-all duration-200 hover:bg-blue-500"
          >
            About me
          </Link>
          <Link
            href="/projects"
            className="font-semibold bg-red-300 px-8 py-2 rounded-lg transition-all duration-200 hover:bg-red-400"
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
