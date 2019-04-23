module.exports = (client) => {
    client.user.setPresence({
        game: {
            name: "réfléchir à mon développement."
        }
    });
};
