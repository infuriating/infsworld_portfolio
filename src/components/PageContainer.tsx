import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

interface PageContainerProps {
  children: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <>
      <Nav />
      <div className="w-[95%] ml-[2.5%] font-poppins">{children}</div>
      <Footer />
    </>
  );
}
