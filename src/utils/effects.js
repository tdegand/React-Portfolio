const scrollToProjects = () => {
    window.scroll({
        top: window.innerHeight + 675,
        behavior: 'smooth'
    })
}
const scrollToAbout = () => {
    window.scroll({
        top: window.innerHeight,
        behavior: 'smooth'
    })
}

module.exports = { 
    scrollToProjects: scrollToProjects, 
    scrollToAbout: scrollToAbout 
}
