import PageContainer from "@/components/PageContainer";
import Tool from "@/components/about/Tool";
import React from "react";

export default function page() {
  return (
    <PageContainer>
      <p className="text-4xl font-bold">Hey!</p>
      <p className="text-lg mt-2 mb-1 font-medium">
        My name is <b>Luca Kuiper</b>, also known as inf, or infuriating, or
        whatever you want to call me.
      </p>
      <p>
        I&apos;m a 20 year old <b>full-stack developer</b> from the Netherlands
        who also loves to design stuff in his free time.
      </p>
      <Tool />
    </PageContainer>
  );
}
