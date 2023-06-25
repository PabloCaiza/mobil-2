import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, TextInput, TouchableHighlight, Button, FlatList, Modal} from "react-native";


const User = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [users, setUsers] = useState([])
    const [showEdit, setShowEdit] = useState(false)
    const [selectedUser, setSelectedUser] = useState({})

    useEffect(() => {
        fetchData()
    }, [])

    const Item = ({item}) => {
        return (
            <View style={styles.itemContainer}>
                <View>
                    <Text style={styles.itemText}>{item.firstName}</Text>
                </View>
                <View>
                    <Text style={styles.itemText}>{item.lastName}</Text>
                </View>
                <View>
                    <Button title={'editar'} onPress={() => {
                        setSelectedUser(item)
                        setShowEdit(true)
                    }}/>
                </View>
                <View>
                    <Button title={'eliminar'} onPress={() => deleteUser(item)}/>
                </View>
            </View>
        )
    }

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/nombres')
            const jsonData = await response.json()
            setUsers(jsonData)
        } catch (e) {
            console.error('error', e)
        }

    }

    const deleteUser = async (item) => {
        try {
            const response = await fetch(`http://localhost:3000/nombres/${item.id}`, {
                method: 'DELETE'
            })
            if (response.status === 204) {
                setUsers(users.filter(i => i.id !== item.id))
            }
        } catch (e) {
            console.error('error', e)
        }

    }

    const editUser = async () => {
        try {
            const response = await fetch(`http://localhost:3000/nombres/${selectedUser.id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    firstName: selectedUser.firstName,
                    lastName: selectedUser.lastName
                })
            })
            if (response.status === 204) {
                const index = users.findIndex(i => i.id === selectedUser.id)
                users[index] = {
                    id: selectedUser.id,
                    firstName: selectedUser.firstName,
                    lastName: selectedUser.lastName
                }
                setUsers(users)
                setShowEdit(false)
            }
        } catch (e) {

            console.error('error', e)
        }

    }
    const createUser = async () => {
        try {
            const response = await fetch('http://localhost:3000/nombres', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({firstName, lastName})
            })
            if (response.ok) {
                setFirstName('')
                setLastName('')
                const responseJSON = await response.json()
                setUsers([...users, responseJSON])
            }


        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <TextInput value={firstName} onChangeText={setFirstName} placeholder="First Name" style={styles.input}/>
            <TextInput value={lastName} onChangeText={setLastName} placeholder="Last Name" style={styles.input}/>
            <Button title="Create" color="#841584" onPress={createUser}/>
            <View>
                {users.length > 0 && <View style={styles.itemContainer}>
                    <View>
                        <Text style={styles.itemTitle}>Nombre</Text>
                    </View>
                    <View>
                        <Text style={styles.itemTitle}>Apellido</Text>
                    </View>
                    <View>
                        <Text style={styles.itemTitle}>Editar</Text>
                    </View>
                    <View>
                        <Text style={styles.itemTitle}>Eliminar</Text>
                    </View>
                </View>}
                <FlatList data={users}
                          keyExtractor={i => i.id.toString()}
                          renderItem={({item}) => <Item item={item}/>}/>
                <Modal transparent={true} animationType={'slide'}
                       visible={showEdit}
                >
                    <View style={styles.centerView}>
                        <View style={{
                            height: 300,
                            backgroundColor: 'white',
                            width: '100%',
                            borderRadius: 25,
                            padding: 20
                        }}>
                            <TextInput value={selectedUser.firstName} onChangeText={(value) => {
                                setSelectedUser({...selectedUser, firstName: value})
                            }} placeholder="First Name" style={styles.input}/>
                            <TextInput value={selectedUser.lastName} onChangeText={(value) => {
                                setSelectedUser({...selectedUser, lastName: value})
                            }} placeholder="Last Name" style={styles.input}/>
                            <Button title={'Edit'} onPress={editUser}/>

                            <Button title={'Cancelar'} onPress={() => setShowEdit(false)}/>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            padding: 10,
            display: 'flex'
        },
        itemContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10
        },
        input: {
            backgroundColor: 'white',
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            margin: 10
        },
        itemText: {
            fontSize: 20,
            fontWeight: 'normal'
        },
        itemTitle: {
            fontSize: 20,
            fontWeight: 'bold'
        },
        centerView: {
            alignItems: 'center',
            justifyContent: 'center',
            margin: 30,
            flex: 1,
        }
    }
)
export default User