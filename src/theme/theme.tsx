import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        h: 'calc(94.8vh)',
        bg: 'black',
      },
    }),
  },
});

/*
OLD STYLE:
bg: ' radial-gradient(at bottom left, rgba(154,47,147,1) 10%, rgba(95,42,120,1) 23%, rgba(21,14,35,1) 75%)',
*/