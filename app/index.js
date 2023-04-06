import { Image } from 'expo-image';
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Fontisto } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function index() {

    const router = useRouter();

    return (
        <>
            <StatusBar style="light" />

            <View style={{ height: 50, backgroundColor: '#dc0000' }}>
                <SafeAreaView style={login.container}>

                    <View style={login.bar}>
                        <View>
                            <SimpleLineIcons name="menu" size={24} color="white" />
                        </View>
                        <View style={{ backgroundColor: '#dc0000', flex: 1 }}>
                            <Image
                                style={{ flex: 1, width: '100%' }}
                                source={require('../assets/santander_logo.png')}
                                contentFit="scale-down"
                            />
                        </View>
                        <View>
                            <AntDesign name="enviromento" size={24} color="white" />
                        </View>
                    </View>
                </SafeAreaView>
            </View>

            <SafeAreaView style={login.container}>
                <View style={login.body}>
                    <Image
                        style={{ flex: 1, width: '100%' }}
                        source={require('../assets/background_body.png')}
                        contentFit="fill"
                    />
                </View>

                <View style={login.footer}>
                    <View style={[login.footerBox, { backgroundColor: '#fff' }]}>
                        <Fontisto name="commenting" size={18} color="#dc0000" />

                        <Text style={{
                            textAlign: 'center',
                            color: '#b3b3b3',
                            fontWeight: '500'
                        }}>Ajuda</Text>
                    </View>
                    <View style={[login.footerBox, { backgroundColor: '#fff' }]}>
                        <MaterialIcons name="lock-open" size={24} color="#dc0000" />

                        <Text style={{
                            textAlign: 'center',
                            color: '#b3b3b3',
                            fontWeight: '500'
                        }}>ID Santander</Text>
                    </View>
                    <Pressable style={[login.footerBox, { backgroundColor: '#dc0000' }]} onPress={() => { router.push('/home') }}>
                        <MaterialIcons name="login" size={24} color="white" />

                        <Text style={{
                            textAlign: 'center',
                            color: '#fff',
                            fontWeight: '500'
                        }}>Acessar sua conta</Text>
                    </Pressable>
                </View>
            </SafeAreaView>

            <View style={login.drawer}>
                <AntDesign name="arrowup" size={12} color="#dc0000" style={{ marginEnd: -10, marginTop: -15 }} />
                <EvilIcons name="pointer" size={32} color="#dc0000" />
                <Text style={{
                    textAlign: 'center',
                    color: '#dc0000',
                    fontWeight: '400',
                    fontSize: 18
                }}>Pagar ou cobrar</Text>
            </View>
        </>
    );
}

const login = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
    },
    bar: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#dc0000',
        height: 50
    },
    body: {
        flex: 1
    },
    footer: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#F4F8FB'
    },
    footerBox: {
        marginTop: 50,
        width: 120,
        height: 105,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.09,
        shadowRadius: 5,
        elevation: 3,
        padding: 10
    },
    drawer: {
        height: 90,
        borderRadius: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.09,
        shadowRadius: 5,
        elevation: 3,
        backgroundColor: '#ffffff',
        paddingBottom: 15
    },
});