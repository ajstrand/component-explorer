import {useContext} from 'preact/hooks';
import {Context} from "./LangWrapper.js";
function LangSwitch(props) {
    const context = useContext(Context);
    return (
      <div className="App">
        <header className="App-header">
          <select value = {context.locale} onChange={context.selectLanguage}>
            <option value= 'en'>English</option>
            <option value= 'de'>German</option>
          </select>
        </header>
      </div>
    );
   }
   export default LangSwitch;