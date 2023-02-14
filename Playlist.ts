import { Song } from "./Song";
import { Album } from "./Album";

export class Playlist {
    private _name!: string;
    private _trackList!: Song[];

    constructor(name: string, trackList: Song[]) {
        this.name = name;
        this.trackList = trackList;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get trackList(): Song[] {
        return this._trackList;
    }

    set trackList(trackList: Song[]) {
        this._trackList = trackList
    }

    addTrack(track: Song): void {
        this._trackList.push(track);
    }

    addAlbum(albumName: Album): void {
        albumName.tracks.forEach(track => {
            this._trackList.push(track);
        })
    }
}