import "preact/debug"
import { render, h } from "preact"
import { createPortal } from 'preact/compat';
import { createRenderer } from 'fela'
import { RendererProvider, useFela } from 'preact-fela'
import LangSwitch from "./LangSwitch.js";
import { useEffect, useState } from "preact/hooks";
import "./index.css"
import ClientApi from "./client_api.js";


const renderer = createRenderer()

if(!window.myCoolIdea){
  let x = new ClientApi()
window.myCoolIdea = x
}


const SideBar = () => {

    const { css } = useFela()
    return (
        <section className={css({
            display: "flex",
            flexDirection: "column", width: "4em",
            padding: "1em",
            height: "100%",
            border: '2px solid #9FE2BF'
        })}>
            this is a sidebar
        </section>
    )
}



const App = () => {
    const { css } = useFela()
    const [data, setData] = useState(null)

    useEffect(() => {
      const test = async () => {
        let data = await fetch("/data")
       let html = await data.json()
        setData(html.body)
      }
      test();
    }, [])

    const Rand = () => {
      useEffect(() => {


      }, [])
      return (
        <div className="top" dangerouslySetInnerHTML={{__html:data}}></div>
      )
    }


    return (
        <div className={css({
            display: "flex",
            flexDirection: "row",
            height: "100%",
           
        })}>


         
            <SideBar />

            <IFrame>
              <div id="special"></div>
              <Rand/>
            </IFrame>

        </div>
    )
};

function IFrame({ children }) {
    const [ref, setRef] = useState();
    const container = ref?.contentDocument?.body;

    return (
      <iframe title="current component" ref={setRef}>
        <head>
       
          {
            window.top.postMessage(
              JSON.stringify({
                error: false,
                message: "Hello World"
              }),
              '*'
            )
          }
        </head>
        {container && createPortal(children, container)}
      </iframe>
    );

        }


const LangExample = () => {
  return (

    <FormattedMessage
      id="app.content"
      defaultMessage="Learn React"
      description="Test of the language switch"

    />
  )
}

render(
    <RendererProvider renderer={renderer}>
        <App />
    </RendererProvider>, document.body);




