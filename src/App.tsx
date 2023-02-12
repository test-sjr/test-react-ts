import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

export const Container = styled.div`
    font-size: 30px;
`;

export const NoFont = styled.div``;

export const Bold = styled.div``;

export const Regular = styled.div`
    font-family: Noto Sans-Regular;
`;

function App() {
    return (
        <Container>
            <NoFont>안녕하세요, BASIC FONT 입니다.</NoFont>
            <Bold>안녕하세요, BOLD 입니다.</Bold>
            <Regular>안녕하세요, REGULAR 입니다.</Regular>
            <NoFont>안녕하세요, REGULAR 입니다.</NoFont>
        </Container>
    );
}

export default App;
