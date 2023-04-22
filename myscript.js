import fs from "fs";

const pkg = fs.readFileSync("./package.json");

const pkgjson = JSON.parse(pkg);

pkgjson.name = "dead-on-the-water";

fs.writeFileSync("./package.copy.json", JSON.stringify(pkgjson, null, 2));

console.log("complete");
