import { colors } from '../../styles/colors';
import styled from 'styled-components';
import Text from '../atoms/Text';
import LinkTag from '../atoms/LinkTag';
import ImageLogo from '../atoms/ImageLogo';
import LoginForm from '../molecules/LoginForm';


const GenericLoginContainer = styled.div`
    display: flex;
    flex-basis: 1;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${({ theme }) => theme.alternative_white};
    border-radius: 8px;
    height: 80vh;
    width: clamp(300px, 40vw, 775px);
    padding: 3.5vw;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14);
`

const LoginContainer = () => {
    return (
        <GenericLoginContainer
            data-testid='login-container'
        >
            <ImageLogo path='/images/toast-glass.png' />
            <Text size='1.8rem'>Acesse sua conta</Text>
            <LoginForm />
            <Text size='1rem' color={colors.black} fontWeight='400'>
                Para ter acesso a nossa plataforma de controle, entre em contato com um dos
                <LinkTag href='https://unbarqdsw2022-2.github.io/2022.2-CopoCheio/#/'
                    text=' nossos desenvolvedores.' />
            </Text>
        </GenericLoginContainer>
    )
}

export default LoginContainer;