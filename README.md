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

