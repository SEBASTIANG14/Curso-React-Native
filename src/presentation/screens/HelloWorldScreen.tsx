import { StyleSheet, Text, View } from "react-native"

interface Props {
    name?: string;

}




export const HelloWorldScreen = ({name}: Props) => {
  return (
    <View style={styles.container}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.tittle}>Hello, {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    tittle:{
        fontSize: 45,
        textAlign: 'center',
        color: 'black',
        padding: 20,
    },
})

