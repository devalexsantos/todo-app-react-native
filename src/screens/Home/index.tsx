import { StatusBar } from 'expo-status-bar';
import { PlusCircle } from 'phosphor-react-native';
import { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { EmptyTasks } from '../../components/EmptyTasks';
import { Header } from '../../components/Header';
import { Separator } from '../../components/Separator';
import { Task } from '../../components/Task';
import { styles } from './styles';

interface Tasks{ 
    id: number
    title: string,
    completed: boolean
}

export function Home() {
    const [ inputText, setInputText ] = useState<string>('')

    const [ tasks, setTasks ] = useState<Tasks[]>([])

    const completedToDos = tasks.filter((task)=>{return task.completed === true});

    const handleAddTask = () => {
        if(inputText === ''){
            return Alert.alert("Por favor digite um texto")
        }
        setTasks(prevState => [...prevState, { id: prevState.length + 1, title: inputText, completed: false}])
        setInputText('')
    }

    const handleRemoveTask = (id: number) => {
        setTasks( prevState => prevState.filter(task => task.id !== id))
    }

    const handleCompleteTask = (id: number) => {        
        const newTasks = tasks.map((task) => {
            if(task.id === id){
                task.completed = !task.completed
            }
            return task
        })
        
        setTasks(newTasks)
    }


    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Header />
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder='Adicionar nova tarefa'
                    placeholderTextColor="#808080"
                    value={inputText}
                    onChangeText={setInputText}
                />
                <TouchableOpacity onPress={handleAddTask}  style={styles.button}><PlusCircle size={16} color="white"/></TouchableOpacity>
            </View>

            <View style={styles.statusContainer}>
                <View style={styles.statusItem}>
                    <Text style={styles.statusItemTextCreateds}>
                        Criadas
                    </Text>
                    <Text style={styles.itemsCount}>{tasks.length}</Text>
                </View>

                <View style={styles.statusItem}>
                    <Text style={styles.statusItemTextFinished}>
                        Concluídas
                    </Text>
                    <Text style={styles.itemsCount}>{completedToDos.length}</Text>
                </View>
            </View>

            <Separator />


                <FlatList 
                    data={tasks}
                    renderItem={({item}) => (
                        <Task 
                            id={item.id}
                            title={item.title}
                            completed={item.completed}
                            onRemove={handleRemoveTask}
                            onCompleted={handleCompleteTask}
                        />
                    )}
                    ListEmptyComponent={()=> (
                        <EmptyTasks />
                    )}
                />
        </View>
    )
}