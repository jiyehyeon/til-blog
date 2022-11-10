import React from "react";
import styled from "@emotion/styled";

const FooterWrapper = styled.footer`
  /* Box & Display */
  width: 100%;
  padding: 25px 75px;
  position: absolute;
  bottom: 0;

  /* Color */
  background-color: #fff;

  /* Border */
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  /* Text */
  font-size: 12px;
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
`;

const Footer = () => {
  return (
    <FooterWrapper>Copyright © Jiye Hyeon All rights reserved.</FooterWrapper>
  );
};

export default Footer;
