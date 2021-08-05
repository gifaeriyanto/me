import { extendTheme, ThemeOverride } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const darkTheme = {
  primary: '#5f84cd',
  background: '#0f121c',
  highlight: '#e4b04e',
};

export const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  },
  colors: {
    primary: '#707070',
    background: '#fff',
    highlight: '#707070',
  },
  fonts: {
    body: 'Fira Code, monospace',
    heading: 'Fira Code, monospace',
    mono: 'Fira Code, monospace',
  },
  fontSizes: {
    lg: '36px',
    xl: '56px',
  },
  radii: {
    sm: 0,
    md: 0,
    lg: 0,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'normal',
      },
      variants: {
        ghost: (props: any) => ({
          color: mode('primary', darkTheme.primary)(props),
          _hover: {},
          _active: {},
          _focus: {
            boxShadow: 'none',
            outline: 'none',
          },
        }),
        function: (props: any) => ({
          border: '1px solid',
          borderColor: mode('primary', darkTheme.primary)(props),
          color: mode('primary', darkTheme.primary)(props),
          _hover: {
            bgColor: 'inherit',
            _after: {
              content: '"()"',
            },
          },
          _active: {
            bgColor: 'inherit',
          },
          _focus: {
            boxShadow: `0 0 0 3px ${mode(
              'primary',
              darkTheme.primary,
            )(props)}99`,
            _after: {
              content: '"()"',
            },
          },
        }),
      },
      defaultProps: {
        size: 'md',
        variant: 'ghost',
      },
    },
    Drawer: {
      parts: ['dialog', 'header'],
      baseStyle: (props: any) => ({
        dialog: {
          bg: mode('background', darkTheme.background)(props),
        },
        header: {
          button: {
            _hover: {
              bg: 'transparent',
            },
          },
        },
      }),
    },
    Link: {
      baseStyle: (props: any) => ({
        _hover: {
          color: mode('highlight', darkTheme.highlight)(props),
        },
      }),
    },
    Popover: {
      parts: ['content'],
      baseStyle: {
        content: (props: any) => ({
          width: 'auto',
          maxWidth: 'initial',
          bgColor: mode('background', darkTheme.background)(props),
          borderColor: mode('primary', darkTheme.primary)(props),
          _focus: {
            boxShadow: `0 0 0 3px ${mode(
              'primary',
              darkTheme.primary,
            )(props)}99`,
          },
        }),
      },
    },
  },
  styles: {
    global: (props: any) => ({
      _selection: {
        color: 'white',
        bgColor: mode('highlight', darkTheme.highlight)(props),
      },
      body: {
        bgColor: mode('background', darkTheme.background)(props),
        color: mode('primary', darkTheme.primary)(props),
        transitionDuration: '0s',
        lineHeight: 1.6,
      },
    }),
  },
} as ThemeOverride);
