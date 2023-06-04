const App = () => {
  return (
    <button
      onClick={async () => {
        const res = await fetch('/api');
        const data = await res.text();
        console.log(data);
      }}
    >
      CLICK ME
    </button>
  );
};

export default App;
