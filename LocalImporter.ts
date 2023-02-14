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
        console.log(`Your playlist at location ${this._filePath} will be loaded`);

        const playlistData: {albums: {}[]} = JSON.parse(readFileSync(this._filePath, 'utf-8'));

        const data: Song[] = [];
        
        playlistData.albums.forEach(album => {
            const iterableAlbum: {name: string, tracks: string[]} = JSON.parse(JSON.stringify(album));
            iterableAlbum.tracks.forEach(track => {
                const song = new Song(track);
                data.push(song);
            })
        })
        
        return new Playlist(name, data);
    }
}