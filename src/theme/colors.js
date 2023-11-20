const colors = {
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    shark: (opacity = 1) => `rgba(24,24,32, ${opacity})`,
    blue: (opacity = 1) => `rgba(53, 88, 225, ${opacity})`,
    grey: (opacity = 1) => `rgba(109, 125, 154, ${opacity})`,
    orange: (opacity = 1) => `rgba(254,157,16, ${opacity})`
}

export default colors;