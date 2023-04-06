import { Tabs } from "expo-router";

function MyTabs() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: 'Home' }} />
            <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
        </Tabs>
    );
}

export default MyTabs;