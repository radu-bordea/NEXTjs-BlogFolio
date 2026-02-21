import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/types";
import { notFound } from "next/navigation";

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
    <div>
      <h2 className="mb-4">🚀 ProjectsPage</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
