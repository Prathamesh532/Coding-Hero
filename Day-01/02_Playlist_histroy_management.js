class Stack {
  constructor() {
    this.songs = [];
  }

  push(song) {
    this.songs.push(song);
  }

  pop() {
    if (this.songs.length < 1) return;
    return this.songs.pop();
  }

  print() {
    return this.songs;
  }
}

function playlistManager(actions) {
  let playlist = new Stack();

  for (const action of actions) {
    if (action.startsWith("addSong")) {
      playlist.push(action.slice(9, -2));
    }
    if (action.startsWith("undo")) {
      playlist.pop();
    }
  }

  return playlist.print();
}

