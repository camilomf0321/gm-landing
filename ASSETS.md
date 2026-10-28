# Recursos visuales

## Logo oficial

`public/assets/logo-gm.jpeg` es una copia exacta del archivo proporcionado por el usuario (`logo gm.jpeg`). Sin recorte, retoque, filtros ni modificación de píxeles. Se muestra completo conservando su proporción y fondo blanco. El texto de marca junto a la imagen es un elemento independiente.

## Fotografía ilustrativa

- Archivo: `public/assets/obra-vial.jpg`.
- Título: Machine on Road Construction.
- Autor: Tolga Durum.
- Fuente: https://www.pexels.com/photo/machine-on-road-construction-4390530/
- Descarga: https://images.pexels.com/photos/4390530/pexels-photo-4390530.jpeg?auto=compress&cs=tinysrgb&w=1920
- Licencia: https://www.pexels.com/license/
- Uso: recurso de referencia para el prototipo. No representa una obra, personal, equipo ni relación comercial de GM. Esta condición se indica en el sitio.

La imagen está guardada localmente. El sitio no carga fuentes, scripts ni imágenes de terceros. Los motivos gráficos de asfalto, gota y barril se construyen con CSS como ilustraciones decorativas; no representan productos o empaques confirmados.

## Renders industriales y versión transparente del logo (28/10/2026)

Generados con la herramienta integrada **ImageGen**, sin API ni dependencias de ejecución para el sitio. Se guardaron los originales de generación en la carpeta local de imágenes generadas y las versiones finales dentro de `public/assets/`.

- `producto-emulsiones.webp`: muestra viscosa en una bandeja industrial, 720 × 720, 22.4 KB.
- `producto-asfaltos.webp`: muestra de pavimento con textura y espesor, 720 × 720, 73.7 KB.
- `producto-aceite.webp`: recipiente industrial metálico genérico sin marca, 720 × 720, 18.3 KB.
- `logo-gm-transparente.webp`: derivado transparente del logo adjunto, 683 × 720, RGBA, WebP sin pérdida. Solo se utiliza en la sección empresarial; el JPEG original se conserva intacto.

Los renders son ilustrativos: no constituyen fichas técnicas, fotografías de inventario ni confirmación de presentaciones comerciales. Se integran en blanco sobre las tarjetas blancas, sin recuadros propios. La optimización WebP reduce peso y resolución sin añadir filtros ni nuevos elementos.

### Conjunto de prompts utilizado

**Base común de producto:** “Use case: product-mockup. Asset for GM industrial product website, not a UI mockup. Premium restrained industrial product render, credible physical volume and subtle surface texture, soft large studio light upper left, three-quarter view slightly above (25 degrees), orthographic 70mm look. Square canvas. Single centered composition fully inside frame occupying about 65 percent width and 60 percent height, enough whitespace all edges, same scale and lighting as a coherent industrial catalog series. Seamless PURE WHITE background #ffffff, natural soft contact shadow fading to white. No frames, no text, no labels, no logos, no watermarks, no invented brand. Not cartoon, no clipart, not flat illustration, not excessive hyperrealism.”

**Emulsiones:** “Subject: a shallow round dark steel industrial sample pan containing black-brown bituminous emulsion with a small thick viscous fold of material flowing slowly over one rim onto a small smooth pool beside it. Focus on liquid viscosity, restrained satin highlights and fine realistic texture; no splash, no floating droplet, no equipment scene. Sample material presentation, no claims about specific formulations.”

**Asfaltos:** “Subject: one rectangular thick pavement asphalt sample slab, roughly 30cm wide and 8cm thick, with visibly layered dark aggregate and asphalt binder texture at the cut edge, gently rough top surface, softly beveled irregular edges and a few tiny loose aggregate grains near its base. No road lane markings, no road scene, no yellow stripes.”

**Aceite:** “Subject: one unbranded industrial steel 20-liter lubricant pail, credible cylindrical proportions with pressed reinforcing ribs, securely fitted metal lid with small closed pouring spout, folded wire bail handle, muted charcoal-gray powder coat metal with very subtle wear and restrained warm highlights. No texts, symbols, logo or labels. Realistic industrial container proportions, no toy, no exaggerated drum.” La capacidad indicada en el prompt es una guía visual para las proporciones, no una presentación comercial anunciada en el sitio.

**Logo:** “Use case: background-extraction. Edit target: attached official GM logo JPEG. Remove ONLY the white background to actual transparency. Preserve every logo shape, original orange/yellow gradients, black road and dashed yellow line, exact GM letters and exact bottom company lettering, all relative positions and proportions. Do not redraw, restyle, simplify, recolor, retouch or invent any element. Keep complete logo inside frame with no clipping. Output transparent PNG, no shadows or backdrop.”
