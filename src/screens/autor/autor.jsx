import { FlatList, Button, Alert, View, Text } from "react-native";
import { Container } from "../../components/container/container";
import { useCallback, useState } from "react";
import { Card } from "../../components/card/card";
import { ENDPOINTS } from "../../config/api";
import { useFocusEffect } from "@react-navigation/native";
import { styles } from "./autor.styles";

export const AutorScreen = ({ navigation }) => {
    const [autores, setAutores] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAutores = async () => {
        setLoading(true);
        try {
            const response = await fetch(ENDPOINTS.AUTOR);
            const json = await response.json();
            setAutores(json);
        } catch (error) {
            console.log("Error al leer autores:", error);
            Alert.alert("Error", "No se pudieron cargar los autores");
        } finally {
            setLoading(false);
        }
    }

    const deleteAutor = async (id) => {
        Alert.alert(
            "Eliminar Autor", 
            "¿Estás seguro de que quieres eliminar este autor?",
            [
                { 
                    text: "Cancelar", 
                    style: "cancel",
                    onPress: () => console.log("Cancelado")
                },
                { 
                    text: "Eliminar", 
                    style: "destructive",
                    onPress: async () => {
                        try {
                            const response = await fetch(`${ENDPOINTS.AUTOR}/${id}`, {
                                method: 'DELETE'
                            });
                            if (response.ok) {
                                Alert.alert("Éxito", "Autor eliminado correctamente");
                                getAutores();
                            } else {
                                Alert.alert("Error", "No se pudo eliminar el autor");
                            }
                        } catch (error) {
                            console.log("Error al eliminar:", error);
                            Alert.alert("Error", "Ocurrió un error al eliminar");
                        }
                    }
                }
            ]
        );
    }

    useFocusEffect(
        useCallback(() => {
            getAutores();
        }, [])
    );

    return (
        <Container>
            <View style={styles.header}>
                <Text style={styles.title}>📚 Autores</Text>
                <Button 
                    title="+ Nuevo Autor"
                    onPress={() => navigation.navigate("AutorForm")}
                    color="#2ecc71"
                />
            </View>
            
            {loading ? (
                <Text style={styles.loadingText}>Cargando autores...</Text>
            ) : autores.length === 0 ? (
                <Text style={styles.emptyText}>No hay autores registrados</Text>
            ) : (
                <FlatList
                    data={autores}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContent}
                    renderItem={({ item }) => (
                        <Card 
                            id={item.id}
                            nombre={item.nombre}
                            nacionalidad={item.nacionalidad}
                            onDelete={() => deleteAutor(item.id)}
                            onUpdate={() => navigation.navigate("AutorForm", { autor: item })}
                        />
                    )}
                />
            )}
        </Container>
    );
}