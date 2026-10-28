# GM Transportes e Inversiones S.A.S.

Landing estática, responsive y sin dependencias de ejecución.

**Sitio público:** https://gm-transportes.pages.dev/

**Repositorio:** https://github.com/camilomf0321/gm-landing

## Vista local

Desde la raíz del repositorio:

```sh
python3 -m http.server 8080 --directory public
```

Abrir http://localhost:8080. No requiere instalación, compilación ni claves API.

## Estructura y edición

- `public/index.html`: textos, secciones, productos y metadatos.
- `public/styles/main.css`: estilos, variables de color y adaptaciones móviles.
- `public/scripts/config.js`: número y mensaje de WhatsApp.
- `public/scripts/main.js`: menú móvil y enlaces de consulta por producto.
- `public/assets/`: logo original y fotografía guardados localmente.
- `public/_headers`: cabeceras de seguridad aplicadas en Cloudflare Pages.
- `ASSETS.md`: procedencia de las imágenes.
- `VERIFICACION.md`: comprobaciones realizadas y límites pendientes.

WhatsApp confirmado por el usuario: **+57 316 395 8250**. Los ocho enlaces abren una conversación con un mensaje según la línea seleccionada; no envían mensajes automáticamente. Funcionan también sin JavaScript.

Para cambiar el número, editar `whatsappNumber` en `config.js` (código de país y número, solo dígitos). Actualizar también los enlaces `wa.me` y el número visible en `index.html` para mantener el funcionamiento sin JavaScript. Si la configuración no contiene un número válido, JavaScript muestra un aviso informativo.

Los contenidos comerciales se editan directamente en HTML. Las descripciones orientativas y notas provisionales permanecen identificadas. No se presentan clientes, años de experiencia, certificaciones, cobertura ni capacidades no verificadas.

## Publicación y actualizaciones

Publicación autorizada por el usuario el 27 de octubre de 2026. Proyecto **gm-transportes**, alojado en **Cloudflare Pages** mediante **Direct Upload**, con los archivos de `public/` en la raíz del despliegue.

**Esta publicación no está conectada automáticamente con GitHub.** Subir cambios al repositorio conserva el código, pero no actualiza la web por sí solo.

Para actualizar:

1. Editar y comprobar el sitio localmente.
2. Guardar los cambios en GitHub.
3. Crear un ZIP con el contenido de `public/`, de modo que `index.html`, `_headers`, `assets/`, `scripts/` y `styles/` queden en la raíz del ZIP.
4. En Cloudflare: Workers & Pages → gm-transportes → Create deployment, seleccionar Production y cargar el ZIP.
5. Comprobar la URL pública y los botones de WhatsApp después de desplegar.

Guía oficial de Direct Upload: https://developers.cloudflare.com/pages/get-started/direct-upload/

El proyecto no usa Workers, funciones de servidor, servicios de pago ni claves API. El subdominio `pages.dev` evita la necesidad de comprar un dominio.

## Contenido pendiente de completar

- Correo, ubicación, cobertura y horario.
- Reseña empresarial y propuesta de valor.
- Referencias, fichas técnicas, presentaciones, modalidades de maquinaria y disponibilidad.
- Fotografías propias si se desea sustituir el recurso ilustrativo.

La versión compartida conserva la franja de prototipo y `noindex, nofollow` para la revisión. Al aprobar el contenido definitivo, retirar los avisos de borrador y la etiqueta de no indexación; preparar metadatos sociales y URL canónica. El prototipo no incluye cookies, analítica ni formularios de captura.
