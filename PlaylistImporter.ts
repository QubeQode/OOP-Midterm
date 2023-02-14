import { IImportable } from "./IImportable";
import { Playlist } from "./Playlist";


export class PlaylistImporter {
    importer: IImportable;

    constructor(importer: IImportable) {
        this.importer = importer;
    }

    importPlaylist(name: string, importer: IImportable): Playlist {
        return new Playlist(name, importer.loadPlaylist());
    }
}