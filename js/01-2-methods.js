/*
 * Методы объекта и this при обращении к свойствам в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

const playlist = {
    name: 'Playlist',
    rating: 5,
    tracks: ['trakc-1', 'track-2', 'track-3'],
    trackCount: 3,
    getMethod() {
        console.log('Hello this method!');
    },
    changeName(newName) {
        this.name = newName;
    },
    addTrack(track) {
        this.tracks.push(track);
        this.trackCount = this.tracks.length;
    }
};

playlist.getMethod();
playlist.changeName('Новое имя');
playlist.addTrack('track-4');

console.log(playlist);