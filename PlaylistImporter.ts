import { IImportable } from "./IImportable";


export class PlaylistImporter {
    importer: IImportable;

    constructor(importer: IImportable) {
        this.importer = importer;
    }

    importPlaylist(name: string, importer: IImportable): void {
        importer.loadPlaylist(name);
    }
}