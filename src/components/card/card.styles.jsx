import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        width: "100%",
        backgroundColor: "#ffffff",
        padding: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 6,
        marginBottom: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#e8e8e8",
    },
    titulo: {
        fontSize: 18,
        color: "#2c3e50",
        fontWeight: "700",
        marginBottom: 4,
    },
    texto: {
        fontSize: 16,
        color: "#5d6d7e",
        marginBottom: 3,
        lineHeight: 22,
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "space-between",
        gap: 10,
    }
});