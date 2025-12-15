import { View, Text, Button } from "react-native";
import { styles } from "./home.styles";

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al aplicativo</Text>
      
      <View style={styles.button}>
        <Button 
          onPress={() => navigation.navigate("Autor")}
          title="Ir a la pantalla Autor"
        />
      </View>
      
      <View style={styles.button}>
        <Button 
          onPress={() => navigation.navigate("Genero")}
          title="Ir a la pantalla Género"
        />
      </View>
      
      <View style={styles.button}>
        <Button 
          onPress={() => navigation.navigate("Libro")}
          title="Ir a la pantalla Libro"
        />
      </View>
    </View>
  );
};