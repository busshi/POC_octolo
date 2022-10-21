## Clock

A simple clock build with VueJS and Django using nginx inside Docker containers

### Usage

- `make` will run containers in detach mode
- `make log` to see containers logs
- `make stop` to stop containers
- `make down` to remove containers and created network

Then browse to [The Clock](http://localhost:8080)

### Notes

- Django framework used for the backend (port 8000). Only used to generate curent date and time.
- VueJS framework used for the frontend (port 1337). Only one component is used to ask the backend for the current time.
- Nginx used as a reverse proxy to keep the communication open between the backend and the frontend inside an internal network, but the outside cannot reach the backend directly. The front is accessible on port 8080.
- Docker-compose is used to create containers for a maximum compatibility and portability.
- This Project was tested on macOS and on an Ubuntu VM with M1 chip, and also Linux with a x86 processor.
