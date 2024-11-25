export const WelcomePage = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <section>
      <div>
        <h1 className="text-7xl">Welcome adventurer!</h1>
        <button onClick={handleClick} className="text-2xl p-8 mt-10">
          Enter here
        </button>
      </div>
    </section>
  );
};
