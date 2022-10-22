### Clock

A simple numeric clock build with VueJS and Django using nginx inside Docker containers

## Usage

- `make` will run containers in detach mode
- `make log` to see containers logs
- `make stop` to stop containers
- `make down` to remove containers and created network

Then browse to [The Clock](http://localhost:8080)

## Notes

- Django framework used for the backend (port 8000). Only used to generate curent date and time.
- VueJS framework used for the frontend (port 1337). Only one component is used to ask the backend for the current time.
- Nginx used as a reverse proxy to keep the communication open between the backend and the frontend inside an internal network, but the outside cannot reach the backend directly. The front is accessible on port 8080.
- Docker-compose is used to create containers for a maximum compatibility and portability.
- This Project was tested on macOS and on an Ubuntu VM with M1 chip, and also Linux with a x86 processor.

## Alternative with sockets

- Socket implementation with expressJS and a React app
- Socket server listening on port 8000. Run it with `npm i && npm start` inside socket-server folder.
- Socket client listening on port 3000. Run it with `npm i && npm start` inside socket-client folder.
- Advantage: less requests to the backend because only one connexion is opened between client and server and kept opened until the client disconnected (close the browser, or refresh the page).
- Important note: for some reason, Firefox can block request due to security policy. You can disable it: `about:config -> security.fileuri.strict_origin_policy -> false`
