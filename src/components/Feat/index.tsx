import {
  Box,
  BoxData,
  BoxSocialNetwork,
  Data,
  FooterContainer,
  Line,
  SocialNetwork,
  Year,
} from "./styled";

export function Footer() {
  return (
    <FooterContainer>
      <BoxSocialNetwork>
        <Box>
          <SocialNetwork
            className="intagram"
            src="/../public/instagram.png"
            alt="istagram"
            width="20"
            height="20"
          />
        </Box>
        <Box>
          <SocialNetwork
            className="twitter"
            src="/../public/twitter.png"
            alt="twitter"
            width="20"
            height="20"
          />
        </Box>
        <Box>
          <SocialNetwork
            className="facebook"
            src="/../public/facebook.png"
            alt="facebook"
            width="20"
            height="20"
          />
        </Box>
      </BoxSocialNetwork>
      <BoxData>
        <Data>
          29
          <br />
          08
        </Data>
        <Line />
        <Year>2021</Year>
      </BoxData>
    </FooterContainer>
  );
}
