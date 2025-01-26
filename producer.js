const {kafka} = require("./client");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

async function init() {
    const producer = kafka.producer();
    console.log(" producer connecting...");
    await producer.connect();
    console.log("producer Connected!");

    rl.setPrompt("producer> ");
    rl.prompt();
    rl.on("line", async (line) => {
        const [riderName, location] = line.split(" ");

        await producer.send({
            topic: "rider-updates",
            messages: [
                {
                    partition: location.toLowerCase() === "north" ? 0 : 1,
                    key: riderName,
                    value: JSON.stringify({
                        riderName,
                        location,
                    }),
                    
                },
            ],
        });
    }).on("close", async () => {
        console.log("producer Disconnecting...");
        await producer.disconnect();
        console.log("producer Disconnected!");
   
    });   
}
init();