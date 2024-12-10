import { useState } from "react";
import CharacterSelection from "./components/CharacterSelection";
import { CHARACTERS_DETAILS } from "./data"; // Az adatokat importáljuk
import { WelcomePage } from "./components/WelcomePage";
import CharacterStatus from "./components/CharacterStatus";
import "./App.css";
import "./input.css";
import "./output.css";

function App() {
  // Kezdeti állapotok
  const [showFirstSection, setShowFirstSection] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState<null | string>(
    null
  );
  const [storyIndex, setStoryIndex] = useState<number>(0); // A történet szakaszának indexe

  // Kezelő, ami beállítja a kiválasztott karaktert
  const handleCharacterSelection = (characterName: string) => {
    setSelectedCharacter(characterName);
    setShowFirstSection(false); // A karakter választása után átugrik a történetre
    setStoryIndex(0); // A történet kezdetét állítja be
  };

  // Kiválasztott karakter adatainak lekérése
  const selectedCharacterData = CHARACTERS_DETAILS.find(
    (character) => character.characterName === selectedCharacter
  );

  // Történet folytatása, választható lehetőségek kezelése
  const handleOptionSelect = (nextPage: number | null) => {
    if (nextPage === null) {
      // Ha nincs több oldal, visszaállítjuk az alapértelmezett állapotokat
      setSelectedCharacter(null);
      setShowFirstSection(true);
    } else {
      // Frissítjük az indexet a következő oldalra
      setStoryIndex(nextPage);
    }
  };

  return (
    <main className="flex items-center justify-center h-screen">
      {showFirstSection ? (
        <WelcomePage handleClick={() => setShowFirstSection(false)} />
      ) : (
        <div>
          {/* Karakterválasztás vagy történet, ha már választottak karaktert */}
          {!selectedCharacter ? (
            <CharacterSelection
              characters={CHARACTERS_DETAILS}
              onCharacterSelect={handleCharacterSelection}
            />
          ) : (
            <div className="grid grid-cols-3 grid-rows-3 w-screen">
              <div className="row-start-1 col-start-1">
                <CharacterStatus />
              </div>
              {/* Kiválasztott karakter neve és története */}
              <h2 className="text-2xl">You chose: {selectedCharacter}</h2>
              <p className="row-start-2 col-start-1 col-span-3 text-xl">
                {selectedCharacterData?.story[storyIndex].text}
              </p>
              {/* Történet folytatása, választható lehetőségek */}
              <div className="mt-6 col-start-1 row-start-3 col-span-3 flex flex-col items-center justify-center">
                <p className="mb-4">Choose your next action:</p>
                {selectedCharacterData?.story[storyIndex].options.map(
                  (option, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        handleOptionSelect(option.nextPage || null)
                      }
                      className={`mt-4 ${selectedCharacterData.cardColor} hover:${selectedCharacterData.hoverColor} m-2 text-white py-2 px-4 rounded`}
                    >
                      {option.text}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  );
}

export default App;
