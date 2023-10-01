import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from "./style";

export default function () {
    return <View style={style.container}>
        <View style={style.textSection}>
            <Text style={style.text}>Welcome, Select a Category!</Text>
        </View>
        <View style={style.categorySection}>
            <Icon size={100} onPress={() => console.log('redhat')} name="redhat" />
            <Icon size={100} onPress={() => console.log('tshirt')} name="tshirt-crew-outline" />
            <Icon size={100} onPress={() => console.log('briefcase')} name="briefcase" />
            <Icon size={100} onPress={() => console.log('cake')} name="cake-variant-outline" />
            <Icon size={100} onPress={() => console.log('bow')} name="bow-arrow" />
        </View>
    </View>
}