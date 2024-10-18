import { Slot } from "expo-router";
import { Text, View } from "react-native";

export default function RootLayout() {
	return <View>
		<View>
			<Text style={{ color: "white" }}>Go Back</Text>
		</View>
		<Slot />
	</View>
}