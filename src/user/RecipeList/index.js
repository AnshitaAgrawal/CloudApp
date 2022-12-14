import React, { useEffect, useState } from "react";
import { View, Text } from 'react-native';
import Hud from "../../../components/Hud";
import List from "../../../components/List";
import ListItem from "../../../components/ListItem";
import SearchBar from "../../../components/SearchBar";
import styles from "./styles";

const RecipeList = (props) => {

const [data, setData] = useState({})
const [serachWord, setSearchWord] = useState('')
const [showProgress, setShowProgress] = useState(false)

    useEffect(() => {
       callListofRecipe()
    }, [])

const callListofRecipe=()=>{
    setShowProgress(true)
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "10bc2beeacmshd0079b49693f125p1151f2jsnb6e0efb38ee7");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    fetch("https://tasty.p.rapidapi.com/recipes/list?from=0&size=20", requestOptions)
        .then(response => response.text())
        .then(result =>{
            setShowProgress(false)
            let dataofResult = JSON.parse(result)
            setData(dataofResult.results)
        } )
        .catch(error => {setShowProgress(false), console.log('error', error)});
}
    const renderListItem = ({ item }) => {
        return (
            <ListItem
                item={item}
                onPress={() => {
                    props.navigation.navigate("RecipeDetails", {item:item})

                }}
            />
        )

    }

   
    const searchFun=(text)=>{
        let dataofList = data
        console.log("data==========",data);
let filteredPersons = dataofList .filter(
    person => {
      return (
        person
        .name
        .toLowerCase()
        .includes(text.toLowerCase()) ||
        person
        .name
        .toLowerCase()
        .includes(text.toLowerCase())
      );
    }
  );
  console.log("filteredPersons===========",filteredPersons);
  setData(filteredPersons)
    }

    return (
        <View style={styles.containerStyle}>
            <SearchBar 
            value={serachWord}
            onChangeText={(text)=>{
                if(text !== ''){
                    setSearchWord(text)
                    searchFun(text)
                }
               else{
                callListofRecipe()
               }
            }}

            />
            <List
                data={data}
                renderItem={renderListItem}
                ItemSeparatorComponent={() => <View style={styles.dividerStyle} />}

            />
            <Hud
            showHud={showProgress}
            />
        </View>
    )
}

export default RecipeList;