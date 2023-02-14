import { IImportable } from "./IImportable";
import { Playlist } from "./Playlist";

export class LocalImporter implements IImportable {
    private _filePath: string;

    constructor(filepath: string) {
        this._filePath = filepath;
    }

    loadPlaylist(): void {
        
    }
}