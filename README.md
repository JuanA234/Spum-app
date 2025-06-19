# 🎨 SPUM App (Frontend)

Este es el frontend del sistema **SPUM** (Sistema de Préstamo Universitario de Material), desarrollado en **React** utilizando **Vite** como entorno de desarrollo y construcción. Se comunica con el backend en Spring Boot mediante una API RESTful para gestionar usuarios, estudiantes, artículos, reservas y penalizaciones.

---

## 🚀 Tecnologías utilizadas

- React 18+
- Vite
- Axios
- React Router
- Bootstrap / Tailwind (si aplica)
- ESLint

---

## ⚙️ Instalación y configuración

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/spum-app.git
   cd spum-app
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura el entorno**
   
   Si el backend corre localmente en `http://localhost:8080`, asegúrate de que el archivo `.env` (si existe) lo apunte correctamente, por ejemplo:
   ```env
   VITE_API_URL=http://localhost:8080
   ```

---

## 🧪 Ejecución en desarrollo

```bash
npm run dev
```

Esto iniciará la app en `http://localhost:5173` (por defecto en Vite).

---

## 📂 Estructura del proyecto

```bash
├── admin/            # Funcionalidades de administración
├── assets/           # Recursos estáticos (imágenes, iconos, etc.)
├── auth/             # Componentes y lógica de autenticación
├── auxiliar/         # Funciones y utilidades auxiliares
├── components/       # Componentes reutilizables
├── layout/           # Componentes de estructura/diseño
├── pages/            # Vistas o páginas principales
├── App.css           # Estilos principales de la aplicación
├── App.jsx           # Componente raíz
└── main.jsx          # Punto de entrada
```

---

## 🔐 Autenticación y flujo

- El login obtiene un JWT desde el backend (`/auth/login`) y lo guarda en el almacenamiento local.
- El token se adjunta automáticamente en los headers de las peticiones protegidas.

---

## 🔁 Comunicación con el backend

El proyecto se comunica con el **backend SPUM Backend**, asegurándose de enviar el token JWT como `Authorization: Bearer {token}`.

---

## 🧹 Scripts útiles

```bash
npm run dev         # Ejecuta servidor de desarrollo
npm run build       # Compila para producción
npm run preview     # Previsualiza la app compilada
npm run lint        # Revisa errores de estilo/código
```

---

## ☁️ Despliegue

### ✅ Despliegue en **Vercel**

1. Crea una cuenta en Vercel
2. Conecta tu repositorio de GitHub
3. Durante la configuración:
   * **Framework**: React
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
4. Agrega una variable de entorno:
   ```ini
   VITE_API_URL=https://backend-spum.vercel.app
   ```
5. Finaliza y despliega.

### ✅ Despliegue en **Netlify**

1. Crea una cuenta en Netlify
2. Sube tu proyecto desde GitHub
3. Configura el despliegue:
   * **Build Command**: `npm run build`
   * **Publish directory**: `dist`
4. En "Site settings" → "Environment variables":
   ```ini
   VITE_API_URL=https://backend-spum.onrender.com
   ```
5. Click en "Deploy site".

---

## 👨‍💻 Autor

**Juan Andrés Avendaño Luján**
**Arturo Andrés Velasquez Ortíz**

---

## 📝 Notas

- Proyecto basado en plantilla `React + Vite`
- Requiere backend funcional para operar correctamente.
