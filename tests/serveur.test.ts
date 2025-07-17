import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { demarreServeur, eteintServeur } from "../src/serveur";
import * as http from "node:http";
import { RepertoireDeServicesEnMemoire } from "../src/RepertoireDeServicesEnMemoire";

describe('serveur', () => {
  const portDeTest = '8081';
  let serveur: http.Server;
  const repertoireDeServices = new RepertoireDeServicesEnMemoire();

  beforeAll(() => {
    serveur = demarreServeur(portDeTest, repertoireDeServices);
  });

  afterAll(() => {
    eteintServeur(serveur);
  })

  it('retourne les services', async () => {
    const service = {
      nom: "nom d'un service",
      version: "version 1",
      description: "une description",
      miniature: "http://lien/vers/miniature",
      lien: "http://lien/vers/lien"
    };

    repertoireDeServices.ajoute(service);

    const requete = await fetch(`http://localhost:${portDeTest}/api/services`);

    const reponse = await requete.json();

    expect(requete.status).toStrictEqual(200);
    expect(reponse[0]).toStrictEqual(service);
  });
});
