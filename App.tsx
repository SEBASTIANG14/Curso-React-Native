import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { HelloWorldScreen } from "./src/presentation/screens/HelloWorldScreen"
import {CounterScreen} from "./src/presentation/screens/CounterScreen"
import { PaperProvider } from "react-native-paper"
import { CounterM3Screen } from "./src/presentation/screens/CounterM3Screen"
import { BoxObjectModelScreen } from "./src/presentation/screens/BoxObjectModelScreen"
import { DimensionScreen } from "./src/presentation/screens/DimensionScreen"




export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style = {{flex: 1}}>
        {/*<HelloWorldScreen name= 'Sebastian Gorostieta'/>*/}
        {/*<CounterScreen/>*/}
        {/*<CounterM3Screen/>*/}
        {/*<BoxObjectModelScreen/>*/}
        <DimensionScreen/>
      </SafeAreaView>
    </PaperProvider>
  )
}



