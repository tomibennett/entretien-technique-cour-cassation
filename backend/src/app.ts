import { demarreServeur } from "./serveur";
import { RepertoireDeServicesXlsx } from "./RepertoireDeServicesXlsx";
import path from "path";

demarreServeur(process.env["PORT"] || "8080", new RepertoireDeServicesXlsx(path.join(import.meta.dirname, "../services.xlsx")));
