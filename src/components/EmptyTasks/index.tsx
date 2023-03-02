import { Clipboard } from "phosphor-react-native";
import { View, Text } from "react-native";
import { styles } from "./styles";

export function EmptyTasks(){
    return(
        <View style={styles.emptyContainer}>
            <Clipboard size={100} color="#333333" />
            <Text style={styles.text}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.subText}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}