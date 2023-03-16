import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Content>

            </Content>
        </Container>
    );
};


const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    heigth: 100vh;
`;


const Content = styled.div`
    margin-bottom: 18vh;
    width: 100%;
    position: relative;
    min-heigth: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    heigth: 100%;
`;


const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;


const CTA = styled.div`
    margin-bottom: 2px;
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center
    margin-right: auto;   
`;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-heigth: 1px;
  display: block;
  width: 100%;
`;



export default Login;