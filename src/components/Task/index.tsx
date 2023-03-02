import { CheckCircle, Circle, Trash } from "phosphor-react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface TasksProps{ 
    id: number
    title: string,
    completed: boolean
    onRemove: (id: number) => void
    onCompleted: (id: number) => void
}

export function Task({id, title, completed, onRemove, onCompleted}: TasksProps) {
    return(
        <View style={styles.container}>
            <View style={styles.taskContainerItem}>
                <TouchableOpacity>
                    {completed 
                    ?
                    <TouchableOpacity onPress={()=> onCompleted(id)}> 
                        <CheckCircle size={22} color="#5E60CE" weight="fill" />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={()=> onCompleted(id)}>
                        <Circle size={22} color="#4EA8DE" />
                    </TouchableOpacity>
                    }
                </TouchableOpacity>
                
                    {completed
                    ?
                        <Text style={styles.taskTextCompleted}>{title}</Text>
                    :
                        <Text style={styles.taskTextNotCompleted}>{title}</Text>
                    }
                
                <TouchableOpacity onPress={() => onRemove(id)}>
                    <Trash size={22} color="#808080"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}