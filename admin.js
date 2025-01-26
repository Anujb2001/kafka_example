const { kafka } = require("./client");

async function init() {
    const admin = kafka.admin();
    console.log("admin Connecting...");
    await admin.connect();
    console.log("admin Connected!");
    
    console.log("admin Creating topic rider-updates...");
    await admin.createTopics({
        topics: [
        {
            topic: "rider-updates",
            numPartitions: 2,
        },
        ],
    });

    console.log("Topic rider-updates created!");
    console.log("admin Disconnecting...");
    await admin.disconnect();
    console.log("admin Disconnected!");
}

init();