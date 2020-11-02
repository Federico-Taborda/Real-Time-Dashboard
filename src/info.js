const os = require("os");

const system = {
    username: os.userInfo().username,
    machineName: os.hostname(),
    os: os.type(),
    version: os.release(),
    architecture: os.arch(),
    processor: os.cpus()[0].model
};

function memory() {
    return {
        totalMemory: parseInt(os.totalmem() / 1024 / 1024),
        freeMemory: parseInt(os.freemem() / 1024 / 1024),
    };
};

module.exports = {
    memory: memory,
    system: system
};