import { RepertoireDeServices } from "./repertoireDeServices";
import { ServicePropose } from "./ServicePropose";
import XLSX from "xlsx";

export class RepertoireDeServicesXlsx implements RepertoireDeServices {
  private readonly cheminDuFichier: string;

  constructor(cheminDuFichier: string) {
    this.cheminDuFichier = cheminDuFichier;
  }

  tous(): ServicePropose[] {
    const workbook = XLSX.readFile(this.cheminDuFichier);

    return XLSX.utils.sheet_to_json(workbook.Sheets["Sheet1"]);
  }

}
