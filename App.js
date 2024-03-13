import { View } from "react-native";
import Btn1 from "./src/components/Btn1Component";
import Btn2 from "./src/components/Btn2Component";
import Btn3 from "./src/components/Btn3Component";
import { styles } from "./src/styles/StyleSheet";
import Home from "./src/Pages/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home>
        <Btn1 />
        <Btn2 />
        <Btn3 />
      </Home>
    </View>
  );
}
