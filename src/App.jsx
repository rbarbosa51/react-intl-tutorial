import React from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
import { useState } from "react";
import English from "./languages/en";
import Spanish from "./languages/es";

function App() {
  const [msgs, setMsgs] = useState(English);

  const changeLanguage = () => {
    if (msgs === English) {
      setMsgs(Spanish);
    } else {
      setMsgs(English);
    }
  };
  return (
    <IntlProvider locale="en" messages={msgs}>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-rose-300 text-rose-800/60">
        <h1 className="pt-4 text-center font-inter text-5xl font-extrabold text-rose-300">
          <FormattedMessage id="appTitle" defaultMessage={"Hello World"} />
        </h1>
        <div className="mt-4 flex flex-col items-center gap-8">
          <p className="text-center">
            <FormattedMessage id="appText" defaultMessage={English.appText} />
          </p>
          <p className="text-center w-1/2">
            <FormattedMessage id="appQuote" defaultMessage={English.appQuote} />
          </p>
          <button
            className="w-64 rounded-md border border-solid border-rose-500 p-4"
            onClick={changeLanguage}
          >
            <FormattedMessage
              id="appButton"
              defaultMessage={English.appButton}
            />
          </button>
        </div>
      </div>
    </IntlProvider>
  );
}

export default App;
