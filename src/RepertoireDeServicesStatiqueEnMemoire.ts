import { RepertoireDeServices } from "./repertoireDeServices";
import { ServicePropose } from "./ServicePropose";

export class RepertoireDeServicesStatiqueEnMemoire implements RepertoireDeServices {
  private readonly services = [{
    nom: "nom",
    version: "version",
    description: "description",
    miniature: "https://mna-bucket.s3.eu-west-3.amazonaws.com/test-tech/beta.jpeg",
    lien: "lien",
  },
    {
      nom: "nom2",
      version: "version2",
      description: "description2",
      miniature: "https://mna-bucket.s3.eu-west-3.amazonaws.com/test-tech/beta.jpeg",
      lien: "lien",
    }];

  constructor() {

  }

  tous(): ServicePropose[] {
    return this.services;
  }
}
