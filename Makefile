all:
	docker-compose up --build -d

log:
	docker-compose logs --follow --tail=100

stop:
	docker-compose stop

down:
	docker-compose down

.PHONY: log stop down socket
