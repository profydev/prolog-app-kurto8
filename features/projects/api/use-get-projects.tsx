import { useQuery } from "@tanstack/react-query";
import { getProjects } from "@api/projects";
import ProjectsViewModel from "@api/projectsViewModel";

export function useGetProjects() {
  return useQuery<ProjectsViewModel[], Error>(["projects"], getProjects);
}
