export const WelcomePage = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <section>
      <div>
        <h1 className="text-7xl text-green-600">Welcome adventurer!</h1>
        <button onClick={handleClick} className="text-2xl p-10 mt-16">
          Enter here
        </button>
      </div>
    </section>
  );
};
