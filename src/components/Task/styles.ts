import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        justifyContent: "center",
        alignItems: "center",
    },

    taskContainerItem: {
        width: "95%",
        flexDirection: "row",
        gap: 20,
        justifyContent: "space-between",
        marginBottom: 8,
        backgroundColor: "#262626",
        borderWidth: 1,
        borderColor: "#808080",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 20,
        alignItems: "center"
    },

    taskTextNotCompleted: {
        fontSize: 16,
        color: "#F2F2F2",
        flexWrap: 'wrap',
        flexShrink: 1,
    },

    taskTextCompleted: {
        fontSize: 16,
        color: "#F2F2F2",
        flexWrap: 'wrap',
        flexShrink: 1,
        textDecorationLine: "line-through"

    }
})