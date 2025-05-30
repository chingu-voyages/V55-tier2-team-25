module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
theme: {
    extend: {
      colors: {
        // Text Colors
        text: {
          primary: '#111827',
          secondary: '#545963',
          tertiary: '#9CA3AF',
          disabled: '#D1D5DB',
          onPrimary: '#FFFFFF',
          accent: '#4136E0',
        },

        // Alpha Colors
        alpha: {
          white10: 'rgba(255, 255, 255, 0.1)',
          white30: 'rgba(255, 255, 255, 0.3)',
          white50: 'rgba(255, 255, 255, 0.5)',
          white80: 'rgba(255, 255, 255, 0.8)',
          black10: 'rgba(0, 0, 0, 0.1)',
          black30: 'rgba(0, 0, 0, 0.3)',
          black50: 'rgba(0, 0, 0, 0.5)',
          black80: 'rgba(0, 0, 0, 0.8)',
        },

        // Accent Colors
        accent: {
          50: '#ECF1FF',
          100: '#DCE5FF',
          200: '#C0CFFF',
          300: '#99ADFF',
          400: '#7181FF',
          500: '#5056FF',
          600: '#3A31FA',
          700: '#4136E0', // base accent
          800: '#2821B2',
          900: '#26238C',
          950: '#171551',
        },

        // Base Colors
        base: {
          white: '#FFFFFF',
          black: '#000000',
        },

        // Action Colors
        action: {
          error: {
            DEFAULT: '#EF4444',
            hover: '#DC2626',
          },
        },

        // Icon Colors
        icon: {
          primary: '#111827',
          secondary: '#6B7280',
          tertiary: '#9CA3AF',
          default: '#6B7280',
          handle: '#D1D5DB',
        },

        // Border Colors
        border: {
          primary: '#E5E7EB',
          secondary: '#545963',
          default: '#E5E7EB',
          hover: '#D1D5DB',
        },

        // Background Colors
        background: {
          primary: '#FFFFFF',
          surface: {
            primary: '#FFFFFF',
            secondary: '#FAFAFA',
            tertiary: '#F7F8FC',
            hover: '#E5E7EB',
            pressed: '#D1D5DB',
            tag: '#F3F4F6',
            black: '#000000',
          },
        },

        // Topic Selector Colors
        topicselector: {
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
  },
 plugins: [],
};

 