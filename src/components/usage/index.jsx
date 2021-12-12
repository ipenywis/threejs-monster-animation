import React from "react";
import styled from "styled-components";

const UsageContainer = styled.div`
  position: fixed;
  top: 1em;
  left: 2em;
  background-color: rgba(0, 0, 0, 0.6);
  width: 200px;
  min-height: 150px;
  border-radius: 0.5em;
  padding: 4px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #fff;
`;

export function Usage() {
  return (
    <UsageContainer>
      <h1>Usage</h1>
      <ul>
        <li>
          Use <b>W/S</b> for walking forward/Backward
        </li>
        <li>
          Use <b>A/D</b> for Rotating on axis
        </li>
        <li>
          Use <b>Space</b> To Dance
        </li>
        <li>
          Use <b>Shift + Walk</b> For running (Sprintting)
        </li>
      </ul>
      <h2 style={{ textAlign: "center", margin: "5px" }}>Credits</h2>
      <b>Islem Maboud aka CoderOne</b>
    </UsageContainer>
  );
}
