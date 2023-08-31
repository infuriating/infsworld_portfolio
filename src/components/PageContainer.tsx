import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return <div className="w-[95%] ml-[2.5%] font-poppins">{children}</div>;
}
