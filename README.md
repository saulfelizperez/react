# Modulo 3 - React + TypeScript

## 📌 Descripción general

En este modulo se aborda el desarrollo de interfaces de usuario utilizando React junto con TypeScript, incorporando tipado estático en la definición de componentes, propiedades y estado.

El propósito es aplicar en el frontend los conceptos fundamentales trabajados previamente, como tipado fuerte, genericos y modelado de datos.

---

## Organizacion del proyecto

```txt
react/
 --react/
    --src/
      -App.tsx
      -DataTable.tsx
      -main.tsx
      -index.css
      -index.html
      -package.json
      -tsconfig.json

---README.md

```

## Conceptos implementados

```bash
 Componentización

- Se ha utilizado el modelo de componentes funcionales de React para estructurar la interfaz de forma modular y reutilizable.
```

```bash
--- Tipado de props

- Las propiedades de los componentes están definidas mediante tipos explícitos, garantizando contratos de datos claros entre componentes.
```

```bash
--- Uso de genéricos

- El componente DataTable<T> ha sido diseñado como una solucion generica que permite renderizar distintos tipos de datos manteniendo la seguridad de tipos.
```

```bash
--- Gestión de estado tipado

- Se emplea el hook useState con tipado explícito para gestionar el estado interno del component de manera controlada.
```

```bash
--- Aplicación de partial<T>

- El uso de partial<T> permite manejar estados intermedios donde los objetos no requieren estar completamente definidos, facilitando escenarios de edición.
```

## Ejecucion

### Instalación de dependencias:

```bash
npm install
```

### Inicio del entorno de desarrollo:

```bash
npm run dev
```

### Finalidad del modulo

```bash
Integrar TypeScript en aplicaciones React

Definir componentes con tipado estricto

Reutilizar lógica mediante genéricos

Controlar el estado de forma segura

Minimizar errores en tiempo de desarrollo
```

### Conclusión

```bash
La combinación de React y TypeScript permite desarrollar interfaces más sólidas y mantenibles, reforzando la calidad del código mediante el uso de tipado estático y estructuras bien definidas.
```
