import ApiHeader from "@/components/apiComponents/ApiHeader";
import ApiMainContent from "@/components/apiComponents/ApiMainContent";
import React from "react";

function ApiPage() {
  return (
    <main className="max-w-7xl mx-auto">
      <ApiHeader />
      <ApiMainContent />
    </main>
  );
}

export default ApiPage;
