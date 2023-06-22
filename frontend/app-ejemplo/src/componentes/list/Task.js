import {StatusBar} from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation';

export default function Task({task}) {
    return (
      <View style={styles.item}>
          <View style={styles.itemLeft}>
              <Image source={{uri:task.url.raw}} style={styles.image}/>
              <Text style={styles.itemText}>
                  {task.description}
              </Text>

          </View>
      </View>
    );
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:'#FFF',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    image:{
        width:100,
        height:100,
        borderRadius:50,
        marginRight:15

    },
    itemText:{
        maxWidth:'80%'
    }
});
