import { StatusBar } from "react-native";

import { styles } from "./src/components/Participant/styles";
import Home  from "./src/screens/Home";


export default function App() {
  return (
    <> 
      <StatusBar 
        barStyle={"dark-content"}
        backgroundColor={styles.button.backgroundColor}
        translucent
      />
      <Home />
    </>
    
  );
}

