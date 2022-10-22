all:
	docker-compose up --build -d

log:
	docker-compose logs --follow --tail=100

stop:
	docker-compose stop

down:
	docker-compose down

socket:
	docker-compose -f compose.socket.yml up --build

socket-stop:
	docker-compose -f compose.socket.yml stop

socket-down:
	docker-compose -f compose.socket.yml down

.PHONY: log stop down socket socket-stop socket-down
