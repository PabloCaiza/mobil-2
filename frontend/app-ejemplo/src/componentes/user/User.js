import React, { useState } from "react";
import { View,Text,StyleSheet, TextInput, TouchableHighlight,Button, FlatList } from "react-native";




const User=()=>{

    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [users, setUsers]=useState([])

    const Item =()=>{
        return (
            <View>
                
            </View>
        )
    }
    const createUser=()=>{
        //TODO: SEND post call to create user
        console.log(firstName,lastName)
        setUsers([...users,{
            id:users.length+1,
            firstName,
            lastName
        }])

    }
    return (
        <View style={styles.container}>
            <TextInput value={firstName} onChangeText={setFirstName} placeholder="First Name" style={styles.input}/>
            <TextInput value={lastName} onChangeText={setLastName} placeholder="Last Name" style={styles.input}/>
            <Button title="Create" color="#841584" onPress={createUser}/>
            <FlatList
                data={users}
                renderItem={({item})=>{}}
                keyExtractor={item=>item.id}
            />
        </View>
    )


}

const styles=StyleSheet.create(
    {
        container:{
            justifyContent:'center',
            alignItems:'center',
        },
        input:{
            backgroundColor:'white',
            borderWidth:1,
            borderRadius:10,
            padding:10,
            margin:10
        }
    }
)
export default User