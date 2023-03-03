import { useQuery } from "@tanstack/react-query";
import { getProjects } from "@api/projects";
import { Project } from "@api/projects.types";

export function useGetProjects() {
  return useQuery<Project[], Error>(["projects"], getProjects);
}
