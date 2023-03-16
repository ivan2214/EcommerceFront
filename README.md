Tienda en línea de componentes de PC
Este es un proyecto de una tienda en línea para la venta de componentes de PC. Fue desarrollado para mejorar las habilidades en Strapi.

Características
Interfaz de usuario diseñada con base en los datos cargados en el backend de Strapi, incluyendo productos, categorías y marcas.
Método de pago a través de WhatsApp para simplificar la experiencia de compra y tener un mejor contacto con los clientes.
Implementación de filtros, búsquedas y ordenamientos con la base de datos de Strapi.
Copia en un archivo JSON de todos los datos para no depender de la base de datos y poder mostrar todo el proyecto.
Modificación de todos los llamados a la API con Strapi, filtros, búsquedas, ordenamientos, etc.
Utilización del paquete Node FS para crear y escribir el JSON cada vez que se realizaba alguna operación POST, PUT o DELETE.
Realización de una única petición GET al principio y comparación con los datos almacenados en el archivo JSON para mostrar los productos, ordenarlos, filtrarlos, buscarlos, añadir a favoritos y al carrito.
Tecnologías utilizadas: React, Redux-toolkit, TailwindCSS, Framer Motion, Strapi, Express, Railway y Redux-persist para almacenar en caché la información y no hacer peticiones de datos innecesarias.
Instalación
Clonar el repositorio
bash
Copy code
```bash
# Clonar el repositorio
git clone https://github.com/TU_USUARIO/TU_PROYECTO.git
```
Instalar las dependencias
Copy code
```sh
# Instalar dependencias
npm install

# Iniciar la aplicación
npm start
```

Abrir el navegador web en la dirección http://localhost:3000
Contribución
Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

Realiza un fork del proyecto
Crea una rama (git checkout -b feature/AmazingFeature)
Realiza tus cambios y haz commit de los mismos (git commit -m 'Add some AmazingFeature')
Haz push a la rama (git push origin feature/AmazingFeature)
Abre un Pull Request
Licencia
Distribuido bajo la licencia MIT. Ver LICENSE para más información.
