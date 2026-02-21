import type { Project } from "@/types";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

async function getProject(id: string): Promise<Project> {
  const res = await fetch(`http://localhost:8000/projects/${Number(id)}`, {
    cache: "no-store",
  });

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("Failed to fetch project");
  }

  return res.json();
}

const ProjectDetailsPage = async (props: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await props.params;
  const project = await getProject(id);

  return (
    <>
      <Link
        href="/projects"
        className="flex items-center text-blue-400 hover:text-blue-500 mb-6 transition"
      >
        <FaArrowLeft className="mr-2">Back To Projects</FaArrowLeft>
      </Link>

      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div className="relative w-full h-80 rounded-lg shadow-md">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-lg shadow-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-700 mb-4">
            {project.title}
          </h1>
          <p className="text-gray-600 text-sm mb-4">
            {new Date(project.date).toLocaleDateString()} * {project.category}
          </p>
          <p className="text-gray-500 mb-6">{project.description}</p>
          <Link href={project.url} target="_blank" className="inline-block text-gray-600 bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded transition">View Live Site ➽</Link>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsPage;
