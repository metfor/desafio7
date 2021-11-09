import { Box, BoxData, BoxSocialNetwork, Data, FooterContainer, SocialNetwork, Year } from "./styled";

export function Footer (){
    return(
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
                    29<br/>
                    08
                </Data>
                <SocialNetwork
                   className="facebook"
                   src="/../public/line.png"
                   alt="facebook"
                   width="2"
                   height="146" 
                
               / >
                   <Year>2021</Year>
            </BoxData>
        </FooterContainer>
    )
}