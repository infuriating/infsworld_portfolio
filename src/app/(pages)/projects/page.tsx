import PageContainer from "@/components/PageContainer";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import Image from "next/image";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });
  const { data: projects } = await supabase.from("projects").select("*");

  projects?.sort((a, b) => a.id - b.id);

  // columns: id, date (timestamp), title, description, image (name but lowercase), tools (text[])

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3 place-items-center font-poppins">
      {projects?.map((project) => (
        <div
          key={project.id}
          className="bg-primary w-full h-full px-8 py-4 flex flex-col gap-2 justify-center max-w-3xl rounded-lg relative"
        >
          <div className="absolute bg-neutral-900 w-full h-full blur-2xl left-0 top-0 -z-10"></div>
          <p className="text-neutral-400 text-sm">
            Made at{" "}
            <span className="font-bold">{project.date.substring(10, 0)}</span>
          </p>
          <Image
            className="rounded-lg blur-sm saturate-0 hover:blur-none hover:saturate-100 transition-all duration-500"
            src={`/images/projects/${project.image}.png`}
            alt={project.title}
            width={500}
            height={200}
          />
          <p className="font-bold text-2xl py-1">{project.title}</p>
          <p>{project.information}</p>
          <p className="text-lg font-semibold">Tools used:</p>
          <div className="flex gap-1">
            {project.tools.map((tool: string) => (
              <Image
                key={project.tools}
                src={`/images/tools/${tool.toLowerCase()}.png`}
                alt={tool}
                width={50}
                height={50}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
