import { createContext } from 'preact';
import {useState, useContext} from 'preact/hooks';
import {IntlProvider} from 'react-intl';
import German from './lang/de.json';
import English from './lang/en.json';

export const Context = createContext();

const local = navigator.language;

let lang;
if (local === 'en') {
   lang = English;
}else {
   if (local === 'de') {
       lang = German;
   }
}
const LangWrapper = (props) => {
   const [locale, setLocale] = useState(local);
   const [messages, setMessages] = useState(lang);
   function selectLanguage(e) {
       const newLocale = e.target.value;
       setLocale(newLocale);
       if (newLocale === 'en') {
           setMessages(English);
       } else {
           if (newLocale === 'de'){
               setMessages(German);
           } else {
           }
       }
   }
   return (
       <Context.Provider value = {{locale, selectLanguage}}>
           <IntlProvider messages={messages} locale={locale}>
               {props.children}
           </IntlProvider>
       </Context.Provider>
   );
}
export default LangWrapper;