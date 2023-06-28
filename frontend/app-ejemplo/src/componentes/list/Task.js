import {Image, StyleSheet, Text, View} from 'react-native';

export default function Task({task}) {
    return (
      <View style={styles.item}>
          <View style={styles.itemLeft}>
              <Image source={{uri:task.urls.regular}} style={styles.image}/>
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
