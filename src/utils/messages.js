const generatemsg = (username, text) => {
    return {
        username,
        text,
        createdAt: new Date().getTime()
    }
}

const generateLocation = (username, url) => {
    return {
        username,
        url,
        createdAt: new Date().getTime()
    }
}
 
const generateFile = (username, file) => {
    return {
        username,
        url,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generatemsg,
    generateLocation,
    generateFile
}