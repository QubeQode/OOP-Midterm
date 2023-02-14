import { IImportable } from "./IImportable";
import { Playlist } from "./Playlist";
import { Song } from "./Song";

export class LocalImporter implements IImportable {
    private _filePath: string;

    constructor(filepath: string) {
        this._filePath = filepath;
    }

    loadPlaylist(name: string): Playlist {

        const data: Song[] = [];
        return new Playlist(name, data);
    }
}