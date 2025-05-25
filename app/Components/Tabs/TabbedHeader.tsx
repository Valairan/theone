import React, { act, useState } from 'react';
import { View, Dimensions } from 'react-native';
import Tabs, { TabButtonType } from './Tabs';


const HEIGHT = Dimensions.get('screen').height


enum customTab {
  Tab1,
  Tab2
}

type DateDeets = {
  date: string
  time: string
  remaining: number
  with: string

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
    <View
      style={{
        width: '100%',
        height: HEIGHT * 0.09,
      }}
    >
      <Tabs
        buttons={tabs}
        selectedTab={activeTab}
        setSelectedTab={setActiveTab}
      />
    </View>
  );

};



export default TopTabbedBar;
