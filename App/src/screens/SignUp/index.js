import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
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

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = () =>{

    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }

    return(
        <Container>
            <BarberLogo width="100%" height="160" />

            <InputArea>
            <SignInput
                    IconSvg={EmailIcon}
                    placeholder="Digite seu nome"
                    value={emailField}
                    onChangeText={t=>setNameField(t)}
                />
            <SignInput
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />

                <SignInput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />
                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
            </SignMessageButton>
           
        </Container>
    );
}