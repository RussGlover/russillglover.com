import Link from "./Link";
import React from "react";
import styled from "styled-components";
const Ul = styled.ul`
  list-style-type: none;
  border-right: 2px ridge #8ef9f3;
  margin: 13px 0;
  padding-right: 30px;
`;

const Li = styled.li`
  margin: 8px 0;
`;

const Linkbar = () => (
  <nav>
    <Ul>
      <Li>
        <Link to="/">Home</Link>
      </Li>
      <Li>
        <Link to="https://github.com/RussGlover">Github</Link>
      </Li>
      <Li>
        <Link to="mailto:hello@russillglover.com">Email</Link>
      </Li>
    </Ul>
  </nav>
);

export default Linkbar;
