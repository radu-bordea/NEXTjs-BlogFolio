"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/types";
import Pagination from "./Pagination";
import ProjectCard from "./ProjectCard";
import { Button } from "./ui/button";

type PaginationWrapperProps = {
  projects: Project[];
  categories: string[];
};

const PaginationWrapper = ({
  projects,
  categories,
}: PaginationWrapperProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const projectsPerPage = 4;

  // 1️⃣ Filter first
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === selectedCategory
        );

  // 2️⃣ Recalculate total pages after filtering
  const totalPages = Math.ceil(
    filteredProjects.length / projectsPerPage
  );

  // 3️⃣ Paginate filtered results
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;

  const currentProjects = filteredProjects.slice(
    indexOfFirst,
    indexOfLast
  );



  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">🚀 Projects</h2>

      {/* Category Filter */}
      <div className="mb-6 flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => { setSelectedCategory(category); setCurrentPage(1)}}
            className={`px-4 py-2 hover:bg-gray-700 hover:text-gray-100 cursor-pointer rounded-lg border transition ${
              selectedCategory === category
                ? "bg-gray-700 text-gray-100"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {currentProjects.length > 0 ? (
          currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default PaginationWrapper;