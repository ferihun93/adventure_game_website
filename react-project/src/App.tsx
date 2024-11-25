import { useState } from "react";
import CharacterSelection from "./components/CharacterSelection.tsx";
import { CHARACTERS_DETAILS } from "./data.js";
import { WelcomePage } from "./components/WelcomePage.tsx";
import "./App.css";
import "./input.css";
import "./output.css";

function App() {
  // const [character, setCharacter] = useState();

  const [showFirstSection, setShowFirstSection] = useState(true);

  const toggleSection = () => {
    setShowFirstSection(false); // Állapotot csak egy irányban változtatjuk
  };

  // function handleSelect(selectedCharacter: string) {
  //   // selectedButton => 'components, 'jsx', 'props', 'state
  //   setCharacter(character);
  //   //console.log(selectedTopic);
  // }

  return (
    <main>
      {showFirstSection ? (
        <WelcomePage handleClick={toggleSection} />
      ) : (
        <div>
          <h2 className="text-3xl mb-6">
            Choose your character to start your adventure:
          </h2>
          <div className="w-[80rem] disabled:border flex flex-row justify-evenly gap-4">
            {CHARACTERS_DETAILS.map((characterItem) => (
              <CharacterSelection
                key={characterItem.characterName}
                {...characterItem}
              />
            ))}
          </div>
        </div>
      )}
    </main>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1 className="text-blue-600">Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  );
}

export default App;
