# FLOW CHALLENGE
Flow Challenge es una aplicación de consulta de clima en la que el usuario pueda visualizar el pronóstico actual y el de los próximos 5 días de la ciudad en la que se encuentra, y a su vez un selector que permita cambiar entre 5 ciudades preseleccionadas.

# SOBRE EL DESARROLLO
El proyecto se desarrollo en cuatro etapas principales:
    - Configuracion: Generar repositorio, vincularlo con vercel, iniciar una app react y armar la arquitectura de redux/redux-saga.
    - Maquetado: Armado de estructura y componentes principales.
    - Servicios: Generar servicios para consumir la API.
    - Integracion: Se integro el maquetado con los servicios.
Si bien es un proyecto chico, se utilizo Redux para el manejo de estado. El motivo por el cual se utilizo esta arquitectura es para poder mostrar mi conocimiento. Si fuera un proyecto real de estas carecteristicas, se puede utilizar una arquitectura mas simple.

# GIT FLOW

Rama master: Produccion.
Rama development: Desarrollo.
Ramas feature: Desarrollo de nuevos modulos/funcionalidad. Parte de development.
Ramas bugfix: Arreglo de bugs. Parte de development.
Ramas hotfix: Arreglo de bugs en produccion. Parte de master.

# PRODUCCION

El proyecto se encuentra deployado en [https://challenge-flow-two.vercel.app/](https://challenge-flow-two.vercel.app/)
Para subir cambios, pushear a la rama master y el deploy es automatico.

# INSTRUCCIONES PARA LEVANTAR EL PROYECTO
Después de clonar este proyecto, debe instalar los paquetes npm con el siguiente comando: 
    -npm install

En el directorio del proyecto, puede ejecutar:
    -npm start

Abrir [http://localhost:3000](http://localhost:3000) en su navegador

# API
Documentacion: [https://openweathermap.org/api](https://openweathermap.org/api)