import type { Project } from "@/types";
import { notFound } from "next/navigation";
import PaginationWrapper from "@/components/PaginationWrapper";

export async function getData(): Promise<{ projects: Project[] }> {
  const res = await fetch(`${process.env.NEXT_API_URL}/projects`, {
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

  const categories: string[] = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  return <PaginationWrapper projects={projects} categories={categories} />;
};

export default ProjectsPage;
