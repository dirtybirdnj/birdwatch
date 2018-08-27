# birdwatch

Objective: Track a fleet of drones with a simple table display. Use as efficient a communication protocol as possible to minimize the cost of operating a cellular data network.

Setup:

1. `npm install`
2. `npm run db-recycle`

Development:

1. `npm run dev`

Production:

1. `npm start`

Build:

`docker build -t ${USERNAME}/birdwatch .`

Run Docker Image:

`docker run -p 8000:8080 -d ${USERNAME}/birdwatch`