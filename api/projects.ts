import { axios } from "./axios";
import type { Project } from "./projects.types";
import ProjectsViewModel from "./projectsViewModel";

const ENDPOINT = "/project";

export async function getProjects() {
  const { data } = await axios.get<Project[]>(ENDPOINT);
  const dataViewModels = data.map((project) => new ProjectsViewModel(project));
  return dataViewModels;
}
