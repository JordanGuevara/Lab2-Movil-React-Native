import { View, Text, Button } from "react-native";
import { styles } from "./card.styles";

export const CardLibro= (props) => {
    return (
        <View style={styles.card}>
            <Text style={styles.titulo}>ID: {props.id}</Text>
            <Text style={styles.texto}>Titulo: {props.titulo}</Text>
            <Text style={styles.texto}>Editorial: {props.editorial}</Text>
            <Text style={styles.texto}>ID_Autor: {props.autor_id}</Text>
            <Text style={styles.texto}>ID_Genero: {props.genero_id}</Text>
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