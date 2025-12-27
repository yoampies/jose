import sharp from "sharp";
import fs from "fs";
import path from "path";

const directory = "src/assets";

fs.readdirSync(directory).forEach((file) => {
  if (/\.(jpe?g|png)$/i.test(file)) {
    const filePath = path.join(directory, file);
    const fileName = path.parse(file).name;

    // Convertir a WebP
    sharp(filePath)
      .webp({ quality: 80 })
      .toFile(path.join(directory, `${fileName}.webp`));

    // Convertir a AVIF (Opcional, mayor compresión)
    sharp(filePath)
      .avif({ quality: 65 })
      .toFile(path.join(directory, `${fileName}.avif`));
    
    console.log(`✅ Procesado: ${file}`);
  }
});