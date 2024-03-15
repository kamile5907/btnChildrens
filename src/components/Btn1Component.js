// importando itens necessários
import { TouchableOpacity } from "react-native";
import { styles } from "../styles/StyleSheet";
import { Text } from "react-native";

// Função do botão
export default function Btn1() {
  pressButton = () => {
    alert("Você pressionou o botão!");
  };
  // Botão
  return (
    <TouchableOpacity style={styles.btn1} onPress={pressButton}>
      <Text>Login in</Text>
    </TouchableOpacity>
  );
}
