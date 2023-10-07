# Real-Time CPU Usage Monitor

Real-Time CPU Usage Monitor is a web application that displays real-time CPU usage data using a Node.js server and a React frontend.

![Alt text](<Screenshot 2023-10-07 at 1.42.00 PM.png>)


## Tech Stack

The project is built using the following technologies and libraries:

- **Node.js**: Used for the server-side implementation.
- **React**: Frontend user interface is built with React.
- **Recharts**: Used for visualizing CPU usage data.
- **Socket.io**: Enables real-time communication between the server and client.
- **dotenv**: Helps with environment variable management.
- **HTTP**: Node.js HTTP module for creating the server.


## Features

- Monitor and visualize CPU usage in real-time.
- Uses WebSocket for real-time data transmission.
- Displays CPU usage data using Recharts.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/real-time-cpu-usage-monitor.git
   cd real-time-cpu-usage-monitor



2. Install the server dependencies:
    cd server
    npm install

3. Install the client dependencies:
    cd client
    npm install

## Usage
 Start the Server

    1. In the server directory, create a .env file and configure the PORT if necessary.
    2. Start the server:
        cd server
        node server.js

    The server will run on the specified port (default: 3000).

 Start the Client

    1.In the client directory, open the .env file and set VITE_API_URL to the server's WebSocket URL (e.g., ws://localhost:3000).
    2.Start the React application
        cd client
        npm start




## Monitor CPU Usage
Visit the client application in your web browser to monitor real-time CPU usage.

## Contributing
If you would like to contribute to this project, please open an issue or submit a pull request.



 

