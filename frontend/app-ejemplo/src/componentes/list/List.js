import React, {useEffect, useState} from "react";
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from "react-native";


const ListComponent=()=>{
    const [taskItems,setTaskItems]=useState([]);

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async ()=>{
        try {
            const response=await fetch('https://api.unsplash.com/photos/?client_id=ZXjOAAdwefwfYGtyhjJmAerkWnGDxNNnEwTlnHkSqk4')
            const jsonData=await response.json()
            setTaskItems(jsonData)
        }catch (e){
            console.error('error',e)
        }
    }
    const Item=({task,i})=>{
        return (
            <TouchableOpacity style={styles.peritem} key={i} onPress={()=>{
                getProfile(task)}}>

            </TouchableOpacity>
        )
    }
    return (
        <View>
            {taskItems.length!==0?
                <View style={styles.container}>
                    <View style={styles.taskWrapper}>
                        <Text style={styles.sectionTitle}></Text>
                        <View style={styles.items}>
                            <FlatList
                             data={taskItems}
                             renderItem={({item,i})=>{
                                 <Item task={item} i={i}/>
                             }}
                            >
                            </FlatList>
                        </View>
                    </View>

                </View>
                :
                <View>
                </View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default ListComponent