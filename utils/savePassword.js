import fs from "fs";
import os from "os";
import chalk from "chalk";

const savePassword = (password) => {
  fs.open(new URL("../passwords.txt", import.meta.url), "a", "666", (e, id) => {
    fs.write(id, password + os.EOL, null, "utf8", () => {
      fs.close(id, (err) => {
        if (err) throw err;
        console.log(chalk.green("Password saved to passwords.txt"));
      });
    });
  });
};

export default savePassword;
