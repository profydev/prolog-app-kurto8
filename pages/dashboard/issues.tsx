import { PageContainer } from "@features/layout";
import { IssueList } from "@features/issues";
import type { NextPage } from "next";
import styled from "styled-components";
import { space } from "@styles/theme";
import { Input, Select } from "@features/ui";

const FilterOptions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${space(10)};
  width: 100%;
  margin: ${space(8, 0, 6)};
`;

const IssuesPage: NextPage = () => {
  return (
    <PageContainer
      title="Issues"
      info="Overview of errors, warnings, and events logged from your projects."
    >
      <FilterOptions>
        <Select
          placeholder="Resolution"
          selectItems={["Resolved", "Unresolved"]}
        />
        <Select
          placeholder="Level"
          selectItems={["Error", "Warning", "Info"]}
        />
        <Input placeholder="Project Name" iconSrc="/icons/search.svg" />
      </FilterOptions>
      <IssueList />
    </PageContainer>
  );
};

export default IssuesPage;
