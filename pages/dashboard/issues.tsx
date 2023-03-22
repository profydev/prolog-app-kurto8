import { PageContainer } from "@features/layout";
import { IssueList } from "@features/issues";
import type { NextPage } from "next";
import styled from "styled-components";
import { space } from "@styles/theme";
import { Input, Select } from "@features/ui";
import { useState } from "react";
import { IssueLevel } from "@api/issues.types";

const FilterOptions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${space(10)};
  width: 100%;
  margin: ${space(8, 0, 6)};
`;

const IssuesPage: NextPage = () => {
  const [statusFilter, setStatusFilter] = useState("");
  const [levelFilter, setLevelFilter] = useState("");
  const [projectFilter, setProjectFilter] = useState("");

  return (
    <PageContainer
      title="Issues"
      info="Overview of errors, warnings, and events logged from your projects."
    >
      <FilterOptions>
        <Select
          placeholder="Status"
          selectItems={["Resolved", "Unresolved"]}
          setParentState={setStatusFilter}
        />
        <Select
          placeholder="Level"
          selectItems={[IssueLevel.error, IssueLevel.warning, IssueLevel.info]}
          setParentState={setLevelFilter}
        />
        <Input
          placeholder="Project Name"
          iconSrc="/icons/search.svg"
          setParentState={setProjectFilter}
        />
      </FilterOptions>
      <IssueList
        filterOptions={{
          status: statusFilter,
          level: levelFilter,
          project: projectFilter,
        }}
      />
    </PageContainer>
  );
};

export default IssuesPage;
