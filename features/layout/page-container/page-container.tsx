import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { SidebarNavigation } from "../sidebar-navigation";
import { color, displayFont, textFont, space, breakpoint } from "@styles/theme";
import packageJson from "../../../package.json";

type PageContainerProps = {
  children: React.ReactNode;
  title: string;
  info: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${color("gray", 900)};

  @media (min-width: ${breakpoint("desktop")}) {
    flex-direction: row;
  }
`;

const Main = styled.main`
  flex: 1;
`;

const ContentContainer = styled.div`
  min-height: calc(
    100vh - 2 * ${space(8)} -
      ${({ theme }) => theme.size.headerHeight + theme.size.footerHeight}
  );
  margin-top: ${({ theme }) => theme.size.headerHeight};
  padding: ${space(8, 3)};
  background: white;

  @media (min-width: ${breakpoint("desktop")}) {
    min-height: calc(
      100vh - ${space(3)} - 2 * ${space(8)} -
        ${({ theme }) => theme.size.desktopFooterHeight}
    );
    margin-top: ${space(3)};
    padding: ${space(8)};
    border-top-left-radius: ${space(10)};
  }
`;

const Title = styled.h1`
  margin: ${space(0, 0, 1)};
  color: ${color("gray", 900)};
  ${displayFont("sm", "medium")}
`;

const Info = styled.div`
  margin-bottom: ${space(8)};
  color: ${color("gray", 500)};
  ${textFont("md", "medium")}
`;

const Footer = styled.div`
  padding: ${space(0, 8)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: ${space(6)};
  height: ${({ theme }) => theme.size.footerHeight};
  background-color: ${color("gray", 50)};

  @media (min-width: ${breakpoint("desktop")}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
    height: ${({ theme }) => theme.size.desktopFooterHeight};
  }
`;

const Version = styled.div`
  color: ${color("gray", 400)};
  ${textFont("md", "regular")};
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${space(6)};
`;

const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${color("gray", 500)};
  ${textFont("md", "regular")};
`;

const Logo = styled.img``;

const FooterItem = styled.div`
  @media (min-width: ${breakpoint("desktop")}) {
    &:last-of-type {
      order: -1;
    }
  }
`;

export function PageContainer({ children, title, info }: PageContainerProps) {
  // combine title in a single string to prevent below warning
  // "Warning: A title element received an array with more than 1 element as children."
  const documentTitle = `ProLog - ${title}`;
  return (
    <Container>
      <Head>
        <title>{documentTitle}</title>
        <meta name="description" content="Error monitoring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SidebarNavigation />
      <Main>
        <ContentContainer>
          <Title>{title}</Title>
          <Info>{info}</Info>
          {children}
        </ContentContainer>
        <Footer>
          <FooterItem>
            <FooterLinks>
              <Link href="#">Docs</Link>
              <Link href="#">API</Link>
              <Link href="#">Help</Link>
              <Link href="#">Community</Link>
            </FooterLinks>
          </FooterItem>
          <FooterItem>
            <Logo src="/icons/logo-small.svg" />
          </FooterItem>
          <FooterItem>
            <Version>Version {packageJson.version}</Version>
          </FooterItem>
        </Footer>
      </Main>
    </Container>
  );
}
