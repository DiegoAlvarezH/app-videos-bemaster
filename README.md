# Proyecto App videos - NodoVideos

Creación de una plataforma multimedia basada en Node.js y React.

## Backend - NodeJs


  - Para crear el servidor [ExpressJs](https://expressjs.com/)
  - Para cifrar informacion [Texto del enlace](https://github.com/dcodeIO/bcrypt.js/tree/master)
  - Para analizar y gestionar cookies en las solicitudes HTTP [cookie-parser](https://expressjs.com/en/resources/middleware/cookie-parser.html)
  - Para facilitar el manejo de peticiones o restringir solicitudes HTTP [Cors](https://expressjs.com/en/resources/middleware/cors.html)
  - Para autenticar/transmitir datos de manera segura [JWT](https://jwt.io/)
  - Para el modelado, interaccion con la BD NoSQL [moongose](https://mongoosejs.com/)
  - Para crear nuestros esquemas de datos [zod](https://zod.dev/)
  - Para hacer registro de nuestras peticiones HTTP [morgan](https://expressjs.com/en/resources/middleware/morgan.html)
  - Para nuestras pruebas unitarias [JestJs](https://jestjs.io/)

Instrucciones para correr nuestro Backend

1. Asegúrate de tener Node.js instalado en tu sistema (Version 14 o superior).

2. Tener instalado MongoDB la version community o tener un cluster en mongo atlas. puedes configurarlo desde el archivo .env y src/config.js

3. Abre una terminal y navega al directorio raiz (app-videos-node-react):

   ```bash
   1. npm install

   2. npm start / npm run dev
   ```

## Frontend - ReactJs

- Para gestionar la navegacion de nuestra app [Reac-router](https://reactrouter.com/en/main) 
- Para validacion/gestion de formularios [Hookform](https://www.react-hook-form.com/)
- Para enviar peticiones HTTP [Axios](https://axios-http.com/es/)
- Para controlar fechas y horas, convertir, formatear, etc [Dayjs](https://day.js.org/)
- Para el manejo de nuestras cookies [js-cookie](https://www.npmjs.com/package/js-cookie)
- Para estilizar nuestros componentes [TailwindCSS](https://tailwindcss.com/)
- Para nuestro entorno y servidor web [Vite](https://vitejs.dev/)

Recurso colores [tailwindcolor](https://tailwindcolor.com/)

Instrucciones para ejecutar el frontend

```bash
1. cd frontend

2. npm install

3. npm run dev
```

Nota: por defecto la aplicacion se ejecutara en el puerto 5173

## Detalles de la API

[Coleccion Postman](https://drive.google.com/file/d/1g-a_CB5YyesFOxOQTEEHsh6rRZAMDqu8/view?usp=sharing)

### Nota: se implemento el paquete cookie-parser, tener en cuenta a la hora de probar en su cliente eje: postman. recuerda que las cookies se agregan manualmente.

Esto nos ayuda a personalizar nuestro contenido y tambien almacenar nuestras funciones de manera directa.

### CRUD usuarios

Puedes crear usuarios, editar, leer, eliminar mediante la api, (recuerda donde se ejecuta tu servidor) por defecto el proyecto se esta ejecutando en el puerto 4000.

Registrar usuarios (POST):

```bash
 Ruta: http://localhost:3000/api/auth/register
```

```bash
 Body(cuerpo JSON):
{
"email": "test1@gmail.com",
"password": "test123",
"username": "test123"
}
```

Login/Leer usuarios (POST):

```bash
 Ruta: http://localhost:3000/api/auth/login
```

```bash
 Body(cuerpo JSON):
{
"email": "test1@gmail.com",
"password": "test123",
}
```

Actualizar usuarios (PUT):

```bash
 Ruta: http://localhost:4000/api/auth/update-user
```

```bash
 Body(cuerpo JSON):
{
  "username": "nuevo123",
  "email": "nuevo@gmail.com"
}
```

Agregar nuestro bearer token de login

```bash
Bearer
```

Eliminar usuarios (DELETE):

```bash
 Ruta: http://localhost:4000/api/auth/delete-user
```

Agregar nuestro bearer token de login

```bash
Bearer: eyJhbGciOiJ....
```

### CRUD videos

Crear videos (POST):

```bash
 Ruta: http://localhost:4000/api/videos
```

```bash
 Body(cuerpo JSON):
{
  "title": "Video de prueba",
  "description": "Descripción del video",
  "credits": "Créditos del video",
  "date": "2024-01-30T12:00:00Z",
  "isPublic": true
}
```

Obtener todos los videos (GET):

```bash
 Ruta: http://localhost:4000/api/videos
```
Headers:
```bash
Bearer: eyJhbGciOiJ....
```

Obtener los videos por ID (GET):

```bash
 Ruta: http://localhost:4000/api/videos:id
```

Headers:
```bash
Bearer: eyJhbGciOiJ....
```

Actualizar un Video por ID (PUT):

```bash
 Ruta: http://localhost:4000/api/videos/:id
```

Headers:
```bash
Bearer: eyJhbGciOiJ....
```

```bash
 Body(cuerpo JSON):
{
  "title": "Nuevo título bemaster",
  "description": "Nueva descripción",
  "credits": "Nuevos créditos",
  "date": "2024-01-31T14:30:00Z",
  "isPublic": false
}
```

Eliminar un Video por ID (DELETE):

```bash
 Ruta: http://localhost:4000/api/videos/:id
```
Headers:
```bash
Bearer: eyJhbGciOiJ....
```

Comentar un video (POST): 

```bash
 Ruta: http://localhost:4000/api/videos/:id/comment
```
Headers:
```bash
Bearer: eyJhbGciOiJ....
```
```bash
 Body(cuerpo JSON):
{
  "text": "Este es un comentario sobre el video."
}
```

Darle like a un video (POST): 

```bash
 Ruta: http://localhost:4000/api/videos/:id/like
```
Headers:
```bash
Bearer: eyJhbGciOiJ....
```
