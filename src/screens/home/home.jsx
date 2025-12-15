import { View, Text, Button } from "react-native";
import { styles } from "./home.styles";

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la pantalla principal</Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          onPress={() => navigation.navigate("Autor")}
          title="Ir a Autor"
          color="#2980b9"
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button 
          onPress={() => navigation.navigate("Genero")}
          title="Ir a Género"
          color="#27ae60"
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button 
          onPress={() => navigation.navigate("Libro")}
          title="Ir a Libro"
          color="#c0392b"
        />
      </View>
    </View>
  );
};