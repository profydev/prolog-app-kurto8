import styled from "styled-components";
import { breakpoint, space, color, textFont } from "@styles/theme";
import { ProjectCard } from "../project-card";
import { Spinner } from "@features/ui";
import { useGetProjects } from "../../api/use-get-projects";
import { useState } from "react";

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

const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${color("error", 300)};
  border-radius: 0.5rem;
  background-color: ${color("error", 25)};
  padding: 1rem;
`;

const MessageWraper = styled.div`
  display: flex;
  align-items: center;
  gap: ${space(3)};
`;

const Message = styled.div`
  ${textFont("sm", "medium")};
  color: ${color("error", 700)};
`;

const TryAgain = styled.button`
  cursor: pointer;
  ${textFont("sm", "medium")};
  color: ${color("error", 700)};
  border: none;
  background-color: transparent;
`;

export function ProjectList() {
  const [, setNeedsReload] = useState(false);
  const { data, isLoading, isError, error } = useGetProjects();

  console.log("data", data);

  if (isLoading) {
    return (
      <SpinnerWrapper>
        <Spinner data-cy="projects-loading-spinner" />
      </SpinnerWrapper>
    );
  }

  if (isError) {
    console.error(error);
    return (
      <Error data-cy="error-fetching-projects">
        <MessageWraper>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/alert-circle.svg" alt="error" />
          <Message>There was a problem while loading the project data</Message>
        </MessageWraper>
        <TryAgain onClick={() => setNeedsReload(true)}>Try again</TryAgain>
      </Error>
    );
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
