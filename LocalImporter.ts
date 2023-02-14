import { IImportable } from "./IImportable";
import { readFileSync } from "fs";
import { Playlist } from "./Playlist";

export class LocalImporter implements IImportable {
    private _filePath: string;

    constructor(filepath: string) {
        this._filePath = filepath;
    }

    loadPlaylist(): Playlist {
        const playlist = readFileSync(this._filePath, 'utf-8');

        return playlist;
    }
}

const playlist = readFileSync('./database/database.json', 'utf-8');
console.log(JSON.parse(playlist));