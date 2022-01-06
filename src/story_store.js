let cnt = 0;

export default class StoryStore {
  constructor() {
    this._data = {};
  }

  getStoryData(){
    return this._data
  }

  addStory(kind, name, fn) {
    if (!this._data[kind]) {
      this._data[kind] = {
        kind,
        index: cnt++,
        stories: {},
      };
    }

    this._data[kind].stories[name] = {
      name,
      index: cnt++,
      fn,
    };
  }

  
}