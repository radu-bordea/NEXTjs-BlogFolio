'use client'

import { Project } from "@/types";
import Pagination from "./Pagination";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

const PaginationWrapper = ({projects}:{projects:Project[]}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  // Calculate total pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Get current pages projects
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);

    return (     <>
      <h2 className="mb-4">🚀 ProjectsPage</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage}/>
    </> );
}
 
export default PaginationWrapper;