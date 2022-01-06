import { render, h } from "preact"
const Button = () => <button onClick={() => alert("hello")}>My First Button</button>

// const HelloTest = { component: Button, title:"This is a test" }
// export default HelloTest;
let module = "foo"
console.log("starting app")
if(window.myCoolIdea){
  window.myCoolIdea.storiesOf('atoms/Button', module)
  .add('text', () => <Button/>)
  .add('emoji', () => <button>😀😎👍💯</button>);


}




//export const Primary = { args: { primary: true } };