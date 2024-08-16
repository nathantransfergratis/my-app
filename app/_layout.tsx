import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';


import * as Sentry from "@sentry/react-native";


 

function RootLayout() { 

  Sentry.init({
    dsn: "https://3b3db31930c3e3473e9b6bef30fa1e7e@o4507730682707968.ingest.de.sentry.io/4507735266689104",
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    // We recommend adjusting this value in production.
    tracesSampleRate: 1.0,
    _experiments: {
      // profilesSampleRate is relative to tracesSampleRate.
      // Here, we'll capture profiles for 100% of transactions.
      profilesSampleRate: 1.0,
    },
  });

  

  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
  );
}

export default Sentry.wrap(RootLayout);
