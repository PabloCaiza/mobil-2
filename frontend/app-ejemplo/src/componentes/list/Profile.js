import React from "react";
import {View, StyleSheet, Image, Text, Linking, TouchableWithoutFeedback, Button} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const instagram = <Icon name={'instagram'} size={30} color={'black'}/>
const portafolio_url = <Icon name={'globe'} size={30} color={'black'}/>
const Profile = ({task, closeProfile}) => {

    return (
        <View style={styles.item}>
            <View style={styles.supimage}>
                <View style={styles.leftSide}>
                    <Image source={{uri: task.urls.raw}} style={styles.image}
                    />
                </View>
                <View style={styles.rightSide}>
                    <Text style={{color: 'blue'}} onPress={() => Linking.openURL(task.user.portfolio_url)}>
                        {task.user.name}
                    </Text>
                    <View style={styles.redes}>
                        <Text style={{color: 'blue'}}
                              onPress={() => Linking.openURL(task.user.social.instagram_username)}>
                            {instagram}
                        </Text>
                        <Text style={{color: 'blue'}} onPress={() => Linking.openURL(task.user.portafolio_url)}>
                            {portafolio_url}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerKpi}>
                <View style={styles.kpiR}>
                    <Image source={require('../../../assets/img.png')}
                           style={styles.image2}
                    />
                </View>
            </View>
            <Button title={'Cerrar'} onPress={closeProfile}/>

        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    supimage: {
        width: '100%',
        height: '100%',
        flexBasis: '70%',
        display: 'flex',
        flexDirection: 'row'
    },
    leftSide: {
        flexBasics: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    rightSide: {
        flexBasis: '50%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    redes: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    containerKpi: {
        width: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    kpiR: {
        width: 20
    },
    image2: {
        width: 20,
        height: 20
    }

});
export default Profile