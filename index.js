class Client {
  constructor() {}

  async initiateHandshake(server) {
    console.log("Client: Sending SYN packet");
    const synAck = await server.receiveSyn();
    if (synAck === "SYN-ACK") {
      console.log("Client: Received SYN-ACK packet");
      await server.receiveAck();
      console.log("Client: Handshake completed. Connection established.");
    }
  }
}

class Server {
  constructor() {}

  async receiveSyn() {
    return new Promise((resolve) => {
      console.log("Server: Waiting for SYN packet");
      setTimeout(() => {
        console.log("Server: Received SYN packet");
        resolve("SYN-ACK");
      }, 1000); // Simulate network delay
    });
  }

  async receiveAck() {
    return new Promise((resolve) => {
      console.log("Server: Waiting for ACK packet");
      setTimeout(() => {
        console.log("Server: Received ACK packet");
        resolve();
      }, 1000); // Simulate network delay
    });
  }
}

async function main() {
  const server = new Server();
  const client = new Client();

  console.log("Initiating 3-way handshake...");
  await client.initiateHandshake(server);
}

main();
