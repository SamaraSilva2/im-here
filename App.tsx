import { StatusBar } from "react-native";

import { styles } from "./src/screens/Home/styles";
import Home  from "./src/screens/Home";


export default function App() {
  return (
    <> 
      <StatusBar 
        barStyle={"dark-content"}
        backgroundColor={styles.eventDate.color}
        translucent
      />
      <Home />
    </>
    
  );
}

