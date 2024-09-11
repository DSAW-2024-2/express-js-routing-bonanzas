[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/2snmTAKG)
# Taller en Parejas: Creación de una API REST con Express.js

Este proyecto consiste en un reto de desarrollo backend en el que se debe crear una API REST utilizando el framework Express.js. El objetivo principal es que los estudiantes implementen múltiples rutas utilizando `express.Router()` para organizar su código de manera modular.

## Contexto

En este reto, debes crear un servidor Express.js que administre un sistema básico de información de usuarios, productos y pedidos. Para ello, debes crear un conjunto de rutas organizadas en módulos independientes. La información debe manejarse a nivel de código con arreglos simples, no se requiere base de datos.

### Endpoints a implementar

Debes crear las siguientes rutas utilizando `express.Router()`:

#### Rutas de Usuarios:
- `GET /users`: Devuelve un arreglo con todos los usuarios registrados.
- `POST /users`: Permite crear un nuevo usuario enviando un objeto JSON con los datos de este.
- `GET /users/:id`: Devuelve la información del usuario con el ID especificado.
- `PUT /users/:id`: Permite actualizar la información de un usuario existente.
- `DELETE /users/:id`: Elimina un usuario basado en su ID.

#### Rutas de Productos:
- `GET /products`: Devuelve un arreglo con todos los productos disponibles.
- `POST /products`: Permite agregar un nuevo producto al catálogo.
- `GET /products/:id`: Devuelve la información de un producto específico.
- `PUT /products/:id`: Actualiza los datos de un producto.
- `DELETE /products/:id`: Elimina un producto por su ID.

#### Rutas de Pedidos:
- `GET /orders`: Devuelve un listado de todos los pedidos realizados.
- `POST /orders`: Crea un nuevo pedido, donde se debe vincular un usuario con un producto.
- `GET /orders/:id`: Devuelve la información de un pedido en específico.

### Requisitos técnicos

- Utilizar `express.Router()` para separar las rutas de usuarios, productos y pedidos en módulos independientes.
- Crear un servidor básico con Express.js que corra en el puerto `3000` o el que prefieras.
- Asegurarse de que las rutas están correctamente organizadas y devuelven las respuestas esperadas.
- Implementar validaciones básicas en las rutas (`id` de usuario/producto/pedido debe existir antes de actualizar o eliminar).
- Manejar errores para rutas no definidas con un mensaje claro de "Ruta no encontrada".

### Requisitos del JSON

El objeto JSON que debe manejarse en cada uno de los endpoints debe tener la siguiente estructura:

#### Usuarios:
```json
{
  "id": "Identificador único",
  "name": "Nombre del usuario",
  "email": "Correo electrónico",
  "age": "Edad del usuario"
}
```

#### Productos:
```json
{
  "id": "Identificador único",
  "name": "Nombre del producto",
  "price": "Precio del producto",
  "category": "Categoría del producto"
}
```
##### Pedidos:
```json
{
  "id": "Identificador único",
  "userId": "ID del usuario que hizo el pedido",
  "productId": "ID del producto solicitado",
  "quantity": "Cantidad solicitada",
  "status": "Estado del pedido"
}
```

### Instrucciones de uso

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias del proyecto con `npm install`.
3. Crea las rutas para usuarios, productos y pedidos utilizando `express.Router()` en archivos separados.
4. Define las validaciones necesarias para la creación, modificación y eliminación de recursos.
5. Ejecuta el servidor con el comando `npm start`.
6. Prueba los endpoints haciendo solicitudes HTTP a `http://localhost:3000/users`, `http://localhost:3000/products`, y `http://localhost:3000/orders`.

### Rúbrica de evaluación

| Aspecto                              | Puntuación |
| ------------------------------------  | ---------- |
| Estructura del proyecto               | 1.0        |
| Implementación correcta de las rutas  | 2.0        |
| Uso de `express.Router()`             | 1.5        |
| Validación de entradas y manejo de errores | 1.0        |
| Buenas prácticas en la organización del código | 0.5        |
| Total                                | 6.0        |

### Casos especiales

- Asegúrate de que todas las rutas están correctamente modularizadas utilizando `express.Router()`.
- Si se intenta acceder a un recurso que no existe, el servidor debe devolver un error 404 con un mensaje apropiado.

### Recursos adicionales

- [Documentación de Express.js](https://expressjs.com/es/)
- [Manejo de rutas en Express.js](https://expressjs.com/en/guide/routing.html)
- [Tutoriales sobre Node.js y Express.js](https://www.digitalocean.com/community/tutorials/node-js-express-tutorial)



