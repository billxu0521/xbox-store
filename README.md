# Dockerized Xbox-Store App
This project for Xbox-Store app.

The app show games list & XGP list for XBOX.
It consists of:
- Ionic / Vue.js front-end
- Node.js / Express API


 ## Containers schema
 
                |                     |                      
                |                     |   Ionic  (client)   
       Wild     |       Traefik       |                         
     Internet   |   (reverse-proxy)   |   Node.js (server)   
                |                     |                      
     
Traefik proxy works as the entry point for the app and routes requests to Vue.js front-end. Additionally, Traefik intercepts all requests to `/api/..` and re-routes them to Node.js server. Node.js uses internal docker network to communicate with the MySQL database. 

## 

When deploying to the server, you need to set the ymal of the service, pay attention to the "domain" in the labels

```ymal
api:
    build: ./api
    #image: billxuregistry.azurecr.io/xbox-api
    container_name: xbox-api
    platform: linux/amd64
    # ports:
    #  - "3031:3031"
    expose:
      - 3031
    networks:
      - reverse-proxy
    labels:
      - "traefik.http.routers.backend.rule=Host(`domain`) && PathPrefix(`/api`)"
      - "traefik.enable=true"
```
and disable the axiox.baseURL in web/src/main.js

```javascript
//axios.defaults.baseURL="http://localhost";
```