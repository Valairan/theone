import React, { act, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Button, Image, Dimensions } from 'react-native';
import TopTabbedBar from '@/app/Components/Tabs/TabbedHeader';
import Images from '@/app/ImageDatabase/images';
import Card from '@/app/Basic/Card/CardParent';
import { Background } from '@react-navigation/elements';
import { TabButtonType } from '@/app/Components/Tabs/Tabs';

enum customTab {
    yourdates,
    explore
}

type DateDeets = {
    date: string
    time: string
    with: string

}

const HEIGHT = Dimensions.get('screen').height

export default function Index() {


    const [activeTab, setActiveTab] = useState<customTab>(customTab.yourdates);
    const [dateDeets, setDateDeets] = useState<DateDeets[]>([{
        date: "string",
        time: "string",
        with: "string"
    },
    {
        date: "string1",
        time: "string1",
        with: "string1"
    }]);


    const tabs: TabButtonType[] = [
        {
            title: 'Your dates!',
        },
        {
            title: 'Explore',
        }
    ];


    return (

        <View
            style={{
                backgroundColor: "#fff",
                flex: 1,
                width: '100%',
                height: '100%'
            }}
        >

            <View style={{
                height: HEIGHT * 0.18,
                width: '100%',
                backgroundColor: '#fff',
                justifyContent: 'space-around',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            }}>

                <View style={{
                    flex: 1,
                    flexDirection: 'row'
                }}>
                    <Image
                        source={Images.blurb.s.uri}
                        style={{
                            resizeMode: 'contain',
                            margin: 6,
                            flex: 1,
                            tintColor: '#131516'
                        }}>

                    </Image>
                    <View
                        style={{
                            flexDirection: 'row',
                            flex: 1,
                            justifyContent: 'space-evenly',
                            margin: 6,
                        }}>
                        <View style={{
                            flex: 3,
                        }} />

                        <View style={{
                            flex: 1,
                        }} >
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                }}>
                                <Image
                                    resizeMode='contain'
                                    source={Images.stack.s.uri}
                                    tintColor={'#131516'}
                                    style={{
                                        flex: 1,
                                        height: undefined, width: undefined
                                    }}></Image>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>


                <View style={{
                    flex: 1,
                }}>

                    <TopTabbedBar />
                </View>

            </View>


            <ScrollView style={{
                height: '100%'
            }}>
                {(dateDeets.length > 0) ?
                    dateDeets.map((dateDeet, index) => {
                        return (
                            <Card
                                key={index
                                }
                                title="You have a date scheduled!">
                                <Text style={{
                                    marginVertical: 4,
                                    fontSize: 16
                                }}>
                                    {"It's on " + dateDeet.date + " at " + dateDeet.time}
                                </Text>
                                <Text style={{
                                    marginVertical: 4,
                                }}>

                                </Text>
                                <TouchableOpacity
                                    style={{
                                        height: HEIGHT * 0.06,
                                        marginVertical: 4,
                                        flex: 1,
                                        flexDirection: 'row',
                                        alignContent: 'center',
                                        borderRadius: 4,
                                        backgroundColor: '#ea3c53'
                                    }}>
                                    <Text style={{
                                        width: '100%',
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        color: '#fff',
                                        fontSize: 18
                                    }}>
                                        {`See who's interested`}
                                    </Text>
                                </TouchableOpacity>
                            </Card>
                        )
                    })
                    :
                    <Text style={{
                        marginTop: 50,
                        width: '100%',
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        color: '#000',
                        fontSize: 18
                    }}>
                        {`You don't have any dates scheduled!\n`}
                        {`You have ` + (dateDeets?.length < 1) ? 0 : 5 + ` dates left.\n`}
                    </Text>}
                <View style={{ height: HEIGHT * 0.5 }}>

                </View>
            </ScrollView>
        </View>
    );

};



