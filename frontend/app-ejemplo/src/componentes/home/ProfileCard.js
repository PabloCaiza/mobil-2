import React from "react";
import {View, Text} from "react-native";


const ProfileCard = () => {
    const user = {
        avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        coverPhoto: "https://wallpapers.com/images/hd/profile-picture-background-10tprnkqwqif4lyv.jpg",
        name: "Pablo caiza"
    }
    return (
        <View style={styles.container}>
            <Image source={{uri:user.coverPhoto}} style={styles.coverPhoto}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:'50%',
        alignItems:'center' //flex y grid
    },
    coverPhoto:{
        width:'100%',
        height:200,
        resizeMode:'cover'

    }
});
export default ProfileCard