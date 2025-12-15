import { View, Text, Button } from "react-native";
import { styles } from "./card.styles";

export const CardGenero = (props) => {
    return (
        <View style={styles.card}>
            <Text style={styles.titulo}>ID: {props.id}</Text>
            <Text style={styles.texto}>Genero: {props.nombre}</Text>
            <Text style={styles.texto}>Descripcion: {props.descripcion}</Text>
            <View style={styles.buttonContainer}>
                <Button 
                    color="#e74c3c" 
                    title="Eliminar" 
                    onPress={props.onDelete}
                />
                <Button 
                    color="#3498db" 
                    title="Actualizar" 
                    onPress={props.onUpdate}
                />
            </View>
        </View>
    );
};