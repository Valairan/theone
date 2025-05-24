import React, { act, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Button } from 'react-native';
import Tabs, { TabButtonType } from './Tabs';
import { Dimensions } from "react-native"
import Card from '@/app/Basic/Card/CardParent';

const HEIGHT = Dimensions.get('screen').height

enum customTab {
  Tab1,
  Tab2
}

type DateDeets = {
  date: string
  time: string
  remaining: number
  with:string
  
}

const TopTabbedBar = () => {
  const [activeTab, setActiveTab] = useState<customTab>(customTab.Tab1);
  const [dateDeets, setDateDeets] = useState<DateDeets>();


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
        height: HEIGHT * 0.18,
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
        }}>

        </View>
        <View style={{
          flex: 1,
        }}>
          <Tabs
            buttons={tabs}
            selectedTab={activeTab}
            setSelectedTab={setActiveTab}
          />

        </View>
      </View>

      <ScrollView style={{
        height: '100%'
      }}>
        {(dateDeets === null) ?
          <Card
            title="You have a date scheduled!">
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
            {`You have ` + dateDeets == null ? 0 : dateDeets?.remaining + ` dates left.\n`}
          </Text>}
        <View style={{ height: HEIGHT * 0.5 }}>

        </View>
      </ScrollView>
    </SafeAreaView>
  );

};



export default TopTabbedBar;
