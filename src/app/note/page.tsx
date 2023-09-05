import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function page() {
  const supabase = createServerComponentClient({ cookies });
  const { data: notes } = await supabase.from("notes").select("*");

  notes?.reverse();

  return (
    <>
      <div className="flex justify-center items-center">
        <Link href={"/create-note"}>
          <p className="bg-primary px-6 py-2 rounded-lg w-max text-center font-medium mb-6 text-xl transition-all duration-300 hover:bg-neutral-800">
            Create a note
          </p>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 place-items-center font-poppins">
        {notes?.map((note) => (
          <div
            key={note.id}
            className="bg-primary px-8 py-4 flex flex-col gap-2 justify-center max-w-3xl rounded-lg relative"
          >
            <div className="absolute bg-neutral-900 w-full h-full blur-2xl left-0 top-0 -z-10"></div>
            <p className="text-neutral-400 text-sm">
              Posted at{" "}
              <span className="font-bold">
                {note.created_at.substring(0, 10)}
              </span>
            </p>
            <p className="text-neutral-200 text-xl py-1">
              Posted by{" "}
              <span className="font-bold text-white">{note.name}</span>
            </p>
            <p>{note.note}</p>
          </div>
        ))}
      </div>
    </>
  );
}
