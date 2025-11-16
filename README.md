# Arquitectura Hexagonal con TypeScript y testing con Vitest

Para mostrar este ejemplo decidi hacer dos CRUD basicos relacionados con persistencia en local storage.
Lo separamos en dos modulos distintos, use "modules" pero por convención tambien puede llamarse "features".

-/modules (Los modulos que tendra nuestra aplicación)
----/categories
-------/application (Casos de uso y UI (Basicamente el react de siempre))
----------/ui
----------/use-cases
-------/domain (Interfaces/Contratos de las entidades y repositorios de este modulo)
----------/entities
----------/repositories
-------/infrastructure (Consultas a los endpoints/webservices, en mi caso para el ejemplo LocalStorage)
----------/LocalStorageCategoryRepository.tsx

----/products
-------/application (Casos de uso y UI (Basicamente el react de siempre))
----------/ui
----------/use-cases
-------/domain (Interfaces/Contratos de las entidades y repositorios de este modulo)
----------/entities
----------/repositories
-------/infrastructure (Consultas a los endpoints/webservices, en mi caso para el ejemplo LocalStorage)
----------/LocalStorageProductRepository.tsx


-/shared (Cualquier cosa que reutilicemos en los distintos modules la creamos aqui para evitar crearla por cada module)
---/components
---/hooks
---/context


-/testing
----/categories
----/products




