import type { Project } from "@/types";
import { notFound } from "next/navigation";
import ProjectCard from "./ProjectCard";

export async function getData(): Promise<{ projects: Project[] }> {
  const res = await fetch(`${process.env.NEXT_API_URL}/projects`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  const data: Project[] = await res.json();
  return { projects: data.filter((project) => project.featured === true) };
}

const FeaturedProjects = async () => {
  const { projects } = await getData();

  console.log(projects);
  

  return (
    <section>
      <h2 className="text-2xl font-bold m-6 text-gray-700">
        ⭐ Featured Projects
      </h2>
      
      {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))
          ) : (
            <p>No projects found.</p>
          )}
        </div>
    </section>
  );
};

export default FeaturedProjects;
