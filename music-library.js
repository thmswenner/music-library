
// var library = {

//     printPlaylists: function () {
//       for (var key in this.playlists) {
//         console.log(`${key} : ${this.playlists[key].name} - ${this.playlists[key].tracks.length} tracks`)
//       }
//     },
  
//     printTracks: function () {
//       for (var key in this.tracks) {
//         console.log(`${key} : ${this.tracks[key].name} by ${this.tracks[key].artist} (${this.tracks[key].album})`)
//    }
//     },
  
//     printPlaylist: function (playlistId) {
//       var thisPlaylist = this.playlists[playlistId]
//       console.log(`${thisPlaylist.id} : ${thisPlaylist.name} - ${thisPlaylist.tracks.length} tracks`)
//       for (var trackId of thisPlaylist.tracks) {
//         var thisTrack = this.tracks[trackId]
//         console.log(`${thisTrack.id} : ${thisTrack.name} by ${thisTrack.artist} (${thisTrack.album})`)
  
//       }
//     },
  
//     addTrackToPlaylist: function (trackId, playlistId) {
//       this.playlists[playlistId].tracks.push(trackId)
//     },
  
//     uid: function () {
//       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
//     },
  
//     addTrack: function (name, artist, album) {
//       var trackUid = uid();
//       this.tracks[trackUid] = {id: trackUid, name: name, artist: artist, album: album}
//     },
  
//     addPlaylist: function (name) {
//       var playListUid = uid();
//       this.playlists[playListUid] = {id: playListUid, name: name}
//     },
  
  
//     tracks: { t01: { id: "t01",
//                      name: "Code Monkey",
//                      artist: "Jonathan Coulton",
//                      album: "Thing a Week Three" },
//               t02: { id: "t02",
//                      name: "Model View Controller",
//                      artist: "James Dempsey",
//                      album: "WWDC 2003"},
//               t03: { id: "t03",
//                      name: "Four Thirty-Three",
//                      artist: "John Cage",
//                      album: "Woodstock 1952"}
//             },
//     playlists: { p01: { id: "p01",
//                         name: "Coding Music",
//                         tracks: ["t01", "t02"]
//                       },
//                  p02: { id: "p02",
//                         name: "Other Playlist",
//                         tracks: ["t03"]
//                       }
//                }
//   }
  