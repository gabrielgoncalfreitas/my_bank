import { useState } from "react";
import { FlatList, RefreshControl, ScrollView, StyleSheet, Text, View } from "react-native";
import * as Haptics from 'expo-haptics';
import { Get } from '../../api/api';

export default function Home() {

    const [pokemon, setPokemon] = useState();
    const [refreshing, setRefreshing] = useState(false);
    const [color, setColor] = useState('#fff');

    function load() {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Selection);
        setRefreshing(true);
        setTimeout(async () => {
            setColor('#' + Math.floor(Math.random() * 16777215).toString(16));
            setPokemon(await Get('/pokemon'));
            setRefreshing(false);
        }, 2000);
    }

    const Item = ({ title }) => (
        <View style={[index.item, { backgroundColor: color }]}>
            <Text style={index.title}>{title.charAt(0).toUpperCase() + title.slice(1)}</Text>
        </View>
    );

    return (
        <FlatList refreshControl={<RefreshControl refreshing={refreshing} onRefresh={load} />}
            data={pokemon}
            renderItem={({ item }) => <Item title={item.name} />}
        />
    );
}

const index = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    }
});