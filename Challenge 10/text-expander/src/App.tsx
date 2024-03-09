
import TextExpander from './Components/TextExpander/TextExpander';

function App() {
  return (
    <div className="App">
      <TextExpander text={"i have 10 lines of texts but at first user only see 3 lines and rest of the lines are hidden if the user wants to see those remaining lines he can by 'Show more' button. and vice versa if 10 lines where show, he can hide some lines by 'Show less' button. how do i do this in react"}
                    initialCharacters={80}
                    color={"red"}
                    size={1}
                    className={"text"}
                    showMore={"ShowText"}
                    showLess={"LessText"}
                    fontFamily={"geneva"}/>
    </div>
  );
}

export default App;
