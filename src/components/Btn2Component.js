// Importando itens necessários
import { TouchableOpacity } from "react-native";
import { styles } from "../styles/StyleSheet";
import { Text } from "react-native";

// Função do botão
export default function Btn2() {
  pressButton = () => {
    alert("Você pressionou o botão!");
  };
  // Botão
  return (
    <TouchableOpacity style={styles.Btn2} onPress={pressButton}>
      <Text>Sing in</Text>
    </TouchableOpacity>
  );
}
