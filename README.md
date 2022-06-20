## Will Human NodeJs Challange

### Development
```
cd human-nodejs-challange
cp .env.example .env
docker-compose -f docker-compose-local.yml up
```

### Production
```
cd human-nodejs-challange

docker build . -t nuswill/human-nodejs-challange --build-arg API_PORT=3000

cp .env.prod.example .env
docker-compose -f docker-compose-production.yml up
```

## Stack
- Express/TypeScript with Nx
- Docker
- Database Mysql
