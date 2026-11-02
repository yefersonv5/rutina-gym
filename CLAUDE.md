# Rutina de gym: guía para trabajar en este repo

- La app publicada es `index.html` en la rama main (GitHub Pages). Todo vive en ese archivo: estilos por secciones numeradas, datos en `DAYS` y el motor de animación.
- Idioma: español de Colombia. Sin raya larga en los textos.

## Reglas de app instalable (las mismas de Caudal)

- Sin zoom: viewport con `maximum-scale=1,user-scalable=no,viewport-fit=cover`, `touch-action:manipulation` en `html`, bloqueo de `gesturestart` y doble toque, y campos a 16px en pantallas táctiles para que iOS no acerque.
- Pantalla completa: `display: standalone`, barra de estado `black-translucent` y márgenes con `env(safe-area-inset-*)`.
- Íconos: `icon-192`, `icon-512` y `apple-touch-icon` van a sangre (sin esquinas, el sistema las redondea); `icon-maskable` deja el dibujo en el 80 % central. Se generan con `python3 marca/iconos.py` desde `marca/logo.svg`; no se editan a mano.
- Navegación: barra inferior de 4 opciones y el botón principal ("Siguiente") flotante aparte, encima de la barra a la derecha; se encoge al bajar.
- Sin internet: `sw.js` guarda la app (copia guardada primero, actualiza en segundo plano). **Al cambiar cualquier archivo, subir el número de `CACHE` en `sw.js`** y agregar ahí los archivos nuevos.

## Animaciones

- Cada ejercicio define `A` (posición estirada, inicio de la fuerza) y `B` (posición contraída). `M` es una pose intermedia opcional y `ual` acorta el brazo para simular escorzo.
- Ángulos en grados (0 = derecha, 90 = arriba); la figura de vista lateral mira a la derecha. Ojo con el sentido del giro: el ángulo se interpola en línea recta, así que para pasar por detrás se usan valores mayores de 180 (por ejemplo 264 en vez de -96).
- Cuerpo: cada parte (torso, brazos, piernas, cabeza, pantaloneta, tenis) es una curva suave (`smooth`) armada con perfiles de grosor (`UA`, `FA`, `TH`, `SHN` y sus versiones de frente) y se pinta con `part()`: primero un contorno del color del fondo (`--ol`) y encima el relleno, para que se distinga cuando pasa por delante de otra. El lado de atrás va más oscuro. Mantener el estilo minimalista: sin sombreados ni texturas, solo líneas finas de detalle (`dl`) en pecho y hombro.
- Músculos resaltados (`hl`): `chest`, `back`, `abs`, `quad`, `shin`, `bi`, `tri`, `shoulder`, `thigh` (vista frontal).
- `cue` son las dos frases grandes (fuerza y regreso), `key` el punto clave, `rest` los segundos de descanso y `track` el punto cuya trayectoria se dibuja (por defecto la mano).
