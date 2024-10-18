import { Text, View } from "react-native";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Library" component={LibraryScreen} />
            <Tab.Screen name="Liked" component={LikedScreen} />
            <Tab.Screen name="Suggested" component={SugggestedScreen} />
        </Tab.Navigator>
    )

}

function LibraryScreen() {
    return <View>
        <Text>Hi there from home screen!!</Text>
    </View>
}

function LikedScreen() {
    return <View>
        <Text>Hi from setting screen!!</Text>
    </View>
}

function SugggestedScreen() {
    return <View>
        <Text>Hi from Suggested screen!!</Text>
    </View>
}