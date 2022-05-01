import React from 'react';
import { useState } from 'react';
// Flat list renders a basic list similar to map and only renders when they are about to appear on screen and de renders them when they are off screen. Reduces loading and memory
// SafeArea used to render content in the safe area boundaries of a screen.
import { Text, View, SafeAreaView, FlatList } from 'react-native';

import { COLORS, NFTData } from '../constants';

import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zindex: 0 }}>
          <FlatList
            data={NFTData}
            // renders each item name in the NFTData list
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            // Disables the scroll bar
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          ></FlatList>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: Colors.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
