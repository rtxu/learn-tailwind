import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import "./global.css";

function GlobalNavBar() {
  return (
    <div>
      <div className="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center">
        <div className="w-full max-w-screen-xl relative mx-auto px-6">
          <div className="flex items-center -mx-6">
            <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
              <div className="flex items-center">
                <a href="/" className="block lg:mr-4">
                  SVG Logo
                </a>
              </div>
            </div>
            <div className="flex flex-grow lg:w-3/4 xl:w-4/5">
              <div className="w-full lg:px-6 xl:w-3/4 xl:px-12">
                <div className="relative">
                  <div className="w-full">
                    <input
                      id="docsearch"
                      className="transition focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input"
                      type="text"
                      placeholder='Search the docs (Press "/" to focus)'
                      autocomplete="off"
                      spellcheck="false"
                      role="combobox"
                      aria-autocomplete="list"
                      aria-expanded="false"
                      aria-label="search input"
                      aria-owns="algolia-autocomplete-listbox-0"
                      dir="auto"
                      style={{ position: "relative", verticalAlign: "top" }}
                    />
                  </div>
                </div>
              </div>

              <div className="hidden lg:flex lg:items-center lg:justify-between xl:w-1/4 px-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <>
        <GlobalNavBar />
        <div className="App">
          <h1> Hello, World! </h1>
          <h1> Hello, War3! </h1>
        </div>
      </>
    );
  }
}

export default hot(module)(App);
