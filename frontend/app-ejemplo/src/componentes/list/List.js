import React, {useEffect, useState} from "react";
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from "react-native";
import Task from "./Task";


const ListComponent = () => {
    const [taskItems, setTaskItems] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.unsplash.com/photos/?client_id=tmXX2qlmRsZbsX7eXhvWsY1wfSpKeQj6fU9EQN0fkAw')
            const jsonData = await response.json()
            console.log(jsonData)
            setTaskItems(jsonData)
        } catch (e) {
            console.error('error', e)
        }
    }
    const Item = ({task, i}) => {
        return (
            <TouchableOpacity style={styles.perItem} key={i} onPress={() => {
                getProfile(task)
            }}>
                <Task task={task}/>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            {taskItems &&
                <View style={styles.container}>
                    <View style={styles.taskWrapper}>
                        <Text style={styles.sectionTitle}>Se listan los perfiles</Text>
                        <View style={styles.items}>
                            <FlatList
                                data={taskItems}
                                renderItem={({item, i}) => (
                                    <Item task={item} i={i}/>
                                )}
                            >
                            </FlatList>
                        </View>
                    </View>

                </View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    taskWrapper: {},
    sectionTitle: {},
    items: {},
    perItem:{

    }


});
export default ListComponent