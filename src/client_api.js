import StoryStore from "./story_store.js";
export default class ClientApi {
  constructor() {
    this._storiesData = new StoryStore();
    this.currentStory = null
    this.storiesListFormatted = null
  }
  storiesOf(kind, m) {
    // if (m && m.hot) {
    //   m.hot.dispose(() => {
    //     this._storyStore.removeStoryKind(kind);
    //   });
    // }

    const add = (storyName, fn) => {
      this._storiesData.addStory(kind, storyName, fn);
      return { add };
    };

    return { add };
  }

  setCurrentStory() {
    if(!this.currentStory){
      this.currentStory = this.storiesListFormatted[0]
    }
  }

  getCurrentStory() {
    return this.currentStory;
  }

  getStories() {
    let tempHolder = [];
    const storyDesc = this._storiesData.getStoryData();
    for (const topLevel in storyDesc) {
      const data = storyDesc[topLevel];
      if (data.stories !== undefined && data.kind !== undefined) {
        const { stories } = data;
        for (const key in stories) {
          let story = stories[key];
          tempHolder.push(story)
        }
      }
    }
    this.storiesListFormatted = tempHolder;
    return tempHolder;
  }
}
