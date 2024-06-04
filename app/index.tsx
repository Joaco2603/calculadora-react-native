import { StatusBar, View } from "react-native";
import { Calculadora } from "./presentation/screens/Calculadora";
import { styles } from "./config/theme/app-theme";

export default function Index() {
  return (
    <View style={styles.background}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="black" />
      <Calculadora/>
    </View>
  );
}
