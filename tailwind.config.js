/** @type {import('tailwindcss').Config} */
export default {
  content: [
        'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          '700': '#231F20',
          'red-wine': '#8A2432',
        },
      },
    },
  },
  plugins: [],
}

