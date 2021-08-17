import React from "react";
import styled from "@emotion/styled";

const Layout = (props) => {
  return <Container>{props.children}</Container>;
};

export default Layout;

const Container = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: left;

  & > h2 {
    font-family: "Alegreya Sans SC", sans-serif;
    font-size: 30px;
    font-weight: 700;
  }
`;
