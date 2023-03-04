import styled from "styled-components";
import { breakpoint, space } from "@styles/theme";
import { ProjectCard } from "../project-card";
import { Spinner } from "@features/ui";
import { useGetProjects } from "../../api/use-get-projects";

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: ${space(6)};

  // reset list styles
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: ${breakpoint("desktop")}) {
    grid-template-columns: repeat(auto-fit, 400px);
  }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 9.5rem;

  @media (min-width: ${breakpoint("desktop")}) {
    padding-top: 8rem;
  }
`;

export function ProjectList() {
  const { data, isLoading, isError, error } = useGetProjects();

  if (isLoading) {
    return (
      <SpinnerWrapper>
        <Spinner data-cy="spinner" />
      </SpinnerWrapper>
    );
  }

  if (isError) {
    console.error(error);
    return <div>Error: {error.message}</div>;
  }

  return (
    <List>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </List>
  );
}
