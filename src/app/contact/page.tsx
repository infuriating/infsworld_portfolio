import PageContainer from "@/components/PageContainer";
import ContactToggle from "@/components/contact/ContactToggle";
import React, { useState } from "react";

export default function page() {
  return (
    <PageContainer>
      <ContactToggle />
    </PageContainer>
  );
}
