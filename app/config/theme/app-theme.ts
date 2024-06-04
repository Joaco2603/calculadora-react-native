import { StyleSheet } from "react-native";


export const colors = {
    dark_gray: '#2D2D2D',
    light_gray: '#9B9B9D',
    orange: '#FF9427',

    text_primary: 'white',
    text_secundary: '#666666',
    background: '#000000'
}



export const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: colors.background,
    },
    calculatorContainer:{
        flex: 1,
        padding: 20,
        justifyContent: 'flex-end'
    },
    mainResult:{
        color: colors.text_primary,
        fontSize: 70,
        textAlign: 'right',
        marginBottom: 10,
        fontWeight: '300'
    },
    subResult:{
        color: colors.text_secundary,
        fontSize: 40,
        textAlign: 'right',
    },
    button:{
        height: 80,
        width: 80,
        margin: 5,
        backgroundColor: colors.dark_gray,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    buttonText:{
        textAlign: 'center',
        padding: 10,
        fontSize: 20,
        color: 'white',
        fontWeight: '300'
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    }
})