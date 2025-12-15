import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    formContainer: {
        gap: 15,
        marginTop: 20,
        padding: 20,
    },
    input: {
        borderWidth: 1.5,
        borderColor: '#ddd',
        padding: 14,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 12,
        fontSize: 16,
        color: '#333',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    buttonWrapper: {
        marginTop: 10,
        borderRadius: 8,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    }
});