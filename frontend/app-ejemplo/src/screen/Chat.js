import React, {useState} from "react";
import {TextInput, View, StyleSheet, Text, Button} from "react-native";
import {OpenAIApi, Configuration} from 'openai'

const configuration = new Configuration({
    apiKey: 'paste key'
})

const openai = new OpenAIApi(configuration)


const Chat = () => {
    const [prompt, setPrompt] = useState('')
    const [result, setResult] = useState('')

    const getResultFromOpenApi = async () => {
        try {
            const completion = await openai.createCompletion({
                model: 'text-davinci-003',
                prompt:prompt,
                temperature: 0.1
            })
            console.log(completion)
            setResult(completion.data.choices[0].text)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {'Ingrese Pregunta'}
            </Text>
            <TextInput style={styles.input} value={prompt} onChangeText={setPrompt}/>
            <Button title={'Generate Result'} onPress={getResultFromOpenApi}/>
            <Text style={styles.text}>
                {result}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default Chat