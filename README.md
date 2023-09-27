# tcp-3-way-handshake
The TCP 3-way handshake is a critical procedure in the TCP (Transmission Control Protocol) used to establish a connection and ensure that communication between two devices on a network functions correctly. It serves several key purposes:

**Connection Initiation:** The 3-way handshake is employed to initiate a connection between the sending device (client) and the receiving device (server) before actual data exchange begins. This is the first step in setting up communication between the two devices.

**Confirmation of Success:** Through this process, both devices confirm that they are listening and ready to exchange data. Each step of the handshake (SYN, SYN-ACK, ACK) serves as confirmation that the received packets have been successfully acknowledged by the destination device.

**Sequence Number Synchronization:** The 3-way handshake is also used to establish the initial sequence number that will be used in subsequent communication. This is crucial to enable the sender and receiver to correctly identify and order data.

**Failure Detection:** The handshake process allows for early detection of issues in connection establishment. If any step of the handshake fails, the devices will be aware that the connection cannot be established, and appropriate troubleshooting or error handling actions can be taken.

Overall, the TCP 3-way handshake is a vital step in ensuring a reliable and secure connection before actual data exchange begins between devices on a network.