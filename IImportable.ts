import { Playlist } from "./Playlist";

export interface IImportable {
    loadPlaylist(name: string): Playlist;
}