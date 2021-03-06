import styled from "styled-components";
import image from "next/image";
export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const BoxData = styled.div`
  right: 20px;
  z-index: 1;
  bottom: -25px;
  position: absolute;
  display: flex;
`;
export const BoxSocialNetwork = styled.div`
  bottom: 0;
  position: absolute;
  margin-left: 150px;
  display: flex;
`;
export const Box = styled.div`
  margin-left: 20px;
`;
export const Year = styled.h1`
  font-family: OpenSans;
  font-size: 30px;
  font-weight: 400;
  color: #ff4656;
  line-height: 40px;
  letter-spacing: 5%;
  margin-top: 113px;
`;
export const SocialNetwork = styled(image)``;
export const Data = styled.h1`
  font-size: 80px;
  font-weight: 700;
  line-height: 74px;
  color: white;
`;
export const Line = styled.div`
  margin-top: 60px;
  width: 1px;
  height: 146px;
  background-color: #ff4656;
`;
