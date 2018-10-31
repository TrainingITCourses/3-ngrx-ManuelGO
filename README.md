# assets_angular-speed

En `speed\src\assets\data` están los ficheros _json_ con datos base para los ejercicios del curso de **Angular Speed**

Criterios de búsqueda:

- **Estado**: Son los estados de lanzamiento y están todas en el fichero `launchstatus.json`
- **Agencias**: Las agencias responsables, lo mismo en para el fichero `agencies.json`
- **Tipo**: Son los tipos de misiones y están todas en el fichero `missiontypes.json`

Para estos criterios hay que filtrar en el fichero `launches.json`, que es la librería de lanzamientos, según el campo:

- **Estado** -> `status`
- **Agencia** -> `agencies`. Aquí hay 3. Agencias por plataforma de lanzamiento (pads), agencias por cohete (rocket) y por misión (missions). Haced la búsqueda por cualquiera de éstas.
- **Tipo** -> `misions[0].type` dentro del array de misiones (missions). Basta con buscar en el primer registro.

En `speed\src\app\store\models` tenéis los modelos de datos en TypeScript por si os sirven de ayuda.
