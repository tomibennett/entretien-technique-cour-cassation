import { RepertoireDeServices } from "./repertoireDeServices";
import { ServicePropose } from "./ServicePropose";

export class RepertoireDeServicesStatiqueEnMemoire implements RepertoireDeServices {
  private readonly services = [{
    nom: "nom",
    version: "version",
    description: "description",
    miniature: "miniature",
    lien: "lien",
  }];

  constructor() {

  }

  tous(): ServicePropose[] {
    return this.services;
  }
}
