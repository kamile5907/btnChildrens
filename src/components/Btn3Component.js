import { TouchableOpacity } from "react-native";
import { styles } from "../styles/StyleSheet";
import { Image } from "react-native";

export default function Btn3() {
  pressButton = () => {
    alert("Você pressionou o botão!");
  };
  return (
    <TouchableOpacity styles={styles.container} onPress={pressButton}>
      <Image source={require("../assets/images/Botão.png")} />
    </TouchableOpacity>
  );
}
