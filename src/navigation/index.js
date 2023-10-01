import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from "../screens";

const Drawer = createDrawerNavigator();

export default function () {

    return (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    </NavigationContainer>
    )
}