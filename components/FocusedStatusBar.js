import React from 'react';
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/core';

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();

  // if status bar is focused then show it, if not hide it
  // Props contains the background color of the status bar
  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
