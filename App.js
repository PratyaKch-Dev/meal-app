import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { useScreens, enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import {} from 'redux'
import resultReducer from './store/reducers/result'

import MealsNavigator from './navigation/MealsNavigator';

//npm install --save redux react-redux
//npm start -- --reset-cache
//npm install --save redux-devtools-extension

enableScreens();

const rootReducer = combineReducers({
  lists : resultReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

const fetchFonts = async () => {
  return await Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>

  );

}
