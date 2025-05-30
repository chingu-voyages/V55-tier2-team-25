module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Text Colors
        primary: '#111827',
        secondary: '#545963',
        tertiary: '#9CA3AF',
        disabled: '#D1D5DB',
        onPrimary: '#FFFFFF',
        accent: '#4136E0',
        testpink: '#ff69b4',

        // Alpha Colors
        white10: 'rgba(255, 255, 255, 0.1)',
        white30: 'rgba(255, 255, 255, 0.3)',
        white50: 'rgba(255, 255, 255, 0.5)',
        white80: 'rgba(255, 255, 255, 0.8)',
        black10: 'rgba(0, 0, 0, 0.1)',
        black30: 'rgba(0, 0, 0, 0.3)',
        black50: 'rgba(0, 0, 0, 0.5)',
        black80: 'rgba(0, 0, 0, 0.8)',

        // Accent Colors
        50: '#ECF1FF',
        100: '#DCE5FF',
        200: '#C0CFFF',
        300: '#99ADFF',
        400: '#7181FF',
        500: '#5056FF',
        600: '#3A31FA',
        700: '#4136E0',
        800: '#2821B2',
        900: '#26238C',
        950: '#171551',

        // Base Colors
        white: '#FFFFFF',
        black: '#000000',

        // Action Colors
        error: {
          DEFAULT: '#EF4444',
          hover: '#DC2626',
        },

        // Icon Colors
        primary_icon: '#111827',
        secondary_icon: '#6B7280',
        tertiary_icon: '#9CA3AF',
        default_icon: '#6B7280',
        handle_icon: '#D1D5DB',

        // Border Colors
        primary_border: '#E5E7EB',
        secondary_border: '#545963',
        default_border: '#E5E7EB',
        hover_border: '#D1D5DB',

        // Background Colors
        primary_bg: '#FFFFFF',
        surfacePrimary_bg: '#FFFFFF',
        surfaceSecondary_bg: '#FAFAFA',
        surfaceTertiary_bg: '#F7F8FC',
        hover_bg: '#E5E7EB',
        pressed_bg: '#D1D5DB',
        tag_bg: '#F3F4F6',
        black_bg: '#000000',

        // Topic Selector Colors
        background1: '#FFEFFF',
        background2: '#EFF3FF',
        background3: '#F8F0FF',
        background4: '#F0FFFD',
        text1: '#92099A',
        text2: '#0D4CB3',
        text3: '#42065E',
        text4: '#065E52',
        text5: '#F0FFFD',
      },
    },
  },
  plugins: [],
};