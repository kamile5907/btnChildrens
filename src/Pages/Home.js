import { styles } from "../styles/StyleSheet";
import { View } from "react-native";

const Home = ({ children }) => {
  return <View style={styles.image}>{children}</View>;
};
export default Home;
