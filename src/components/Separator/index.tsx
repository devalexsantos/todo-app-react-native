import { View } from "react-native";
import { styles } from "./styles";

export function Separator(){
    return(
        <View style={styles.separatorContainer}>
            <View style={styles.separator} />
        </View>
    )
}