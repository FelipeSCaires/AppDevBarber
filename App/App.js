import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import UserCcontextProvider from './src/contexts/UserContext';
import MainStack from './src/stacks/MainStack';


export default () => {
  return(
    <UserCcontextProvider>
      <NavigationContainer>
        <MainStack>
          
        </MainStack>
      </NavigationContainer>
    </UserCcontextProvider>
   
  )
}