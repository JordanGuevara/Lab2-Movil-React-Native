import { FlatList, Button, Alert, View } from "react-native";
import { Container } from "../../components/container/container";
import { useCallback, useState } from "react";
import { ENDPOINTS } from "../../config/api";
import { useFocusEffect } from "@react-navigation/native";
import { styles } from "./genero.styles";
import { CardGenero } from "../../components/card/card.genero";

export const GeneroScreen = ({ navigation }) => {
    const [generos, setGeneros] = useState([]);

    const getGeneros = async () => {
        try {
            const response = await fetch(ENDPOINTS.GENERO);
            const json = await response.json();
            setGeneros(json);
        } catch (error) {
            console.log("Error leyendo géneros:", error);
        }
    }

    const deleteGenero = async (id) => {
        Alert.alert("Eliminar", "¿Borrar género?", [
            { text: "Cancelar", style: "cancel" },
            { 
                text: "Eliminar", 
                onPress: async () => {
                    await fetch(`${ENDPOINTS.GENERO}/${id}`, { method: 'DELETE' });
                    getGeneros();
                }
            }
        ]);
    }

    useFocusEffect(useCallback(() => { getGeneros(); }, []));

    return (
        <Container>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Nuevo Género" 
                    onPress={() => navigation.navigate("GeneroForm")}
                    color="#9b59b6"
                />
            </View>
            <FlatList
                data={generos}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
                renderItem={({ item }) => (
                    <CardGenero 
                        id={item.id}
                        nombre={item.nombre} 
                        descripcion={item.descripcion}
                        onDelete={() => deleteGenero(item.id)}
                        onUpdate={() => navigation.navigate("GeneroForm", { genero: item })}
                    />
                )}
            />
        </Container>
    );
}