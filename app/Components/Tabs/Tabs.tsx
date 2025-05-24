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
        <View
            style={{
                height: '50%',
                width: '100%',
            }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                {buttons.map((button, index) => {
                    return (<TouchableOpacity
                        style={{
                            height: '100%',
                            marginHorizontal: 12,
                            flex: 1,
                            flexDirection: 'row',
                            alignContent: 'center',
                            backgroundColor: '#00000000',
                            borderBottomColor: '#b24d4d',
                            borderBottomWidth: 2
                        }}>
                        <Text style={{
                            height: '100%',
                            width: '100%',
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            color: '#000',
                            fontSize: 18
                        }}>
                            {button.title}
                        </Text>
                    </TouchableOpacity>)
                })}
            </View>
        </View>
    );
}

export default Tabs;