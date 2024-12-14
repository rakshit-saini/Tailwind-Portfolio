tailwind.config = {
    theme: {
       extend:{
        gridTemplateColumns: {
            'auto': 'repeat(auto-fit, minmax(200px,1fr))'
        },
        fontFamily: {
            Outfit: ["Outfit", "sans-serif"],
            Ovo: ["Ovo", "serif"]
        },
        colors: {
            darkTheme: '#11001f'
        }
       }
    },
         darkMode: 'selector'
}