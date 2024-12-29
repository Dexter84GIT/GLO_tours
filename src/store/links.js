const links = {
    state: {
        header: {
            id: 0,
            link: '/',
            icon: 'Logo.svg'
        },
        main: {
            id: 0,
            link: '/',
            icon: 'Logo_black.svg'
        }
    },
    getters: {
        getHeaderLinks(state) {
            return { header: state.header, other: state.other }
        },
        getFooterLinks(state) {
            return { main: state.main, other: state.other }
        },
    }
}

export default links    