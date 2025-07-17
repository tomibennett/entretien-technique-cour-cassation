import { demarreServeur } from "./serveur";
import { RepertoireDeServicesStatiqueEnMemoire } from "./RepertoireDeServicesStatiqueEnMemoire";

demarreServeur(process.env["PORT"] || "8080", new RepertoireDeServicesStatiqueEnMemoire());
