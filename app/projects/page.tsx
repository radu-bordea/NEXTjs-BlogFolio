import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/types";
import { notFound } from "next/navigation";

import PaginationWrapper from "@/components/PaginationWrapper";

export async function getData(): Promise<{ projects: Project[] }> {
  const res = await fetch("http://localhost:8000/projects", {
    cache: "no-store",
  });
  if (!res.ok) {
    notFound();
  }
  const data: Project[] = await res.json();
  return { projects: data };
}

const ProjectsPage = async () => {
  const { projects } = await getData();

  return (
    <>
      <PaginationWrapper projects={projects}/>
    </>
  );
};

export default ProjectsPage;
