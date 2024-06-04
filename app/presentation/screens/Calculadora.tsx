import { colors, styles } from "@/app/config/theme/app-theme"
import { View, Text } from "react-native"
import { Button } from "../components/Button"
import { AllButtons } from "../components/AllButtons"


export const Calculadora = () => {
  return (
    <View style={styles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text style={styles.mainResult}>1500</Text>
        <Text style={styles.subResult}>15</Text>
      </View>
      <AllButtons/>
    </View>
  )
}
