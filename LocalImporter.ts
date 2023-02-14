import { IImportable } from "./IImportable";
import { readFileSync } from "fs";
import { Playlist } from "./Playlist";
import { Song } from "./Song";

export class LocalImporter implements IImportable {
    private _filePath: string;

    constructor(filepath: string) {
        this._filePath = filepath;
    }

    loadPlaylist(name: string): Playlist {
        const playlistData = readFileSync(this._filePath, 'utf-8');
        const data: Song[] = [];
        return new Playlist(name, data);
    }
}

const playlist = readFileSync('./database/database.json', 'utf-8');
console.log(JSON.parse(playlist));