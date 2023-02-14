import { IImportable } from "./IImportable";
import { Playlist } from "./Playlist";


export class PlaylistImporter {
    playlist: Playlist;
    importer: IImportable;

    constructor(playlist: Playlist, importer: IImportable) {
        this.playlist = playlist;
        this.importer = importer;
    }

    importPlaylist(playlist: Playlist, importer: IImportable): void {
        
    }
}