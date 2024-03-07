import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-rose-300 text-rose-800/60">
      <h1 className="pt-4 text-center font-inter text-5xl font-extrabold text-rose-300">
        Sample Title
      </h1>
      <div className="mt-4 flex flex-col items-center gap-8">
        <p className="text-center">Sample paragraph</p>
        <p className="w-1/2 text-center">Sample Quote</p>
        <button className="w-64 rounded-md border border-solid border-rose-500 p-4">
          Sample Button Name
        </button>
      </div>
    </div>
  );
}

export default App;
