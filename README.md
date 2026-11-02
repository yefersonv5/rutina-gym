# Rutina de gym

App web para el gimnasio: rutina de 4 días con la técnica animada de cada ejercicio. Se instala en el teléfono como una app y funciona sin internet.

- **Día 1:** Pecho y tríceps
- **Día 2:** Cuádriceps
- **Día 3:** Espalda y bíceps
- **Día 4:** Hombro, abdomen y cardio

**Abrir:** https://yefersonv5.github.io/rutina-gym/

## Instalar en el teléfono

- **iPhone:** abrir en Safari → Compartir → Agregar a pantalla de inicio.
- **Android:** abrir en Chrome → menú ⋮ → Instalar app.

La primera vez pide el nombre de quien la usa (se cambia tocando el círculo de iniciales). Lo marcado como hecho y las series se guardan solo en ese teléfono.

## Qué trae cada ejercicio

- Figura animada con el músculo principal en lima, la trayectoria del movimiento y una figura transparente que marca hasta dónde llegar.
- Tempo guiado: 1 s de fuerza (exhala), pausa, 2 s de regreso controlado (inhala), pausa.
- Indicación grande de lo que toca hacer en cada fase y el punto clave de técnica.
- Contador de series con descanso automático; la pantalla no se apaga mientras el ejercicio está abierto.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | Toda la app (estilos, datos de la rutina y animaciones) |
| `sw.js` | Guarda la app en el teléfono para que abra sin internet |
| `manifest.webmanifest` | Nombre, colores e íconos de la app instalada |
| `fonts/` | Letra Plus Jakarta Sans, local para que funcione sin internet |
| `marca/logo.svg` | Fuente del ícono |
| `marca/iconos.py` | Genera los PNG de los íconos desde el logo |
| `icon-*.png`, `apple-touch-icon.png` | Íconos generados (no se editan a mano) |
