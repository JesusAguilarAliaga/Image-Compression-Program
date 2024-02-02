# Image Compression Program - EN

This command-line program utilizes Node.js and various libraries to resize and compress images in different formats. You can use it to optimize images in batches, reducing file size without significantly compromising visual quality.

## Requirements

- Node.js installed on your system.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/JesusAguilarAliaga/Image-Compression-Program.git
   cd image-compression-program

2. Install dependencies:

   ```bash
   npm install
   ```
## Usage

1. Place your images to be compressed in the `src` folder.
2. Run the program:

   ```bash
   npm start
   ```
3. Optimized images will be stored in the `results` folder with the format JPEG, and WebP.

## Configuration

You can adjust the program's settings in the `index.js` file by modifying variables such as `inputFolder`, `outputFolder`, and `targetWidth` according to your needs.

### Optimization Plugins

The program uses the following libraries for image optimization:

- [sharp](https://github.com/lovell/sharp): Image resizing.
- [imagemin](https://github.com/imagemin/imagemin): Image compression.
- [imagemin-jpegtran](https://github.com/imagemin/imagemin-jpegtran): JPEG compression.
- [imagemin-pngquant](https://github.com/imagemin/imagemin-pngquant): PNG compression.
- [imagemin-svgo](https://github.com/imagemin/imagemin-svgo): SVG compression.
- [imagemin-webp](https://github.com/imagemin/imagemin-webp): WebP compression.
- [imagemin-gifsicle](https://github.com/imagemin/imagemin-gifsicle): GIF compression.

## Contributions

If you encounter any issues or have improvement suggestions, feel free to open an issue or submit a pull request.

## License

This project is under the MIT license.


---


# Image Compression Program - ES

Este programa de línea de comandos utiliza Node.js y varias bibliotecas para redimensionar y comprimir imágenes en diferentes formatos. Puedes utilizarlo para optimizar imágenes en lotes, reduciendo el tamaño de archivo sin perder significativamente la calidad visual.

## Requisitos

- Node.js instalado en tu sistema.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/JesusAguilarAliaga/Image-Compression-Program.git
   cd image-compression-program

2. Instala las dependencias:

   ```bash
   npm install
   ```
## Uso

1. Coloca tus imagenes a comprimir en la carpeta `src`
2. Ejecuta el programa:

   ```bash
   npm start
   ```
3. Las imagenes optimizadas se almacenan en la carpeta `results` en formato JPEG y Webp.

## Configuración

Puedes ajustar la configuración del programa en el archivo index.js, modificando las variables como inputFolder, outputFolder, y targetWidth según tus necesidades.

### Plugins de Optimización

El programa utiliza las siguientes bibliotecas para optimizar las imagenes:

- [sharp](https://github.com/lovell/sharp): Redimensión de imágenes.
- [imagemin](https://github.com/imagemin/imagemin): Compresión de imágenes.
- [imagemin-jpegtran](https://github.com/imagemin/imagemin-jpegtran): Compresión JPEG.
- [imagemin-pngquant](https://github.com/imagemin/imagemin-pngquant): Compresión PNG.
- [imagemin-svgo](https://github.com/imagemin/imagemin-svgo): Optimización SVG.
- [imagemin-webp](https://github.com/imagemin/imagemin-webp): Compresión WebP.
- [imagemin-gifsicle](https://github.com/imagemin/imagemin-gifsicle): Compresión GIF.

## Contribuciones

Si encuentras algún problema o tienes sugerencias de mejora, no dudes en abrir un problema o enviar una solicitud de extracción.

## Licencia

Este proyecto está bajo la Licencia MIT