import React, {useState} from 'react';
import { TouchableOpacity,ScrollView, Button, TextInput, Text, View, S
tyleSheet, Keyboard } from 'react-native';
export default function App() {
 const [item, setItem] = useState("")
 const [getlist, setList] = useState([])
 const [editItem, setEditItem] = useState(0)
 const updateList = () =>
 {
 setList(list => getlist.map(element => element.key === editItem ?
{key: element.key, data:item} : element));
 setItem("")
 setEditItem(0)
 }
 const updateItems = (item) =>
 {
 setItem(item.data)
 setEditItem(item.key)
 }
 const additems = () =>
 {
 setList([...getlist,{key:Math.random().toString(), data:item}])
 setItem("")
 Keyboard.dismiss()
 }
 const deleteItem = (key) =>
 {
 setList(list => getlist.filter(element => element.key != key))
 
 }
25
 return (
 <View style={{ alignItems:'center'}}>
 <Text style={{fontSize:40}}>
 To Do List
 </Text>
 <TextInput style={{borderBottomWidth:1, padding:10, margin:10}} pl
aceholder=" Enter Text Here " value={item} onChangeText={setItem}>
 </TextInput>
 <View style={{ flexDirection:"row"}}>
 <View style={{marginRight:10}}>
 <Button title={editItem===0 ? "Add item": "Update item"} onPress={
editItem===0 ? additems: updateList} disabled={item.length<=0}>
 </Button>
 </View> 
 </View>
 <Text> {item}
 </Text>
 <ScrollView style={{width:'100%'}}>
 {getlist.map((item, index) =>
 <TouchableOpacity key={item.key} activeOpacity={0.5} onPress =
{()=>updateItems(item)}> 
 <View style ={{flexDirection:'row', width:'80%', alignSelf:'c
enter', backgroundColor:'red', margin:10, borderRadius:50, justifyCon
tent:'space-between'}} key={item.key}>
 
 <Text style={{fontSize:20, margin:10, color:'white'}}> 
 {index + 1}# { item.data} {item.key} 
 </Text>
 <TouchableOpacity onPress={() => deleteItem(item.key)}>
 <View style={{backgroundColor:'black', borderRadius:50,padding
:5, justifyContent:'center'}}>
 <Text style={{fontSize:20, margin:5, color:'white', fontWeight
:'bold'}}>X
 </Text>
 </View>
 </TouchableOpacity>
 
 </View>
 </TouchableOpacity> 
 )}
 </ScrollView>
 </View>
 );
}
26
const styles = StyleSheet.create({
});