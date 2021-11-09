const { AwesomeQR } = require("awesome-qr");
const fs = require("fs");

const background = fs.readFileSync("assets/qr-background.png");

module.exports = {
    generateQRCode: async (string) => {
        const buffer = await new AwesomeQR({
            text: string,
            size: 1024,
            backgroundImage: background,
            whiteMargin: false,
            autoColor: false,
            components: {
                data: {
                    scale: 0.5
                }
            },
            backgroundDimming: "#ffffff40"
        }).draw();
        return buffer;
    }
}