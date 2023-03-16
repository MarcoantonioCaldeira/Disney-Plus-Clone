import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Content>Content</Content>
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
    box-sizing: border-box
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    heigth: 100%;
`;



export default Login;