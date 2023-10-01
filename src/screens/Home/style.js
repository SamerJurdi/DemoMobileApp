import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {alignItems: "center", justifyContent: 'center'},
    textSection: {paddingVertical: '30%'},
    text: {fontSize: 30},
    categorySection: {
        paddingHorizontal: '5%',
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    }
});