import styled from "@emotion/styled";
import {Container} from "./Container";
import {Box} from "@mui/material";

const Wrapper = styled.div`
  height: 60px;
  background: #F7DC6F; 
`
const StyledContainer = styled(Container)`
  display: flex;
  height: 100%;
  align-items: center;
  font-size: 36px;
  color: #272323;
  font-family:roboto;
 `

export const Header = () => {
  return (
    <Box>
      <Wrapper>
        <StyledContainer>
              e-stroi.kz
          </StyledContainer>
           </Wrapper>
        
      </Box>
    )
}
