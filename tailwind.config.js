/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Fira : ['"Fira Code", monospace'],
        Rubik : ['"Rubik", sans-serif'],
        Poppins : ['"Poppins", sans-serif'],
        Inter : ['"Inter" , sans-serif'],
        Manrope : ['"Manrope" , sans-serif'],
        DmSans : ['"DM Sans", sans-serif'],
        Archivo: ['"Archivo", sans-serif'],
        JakartaSans: ['"Plus Jakarta Sans", sans-serif']
      },
      colors: {
        'homePrimary': '#4262FF',
        'Primary': '#050038',
        'PrimaryBlack': '#040C0C',
        'secondary' : "#00AA45",
        'redTheme'  : "#f40413",
        'greenYellow': '#c3ff45',
        'lightYellow' : "#c3ff4533",
        'homeblack': '#181818',
        'menubg': "#3e3d3c87",
        'darkgreen' :'#a2e318',
        'purple': '#864AF9'
      },
      spacing: {
        '320P' : "320px",
        '45Wh' : "45px"
      },
      screens: {
        '2xl': {'max' : '1535px'},
        'xl' : {'max' : '1170px'},
        'lg' : {'max' : '991px'},
        'md' : {'max' : '767px'},  
        'sm' : {'max' : '674px'},
        'xs' : {'max' : '474px'},
        '2xs': {'max' : '375px'}
      },
      boxShadow: {
        customShadow: '0px 0px 4px 25px #000054',
        cardsShadow: '0 5px 50px -12px rgb(0 0 0 / 0.25)'
      }
    }
  },
  plugins: [],
}
