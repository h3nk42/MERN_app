import React, {useContext} from "react";
import styled from 'styled-components';
import {DarkModeContext} from "../hooks/DarkModeContext";

const Layout = styled.div`
  background-color: ${props => (
          props.darkMode ? "#111" : "transparent"
  )};

  h2, button {
    color: ${props => props.darkMode ? "#cfcfcf" : "black"};
  }
`;

export default props => {
    const {darkMode} = useContext(DarkModeContext);

    return (
        <Layout darkMode={darkMode}>
            {props.children}
        </Layout>
    )
}