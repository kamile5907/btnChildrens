import Btn1 from "./src/components/Btn1Component";
import Btn2 from "./src/components/Btn2Component";
import Btn3 from "./src/components/Btn3Component";
import Home from "./src/Pages/Home";
import { styles } from "./src/styles/StyleSheet";

export default function App() {
  return (
    <Home>
      <Btn1 text="log out" />
      <Btn1 text="log in" />
      <Btn2 text="sing in" />
      <Btn2 text="start" />
      <Btn3
        source={require("../btnChildrens/src/assets/images/entrar.png")}
        style={styles.Img}
      />
      <Btn3
        source={require("../btnChildrens/src/assets/images/clicar.png")}
        style={styles.Img}
      />
    </Home>
  );
}
