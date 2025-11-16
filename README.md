# 🧱 Arquitectura Hexagonal en frontend con React y TypeScript

Este proyecto es un pequeño ejemplo práctico de cómo aplicar **Arquitectura Hexagonal (Ports & Adapters)** en una aplicación hecha con **TypeScript**, separando correctamente la lógica de dominio, la capa de aplicación y las implementaciones de infraestructura.

Para mostrarla de forma simple, he hecho dos CRUD básicos (**categories** y **products**), ambos persistidos en **LocalStorage**.

---

## 🚀 Objetivos del proyecto

- Enseñar cómo separar responsabilidades siguiendo Arquitectura Hexagonal
- Implementar de forma limpia el Repository Pattern (Patrón Repositorio)
- Mantener React dentro de la capa de aplicación pero sin generar dependencias
- Testing unitario con Vitest
- Reutilizar componentes mediante un módulo `shared`

---

## 🏛 Estructura del proyecto
```
/modules # Cada módulo representa un "bounded context"
/├── categories
│ ├── application # Casos de uso + UI (React)
│ │ ├── ui
│ │ └── use-cases
│ ├── domain # Entidades y contratos de repositorios
│ │ ├── entities
│ │ └── repositories
│ └── infrastructure # Adaptadores concretos (LocalStorage, API, etc.)
│ └── LocalStorageCategoryRepository.ts
│
└── products
├── application
│ ├── ui
│ └── use-cases
├── domain
│ ├── entities
│ └── repositories
└── infrastructure
└── LocalStorageProductRepository.ts

/ shared # Recursos comunes entre módulos
├── components
├── hooks
└── context

/ testing # Testing de cada módulo (Vitest)
├── categories
└── products

```

---

## 🧩 Arquitectura Hexagonal (Explicación breve)

### 1. Domain (Núcleo del negocio)

Contiene:

- Entidades
- Value objects
- Interfaces de repositorios
- Reglas de negocio

> No depende de nada externo. No sabe qué es React, LocalStorage ni fetch/axios.

### 2. Application (casos de uso + UI)

Incluye:

- Casos de uso
- Componentes React (UI)
- Servicios propios de la aplicación

> Es la capa que coordina la interacción entre la UI y el dominio.

### 3. Infrastructure (adaptadores)

Incluye:

- Repositorios concretos (LocalStorage, API REST, GraphQL, IndexedDB…)
- Adaptadores externos en general

> Solo esta capa sabe “cómo se hace” algo. Domina los detalles técnicos.

---

## 🧪 Testing con Vitest

Cada módulo tiene su propia carpeta de tests dentro de `/testing`.

Se prueban sobre todo:

- Casos de uso
- Entidades
- Repositorios "fake" o "in-memory"

> Garantiza que la lógica del negocio funciona independientemente de la infraestructura.

---

## 💾 Persistencia en LocalStorage

Para simplificar el ejemplo, se implementa un repositorio local:

```ts
export class LocalStorageCategoryRepository implements CategoryRepository { ... }
```

Esto demuestra cómo, gracias a la arquitectura hexagonal:

La aplicación usa CategoryRepository
Pero no le importa si la persistencia es:

- LocalStorage
- API REST
- BD real
- archivos
- mock / in-memory

🔧 Tecnologías usadas

- TypeScript
- React
- Arquitectura Hexagonal
- Vitest
- LocalStorage
- Vite

📦 Scripts
```
npm install
npm run dev
npm run test
```

🤝 Contribuciones

Siéntete libre de abrir issues o enviar PRs si encuentras mejoras o quieres extender el ejemplo.
