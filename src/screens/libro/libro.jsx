import { FlatList, Button, Alert, View } from "react-native";
import { Container } from "../../components/container/container";
import { useCallback, useState } from "react";
import { ENDPOINTS } from "../../config/api";
import { useFocusEffect } from "@react-navigation/native";
import { styles } from "./libro.styles";
import { CardLibro } from "../../components/card/card.libro";

export const LibroScreen = ({ navigation }) => {
    const [libros, setLibros] = useState([]);

    const getLibros = async () => {
        try {
            const response = await fetch(ENDPOINTS.LIBRO);
            const json = await response.json();
            setLibros(json);
        } catch (error) {
            console.log("Error leyendo libros:", error);
        }
    }

    const deleteLibro = async (id) => {
        Alert.alert("Eliminar", "¿Seguro que quieres borrar este libro?", [
            { text: "Cancelar", style: "cancel" },
            { 
                text: "Eliminar", 
                onPress: async () => {
                    try {
                        const response = await fetch(`${ENDPOINTS.LIBRO}/${id}`, {
                            method: 'DELETE'
                        });
                        if (response.ok) {
                            getLibros();
                        }
                    } catch (error) {
                        console.log("Error eliminando:", error);
                    }
                }
            }
        ]);
    }

    useFocusEffect(
        useCallback(() => {
            getLibros();
        }, [])
    );

    return (
        <Container>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Nuevo Libro"
                    onPress={() => navigation.navigate("LibroForm")}
                    color="#e67e22"
                />
            </View>
            <FlatList
                data={libros}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
                renderItem={({ item }) => (
                    <CardLibro 
                        id={item.id}
                        nombre={item.titulo}
                        editorial={item.editorial} 
                        autor_id={item.autor_id} 
                        genero_id={item.genero_id} 
                        onDelete={() => deleteLibro(item.id)}
                        onUpdate={() => navigation.navigate("LibroForm", { libro: item })}
                    />
                )}
            />
        </Container>
    );
}