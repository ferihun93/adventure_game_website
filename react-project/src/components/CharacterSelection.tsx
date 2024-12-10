type CharacterSelectionProps = {
  characters: Array<{
    characterName: string;
    characterDescreption: string;
    cardColor: string;
    hoverColor: string;
    border: string;
    // image: string; // Kép, amit később hozzáadsz
  }>;
  onCharacterSelect: (characterName: string) => void;
};

export default function CharacterSelection({
  characters,
  onCharacterSelect,
}: CharacterSelectionProps) {
  return (
    <section>
      <h2 className="text-3xl mb-6 text-center">
        Choose your character to start your adventure:
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {characters.map((characterItem) => (
          <div
            key={characterItem.characterName}
            onClick={() => onCharacterSelect(characterItem.characterName)}
            className={`cursor-pointer w-[15rem] h-96 flex flex-col items-center justify-center transition-all ${characterItem.cardColor} ${characterItem.border} ${characterItem.hoverColor} text-black rounded-lg shadow-lg`}
          >
            {/* Ha képed van, itt hozzáadhatod: */}
            {/* <img src={characterItem.image} alt={characterItem.characterName} className="w-full h-48 object-cover rounded-t-lg" /> */}
            <h3 className="text-2xl mt-4">{characterItem.characterName}</h3>
            <p className="text-center mt-2 px-4">
              {characterItem.characterDescreption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
