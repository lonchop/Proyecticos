# Monorepo: Next.js + NestJS + PostgreSQL

Este proyecto es un monorepo que contiene:

- **frontend/**: Aplicación Next.js (última versión)
- **backend/**: API con NestJS (última versión)
- **PostgreSQL**: Base de datos gestionada por Docker

## Estructura

```
mi-monorepo/
│
├── backend/         # NestJS
│   └── Dockerfile
├── frontend/        # Next.js
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## Uso rápido

1. Clona el repositorio y navega a la raíz.
2. Ejecuta:

```bash
docker compose up --build
```

Esto levantará el frontend en el puerto 3000, el backend en el 4000 y la base de datos en el 5432.

## Notas
- Asegúrate de tener Docker y Docker Compose instalados.
- Puedes modificar las variables de entorno en el `docker-compose.yml` según tus necesidades.
- Los Dockerfile están preparados para funcionar con npm, yarn o pnpm.

---

¿Listo para empezar? Solo ejecuta el comando y comienza a desarrollar 🚀 