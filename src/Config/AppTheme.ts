import {DarkTheme, DefaultTheme, configureFonts} from 'react-native-paper';
import {LightTheme, DarkTheme as RNFDarkTheme} from 'rnfui';

import {Theme} from 'react-native-paper/lib/typescript/src/types';
import ThemeType from 'rnfui/compiled/dist/Themes/ThemeType';
//@ts-ignore
import config from 'react-native-ultimate-config';

const fontConfig: any = {
  // ios: {
  //   regular: {
  //     fontFamily: 'Montserrat-Medium',
  //     fontWeight: '400',
  //   },
  //   medium: {
  //     fontFamily: 'Montserrat-SemiBold',
  //     fontWeight: '500',
  //   },
  //   light: {
  //     fontFamily: 'Montserrat-Regular',
  //     fontWeight: 'normal',
  //   },
  //   thin: {
  //     fontFamily: 'Montserrat-Light',
  //     fontWeight: '100',
  //   },
  // },
  // android: {
  //   regular: {
  //     fontFamily: 'Montserrat-Medium',
  //     fontWeight: '400',
  //   },
  //   medium: {
  //     fontFamily: 'Montserra-SemiBold',
  //     fontWeight: '500',
  //   },
  //   light: {
  //     fontFamily: 'Montserrat-Regular',
  //     fontWeight: 'normal',
  //   },
  //   thin: {
  //     fontFamily: 'Montserrat-Light',
  //     fontWeight: '100',
  //   },
  // },
};

const PaperTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: config.PRIMARY_COLOR,
    accent: config.SECONDARY_COLOR,
  },
  fonts: configureFonts(fontConfig),
};

const PaperDarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: config.PRIMARY_COLOR,
    accent: config.SECONDARY_COLOR,
  },
  fonts: configureFonts(fontConfig),
};

const RNFUITheme: ThemeType = {
  ...LightTheme,
  color: {
    ...LightTheme.color,
    primary: config.PRIMARY_COLOR,
    secondary: config.SECONDARY_COLOR,
  },
  statusbar: {
    style: 'dark-content',
    backgroundColor: 'transparent',
  },
};

const RNFUIDarkTheme: ThemeType = {
  ...RNFDarkTheme,
  color: {
    ...RNFDarkTheme.color,
    primary: config.PRIMARY_COLOR,
    secondary: config.SECONDARY_COLOR,
  },
  statusbar: {
    style: 'light-content',
    backgroundColor: 'transparent',
  },
};

const AppTheme = {
  PaperTheme,
  PaperDarkTheme,
  RNFUITheme,
  RNFUIDarkTheme,
};

export default AppTheme;
