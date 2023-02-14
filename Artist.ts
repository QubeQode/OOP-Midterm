import { Album } from "./Album";

export class Artist {
    private _name: string;
    private _albums: Album[];

    constructor(name: string, albums: Album[]) {
        this._name = name;
        this._albums = albums;
    }

    public addAlbum(albumName: Album): void {
        this._albums.push(albumName);
    }
};