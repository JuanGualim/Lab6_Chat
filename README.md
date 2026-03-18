# 💬 Chat Web App

## 📌 Descripción

Este proyecto es una aplicación de chat web desarrollada con **JavaScript puro (sin librerías externas)** y un backend en **Go** que actúa como proxy hacia un servidor de mensajes.

El objetivo del proyecto es practicar:

* Manipulación del DOM
* Uso de eventos en JavaScript
* Comunicación con APIs
* Diseño de interfaces web

---

## 🚀 Funcionalidades implementadas

### ✅ Chat funcional

* Envío y recepción de mensajes
* Conexión a API externa mediante backend en Go

### 🔄 Auto-refresh

* Actualización automática de mensajes cada 5 segundos

### ⌨️ Envío con Enter

* Permite enviar mensajes presionando la tecla **Enter**

### ✂️ Límite de caracteres

* Máximo de **140 caracteres por mensaje**
* Contador dinámico en tiempo real

### 📜 Scroll inteligente

* Si el usuario está abajo → el chat baja automáticamente
* Si el usuario está leyendo arriba → el scroll no se mueve

### 📥 Input fijo

* El área de escritura permanece fija en la parte inferior

### 🖼️ Preview de imágenes

* Detecta links de imágenes (`.jpg`, `.png`, `.gif`, `.webp`)
* Muestra una vista previa dentro del chat

### 🎨 Diseño UI

* Estilo tipo chat moderno
* Burbujas de mensajes
* Diferenciación de mensajes propios

---

## 🛠️ Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla)
* Go (backend)

---

## 📂 Estructura del proyecto

```
.
├── main.go          # Servidor backend en Go
├── static/
│   ├── index.html  # Interfaz del chat
│   ├── script.js   # Lógica del frontend
│   └── styles.css  # Estilos
```

---

## ⚙️ Cómo ejecutar el proyecto

### 1. Clonar repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

### 2. Ejecutar servidor

```bash
go run main.go
```

### 3. Abrir en navegador

```
http://localhost:8000
```

---

## 🔗 API utilizada

El backend se conecta a:

```
https://chat.joelsiervas.online/messages
```

---

## 📸 Ejemplo de uso

### Mensaje normal

```
Hola mundo
```

### Imagen

```
https://i.imgur.com/8Km9tLL.jpg
```


---

## 👤 Autor

Juan Gualim

