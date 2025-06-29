import React from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { Dimensions } from "react-native"

const HEIGHT = Dimensions.get('screen').height

export type TabButtonType = {
    title: string
}

type TabProps = {
    buttons: TabButtonType[]
    selectedTab: number
    setSelectedTab: (index: number) => void
}

const Tabs = ({ buttons, selectedTab, setSelectedTab }: TabProps) => {

    return (

        <View style={{
            flexDirection: 'row',
            height: '100%',
            justifyContent: 'space-evenly', alignContent: 'center'
        }}>
            {buttons.map((button, index) => {
                return (
                <TouchableOpacity
                    key={index}
                    style={{
                        margin: 6,
                        flex: 1,
                        justifyContent: 'center',
                        alignContent: 'center',
                        borderRadius: 4,
                        backgroundColor: selectedTab === index ? '#ea3c53' : '#00000000',
                    }}
                    onPress={() => setSelectedTab(index)}>
                    <Text style={{
                        width: '100%',
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        color: selectedTab === index ? '#FFF' : '#000',
                        fontSize: 18
                    }}>
                        {button.title}
                    </Text>
                </TouchableOpacity>)
            })}
        </View>
    );
}

export default Tabs;