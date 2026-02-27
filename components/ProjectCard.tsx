import type { Project } from "@/types";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      className="block transform transition duration-300 hover:scale-[1.02]"
      href={`/projects/${project.id}`}
    >
      <div className="bg-gray-200 text-gray-700 rounded-lg overflow-hidden shadow-sm transition hover:shadow-lg">
        <div className="relative w-full h-50">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-5">
          <h3 className="text-3xl font-semibold text-blue-400 mb-1">
            {project.title}
          </h3>
          <p className="text-sm mb-2">{project.description}</p>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>{project.category}</span>
            <span>{new Date(project.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
