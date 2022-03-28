import React from "react";
import { 
    Container,
    CustomButton,
    CustomButtonText,
    InputArea,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,


} from './styles';

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

import SignInput from "../../components/SignInput";

export default ()=>{
    return(
        <Container>
            <BarberLogo width="100%" height="160"/>

            <InputArea>
            <SignInput
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    // value={emailField}
                    // onChangeText={t=>setEmailField(t)}
                />

                <SignInput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    // value={passwordField}
                    // onChangeText={t=>setPasswordField(t)}
                    // password={true}
                />
                <CustomButton>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>
           
        </Container>
    );
}