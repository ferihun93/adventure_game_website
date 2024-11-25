type characterSelectionProps = {
  characterName: string;
  characterDescreption: string;
};

export default function characterSelection({
  characterName,
  characterDescreption,
}: characterSelectionProps) {
  return (
    <div className="cursor-pointer w-[15rem] gap-16 justify-center flex flex-col transition-all align-middle hover:bg-blue-300 h-96 border-solid border-2 border-blue-700 text-red-600">
      <h2 className="text-3xl">{characterName}</h2>
      <p>{characterDescreption}</p>
    </div>
  );
}
