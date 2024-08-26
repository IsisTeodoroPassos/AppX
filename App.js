import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaJavaScript from "./componentes/TelaJavaScript.js";
import TelaReact from "./componentes/TelaReact.js";
import TelaNode from "./componentes/TelaNode.js";

const Menu = createBottomTabNavigator();




export default function App() {
  return (
   <NavigationContainer>
    <Menu.Navigator>

      <Menu.Screen name="Java Script" component={ TelaJavaScript }/>
      <Menu.Screen name="React" component={ TelaReact}/>
      <Menu.Screen name="Node" component={ TelaNode }/>

    </Menu.Navigator>
   </NavigationContainer>
  );
}

