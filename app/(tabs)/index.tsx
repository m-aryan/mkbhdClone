import { ImageCard } from "@/components/imageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpapers } from "@/hooks/useWallpapers";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function explore() {

    const wallpapers = useWallpapers();

    return <SafeAreaView style={{ flex: 1 }}>
        <ParallaxScrollView headerBackgroundColor={{ dark: "black", light: "white" }} headerImage={<Image style={{ flex: 1 }} source={{ uri: wallpapers[0]?.url ?? "" }} />}>
            <View style={styles.container}>
                <ThemedView style={styles.innerContainer}>
                    <FlatList
                        data={wallpapers.filter((_, index) => index % 2 === 0)}
                        renderItem={({ item }) => <View style={styles.imageContainer}>
                            <ImageCard wallpaper={item} />
                        </View>}
                        keyExtractor={item => item.name}
                    />
                </ThemedView>
                <ThemedView style={styles.innerContainer}>
                    <FlatList
                        data={wallpapers.filter((_, index) => index % 2 === 1)}
                        renderItem={({ item }) => <View style={styles.imageContainer}>
                            <ImageCard wallpaper={item} />
                        </View>}
                        keyExtractor={item => item.name}
                    />
                </ThemedView>
            </View>
        </ParallaxScrollView>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding: 10,
    },
    imageContainer: {
        paddingVertical: 10,
    }
});
