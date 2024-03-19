import fs from "fs/promises"

//fs
const main = async () => {
   let text = await fs.readFile("myfile.txt", "utf8");
    console.log(text);
}

main();