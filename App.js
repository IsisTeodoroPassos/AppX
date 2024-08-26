import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TelaJavaScript from "./componentes/TelaJavaScript.js";
import TelaReact from "./componentes/TelaReact.js";
import TelaNode from "./componentes/TelaNode.js";

const Menu = createDrawerNavigator();




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

