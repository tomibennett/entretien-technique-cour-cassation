import { RepertoireDeServices } from "./RepertoireDeServices";
import { ServicePropose } from "./ServicePropose";

export class RepertoireDeServicesEnMemoire implements RepertoireDeServices {
  private readonly services: ServicePropose[] = [];

  constructor() {
  }

  ajoute(service: ServicePropose): void {
    this.services.push(service);
  }

  tous(): ServicePropose[] {
    return this.services;
  }
}
