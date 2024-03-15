// Importando itens necessários
import { TouchableOpacity } from "react-native";
import { styles } from "../styles/StyleSheet";
import { Image } from "react-native";

// Função do botão
export default function Btn3() {
  pressButton = () => {
    alert("Você pressionou o botão!");
  };
  // Botão
  return (
    <TouchableOpacity style={styles.Btn3} onPress={pressButton}>
      <Image source={require("../assets/images/Botão.png")} />
    </TouchableOpacity>
  );
}
