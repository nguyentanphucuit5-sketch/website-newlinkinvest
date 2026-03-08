"use client";
import Background from "@/components/Home/Background";
import Directors from "@/components/Home/Directors";
import Partner from "@/components/Home/Partner";
import ProjectNic from "@/components/Home/ProjectNic";
import ItemProject from "@/components/Home/ItemProject";
import { useRef } from "react";

export default function Home() {
  const itemProjectRef = useRef(null);
  const scrollToItemProject = () => {
    itemProjectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Background onExploreClick={scrollToItemProject} />
      <ProjectNic />
      <div ref={itemProjectRef}>
        <ItemProject />
      </div>
      <Directors />
      <Partner />
    </div>
  );
}
