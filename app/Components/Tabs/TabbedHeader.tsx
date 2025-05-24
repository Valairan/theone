import React, { act, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Tabs, { TabButtonType } from './Tabs';
import { Dimensions } from "react-native"

const HEIGHT = Dimensions.get('screen').height

enum customTab {
  Tab1,
  Tab2
}

const TopTabbedBar = () => {
  const [activeTab, setActiveTab] = useState<customTab>(customTab.Tab1);

  const tabs: TabButtonType[] = [
    {
      title: 'Your dates!',
    },
    {
      title: 'Explore',
    }
  ];

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%'
      }}
    >

      <View style={{
        width: '100%',
        height: HEIGHT * 0.12,
        backgroundColor: '#fff',
      }}>
        <View style={{ flex: 1 }}>

        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', padding: 2 }}>
          <Tabs
            buttons={tabs}
            selectedTab={activeTab}
            setSelectedTab={setActiveTab}
          />

        </View>
      </View>
    </SafeAreaView>
  );

};



export default TopTabbedBar;
