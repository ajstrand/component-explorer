import { render, h } from "preact";
import { useEffect, useState } from "preact/hooks";

document.addEventListener("DOMContentLoaded", function () {
  let iframe = document.querySelector("iframe");
  const doc = iframe.contentWindow.document;
  const anchor = doc.querySelector("#special");

  const container = doc.querySelector("main");

  const StoryContainer = () => {
    const [data, setData] = useState([]);
    const [currentStory, setStory] = useState(null)
    useEffect(() => {
      if (window.myCoolIdea) {
        let api = window.myCoolIdea;

        const stories = api.getStories();
        api.setCurrentStory();
        setStory(api.getCurrentStory())
      }
    }, []);

    const CreateList = () => {
      return (
        data.length !== 0 &&
        data.map((element) => {
          return <ListEl data={element} />;
        })
      );
    };

    return (
      <div>
        <main>
          {/* <ul>
            <CreateList />
          </ul> */}
          {currentStory && currentStory.fn()}
        </main>
      </div>
    );
  };

  const ListEl = (props) => {
    const {
      data: { name, fn },
    } = props;
    return (
      <div>
        <li>{name}</li>
        {fn()}
      </div>
    );
  };

  render(<StoryContainer />, anchor);
});
