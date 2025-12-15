import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#2c3e50',
    },
    loadingText: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 16,
        color: '#7f8c8d',
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 16,
        color: '#95a5a6',
        fontStyle: 'italic',
    },
    listContent: {
        paddingBottom: 20,
    }
});