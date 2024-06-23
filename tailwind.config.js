/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        mainBg: "url('~/assets/images/background/bg.png')",
        star: "url('~/assets/icons/star.svg')",
      },
      animation: {
        'loop-scroll': 'loop-scroll 15s linear infinite',
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      borderRadius: {
        huge: '28px',
        projectCard: '32px', // ⚠️ si on modifie cette valeur ne pas oublier de modifier borderRadius.imgProject
        imgProject: '20px', // est egal a borderRadius.projectCard - padding.projectCard
      },
      padding: {
        projectCard: '12px' // ⚠️ si on modifie cette valeur ne pas oublier de modifier borderRadius.imgProject
      }
    },
    colors: {
      red: '#FF0000',
      aqua: '#2EFAFA',
      white : '#DBE8FE',
      surface: '#DBE8FE15',
      surface2: '#DBE8FE35',
      background: '#00050F',
      black: '#00050F',
      black2: '#05000A',
      'secondary': {
        '50': '#edfaff',
        '100': '#d7f1ff',
        '200': '#b9e8ff',
        '300': '#88dcff',
        '400': '#50c7ff',
        '500': '#28a9ff',
        '600': '#2194ff',
        '700': '#0a73eb',
        '800': '#0f5cbe',
        '900': '#135095',
        '950': '#11315a',
      },
      'gray': {
        '50': '#f7f8f8',
        '100': '#edeef1',
        '200': '#d7dae0',
        '300': '#b4bac5',
        '400': '#8c95a4',
        '500': '#6e7989',
        '600': '#586071',
        '700': '#484f5c',
        '800': '#3e434e',
        '900': '#373b43',
        '950': '#1f2126',
      },
    },
    fontFamily: {
      sans: ['Montserrat'],
      serif: ['Montserrat'],
      mono: ['Montserrat'],
      display: ['Montserrat'],
      body: ['Montserrat']
    },
  },
  plugins: [],
}

