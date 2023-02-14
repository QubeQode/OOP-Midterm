import { Playlist } from "./Playlist";

export interface IImportable {
    loadPlaylist(name: string, url?: string): Playlist;
}