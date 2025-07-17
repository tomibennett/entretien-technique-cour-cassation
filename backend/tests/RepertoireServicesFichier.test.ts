import { describe, expect, it } from "vitest";
import path from "path";
import { RepertoireDeServicesXlsx } from "../src/RepertoireDeServicesXlsx";

describe("RepertoiresServicesXlsx", () => {
  it("retourne les services présent dans un fichier au format xlsx", () => {
    const repertoireDeServicesXlsx = new RepertoireDeServicesXlsx(path.join(import.meta.dirname, "./services.xlsx"));

    const services = repertoireDeServicesXlsx.tous();

    expect(services).toHaveLength(1);
    expect(services[0].nom).toStrictEqual("ceci est un nom");
    expect(services[0].version).toStrictEqual("version soixante douze");
    expect(services[0].description).toStrictEqual("une description");
    expect(services[0].miniature).toStrictEqual("http://lien/vers/miniature");
    expect(services[0].lien).toStrictEqual("http://lien/vers/lien");
  });
});
