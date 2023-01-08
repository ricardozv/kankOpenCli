import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import Fontisto from "react-native-vector-icons/Fontisto";

const HomeScreen = (props) => {
        return (
            <View>
              <Pressable
                style={styles.searchButton}
                onPress={() => console.warn('Search Btn clicked')}>
                <Fontisto name="search" size={25} color={"#f15454"} />
                <Text style={styles.searchButtonText}> Encontre Bares e Baladas</Text>
              </Pressable>
            </View>
          );
        };


export default HomeScreen;