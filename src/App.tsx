// import AppSwitchNavigator from 'src/Navigation/AppSwitchNavigator';
import AppTheme from 'src/Config/AppTheme';
import {ThemeProvider as PaperThemeProvider} from 'react-native-paper';
import React, {useEffect} from 'react';
import {ThemeProvider} from 'rnfui';
import HomeScreen from 'src/Screens/Home/HomeScreen';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider value={AppTheme.RNFUITheme}>
      <PaperThemeProvider theme={AppTheme.PaperTheme}>
        <HomeScreen />
        {/* <AppSwitchNavigator /> */}
      </PaperThemeProvider>
    </ThemeProvider>
  );
}

export default App;
