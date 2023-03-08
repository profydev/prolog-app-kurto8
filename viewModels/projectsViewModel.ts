import { Project, ProjectStatus, ProjectLanguage } from "../api/projects.types";

export default class ProjectsViewModel {
  public id: string;
  public name: string;
  public language: string;
  public numIssues: number;
  public numEvents24h: number;
  public status: string;

  constructor({
    id,
    name,
    language,
    numIssues,
    numEvents24h,
    status,
  }: Project) {
    (this.id = id),
      (this.name = name),
      (this.language = language),
      (this.numIssues = numIssues),
      (this.numEvents24h = numEvents24h),
      (this.status = status);
  }

  getStatusEnumValue() {
    switch (this.status) {
      case "error":
        return ProjectStatus.critical;
      case "info":
        return ProjectStatus.stable;
      default:
        return ProjectStatus.warning;
    }
  }

  getLanguageEnumValue() {
    switch (this.language) {
      case ProjectLanguage.react:
        return "React";
      case ProjectLanguage.node:
        return "Node.js";
      case ProjectLanguage.python:
        return "Python";
    }
  }
}
