import path from "path";
import { fileURLToPath } from "url";

const localFilePath = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return __dirname;
};
export { localFilePath };