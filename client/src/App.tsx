import Display from "./components/Display";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <header>
        <nav className="nav paddingX">
          <div className="logo_wrapper">
            <img
              src="/mela.png"
              alt="mela logo"
              className="w-14 h-14 rounded-full object-contain"
            />
            <p className="text-lg font-bold font-boska">Complit</p>
          </div>

          <button
            type="button"
            className="git_btn"
            onClick={() => window.open("https://www.github.com/Wilmela")}
          >
            Github
          </button>
        </nav>
      </header>

      <div className="paddingX flex flex-col items-center min-h-screen bg-gray-100">
        <Hero />
        <Display />
      </div>
    </>
  );
};

export default App;
