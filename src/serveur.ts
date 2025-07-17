import express, { Response } from "express";
import * as http from "node:http";
import { IncomingMessage, ServerResponse } from "node:http";
import { RepertoireDeServices } from "./repertoireDeServices";
import { ServicePropose } from "./ServicePropose";

function recupereLesServices(repertoireDeServices: RepertoireDeServices): ServicePropose[] {
  return repertoireDeServices.tous();
}

export function demarreServeur(port: string, repertoireDeServices: RepertoireDeServices): http.Server<typeof IncomingMessage, typeof ServerResponse> {
  const serveur = express();

  serveur.get("/api/services", (_, reponse: Response) => {
    const services = recupereLesServices(repertoireDeServices);

    reponse.send(services);
  });

  serveur.get("/", (_, reponse: Response) => {
    reponse.send({ donnee: "coucou" });
  });

  return serveur.listen(port);
}

export function eteintServeur(serveur: http.Server): void {
  serveur.close();
}
