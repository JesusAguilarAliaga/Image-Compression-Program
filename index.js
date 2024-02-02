import fse from "fs-extra";
import sharp from "sharp";
import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";
import imageminWebp from "imagemin-webp";
import imageminGifsicle from "imagemin-gifsicle";

const inputFolder = "src"
const outputFolder = "results"
const targetWidth = 1920

const processImage = async () => {
    try {
        const files = await fse.readdir(inputFolder)

        for (const file of files) {
            let inputPath = `${inputFolder}/${file}`
            let outputPath = `${outputFolder}/${file}`

            await sharp(inputPath)
                .resize(targetWidth)
                .toFile(outputPath)

            await imagemin([outputPath], {
                destination: outputFolder,
                plugins: [
                    imageminJpegtran({ quality: 80 }),
                    imageminPngquant(),
                    imageminSvgo(),
                    imageminWebp({ quality: 80 }),
                    imageminGifsicle()
                ]
            })
            console.log(`Image compressed ${file}`)
        }
    }
    catch (error) {
        console.error(error)
    }
    finally {
        console.log("Images compressed successfully")
    }
}

processImage()