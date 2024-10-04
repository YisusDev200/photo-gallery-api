# API de Fotos

Esta es una API básica para gestionar fotos, que incluye operaciones CRUD (Crear, Leer, Actualizar, Eliminar). La API se consume desde un Frontend desarrollado en Flutter, y el proyecto tiene como objetivo sincronizar SQLite con MySQL.

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalación

1. Clona el repositorio:

    ```sh
    git https://github.com/YisusDev200/photo-gallery-api.git
    ```

2. Instala las dependencias:

    ```sh
    npm install
    ```

3. Configura las variables de entorno necesarias creando un archivo `.env` en la raíz del proyecto.


## Uso

1. Inicia el servidor en modo desarrollo:

    ```sh
    npm run dev
    ```


## Endpoints

### Obtener todas las fotos

- **GET /api/photos**
  - Descripción: Obtiene todas las fotos disponibles.
  - Respuesta: Array de objetos.

### Obtener una foto por ID

- **GET /api/photos/:id**
  - Descripción: Obtiene una foto específica por su ID.
  - Parámetros:
    - `id` (string): ID de la foto.
  - Respuesta: Objeto de la foto.

### Crear una nueva foto

- **POST /api/photos**
  - Descripción: Crea una nueva foto.
  - Parámetros (form-data):
    - `name` (text): Nombre de la foto.
    - `description` (text): Descripción de la foto.
    - `photo` (file): Archivo de la foto.
  - Respuesta: Objeto de la foto creada.

### Actualizar una foto por ID

- **PUT /api/photos/:id**
  - Descripción: Actualiza una foto existente por su ID.
  - Parámetros:
    - `id` (string): ID de la foto.
  - Parámetros (form-data):
    - `name` (text): Nombre de la foto.
    - `description` (text): Descripción de la foto.
    - `photo` (file): Archivo de la foto.
  - Respuesta: Objeto de la foto actualizada.

### Eliminar una foto por ID

- **DELETE /api/photos/:id**
  - Descripción: Elimina una foto específica por su ID.
  - Parámetros:
    - `id` (string): ID de la foto.
  - Respuesta: Mensaje de éxito o error.

## Estructura de Archivos

- `index.js`: Punto de entrada de la aplicación.
- `src/config/database.js`: Configuración de la base de datos.
- `src/controllers/photoController.js`: Controladores para las operaciones CRUD.
- `src/models/photoModel.js`: Modelo de datos para las fotos.
- `src/routes/photoRouter.js`: Rutas de la API.
- `src/utils/deleteFile.js`: Utilidad para eliminar archivos.
- `src/utils/generatePhotoUrl.js`: Utilidad para generar URLs de fotos.
- `uploads/`: Carpeta para almacenar las fotos subidas.
