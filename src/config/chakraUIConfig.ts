import { extendTheme, ThemeConfig } from "@chakra-ui/react";

export const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: false,
    
  }

export const theme = extendTheme({config})