import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1A1A1A",
        height: "100%",
    },

    inputContainer: {
        width: "100%",
        flexDirection: "row",
        marginTop: -50,
        gap: 4,
        padding: 24
    },

    input: {
        flex: 1,
        padding: 16,
        backgroundColor: "#262626",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#0D0D0D",
        color: "#808080",
        fontSize: 16
    },

    button: {
        padding: 18,
        backgroundColor: "#1E6F9F",
        borderRadius: 6,
        width: 52,
        height: 52,
        alignItems: "center",
    },

    statusContainer: {
        padding: 24,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    statusItem: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center"
    },

    statusItemTextCreateds: {
        fontSize: 18,
        color: "#4EA8DE",
        fontWeight: "bold",
        
    },

    statusItemTextFinished: {
        fontSize: 18,
        color: "#8284FA",
        fontWeight: "bold",
    },

    itemsCount: {
        fontSize: 18,
        color: "#D9D9D9",
        fontWeight: "bold",
        padding: 4,
        backgroundColor: "#333333",
        borderRadius: 6,
        overflow: "hidden"
    },
})