import { Link, useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Settings() {

    const router = useRouter();

    return (
        <View style={settings.container}>
            <Button title="Home" onPress={() => { router.push('/home') }}></Button>
        </View>
    );
}

const settings = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});