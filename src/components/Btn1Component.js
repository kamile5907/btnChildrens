import { TouchableOpacity } from "react-native";
import { styles } from "../styles/StyleSheet";
import { Text } from "react-native";

export default function Btn1() {
  pressButton = () => {
    alert("Você pressionou o botão!");
  };
  return (
    <TouchableOpacity styles={styles.Btn1} onPress={pressButton}>
      <Text>Login in</Text>
    </TouchableOpacity>
  );
}
