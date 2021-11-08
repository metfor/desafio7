import { BoxImg, BoxShare, ContainerHeader, ImgShare, LogoImg, Riot } from "./styled";

export function HeaderV(){
    return(
        <ContainerHeader>
        <BoxImg>
            <LogoImg
               className="logo"
               src="/../public/logo.svg"
               alt="logo"
               width="58"
               height="39" 
               
            />
           
        </BoxImg>
        <Riot>Riot Games</Riot>
        <BoxShare>
            <ImgShare
                className="logo"
                src="/../public/share.svg"
                alt="logo"
                width="25"
                height="25" 
            />
        </BoxShare>
    </ContainerHeader>
    )
}