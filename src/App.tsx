import React from "react";
import { Stack, Link, IStackTokens, IStackStyles } from "@fluentui/react";
import "./App.css";
import PokemonSearch from "./components/PokemonSearch";

const stackTokens: IStackTokens = { childrenGap: 15 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: "960px",
    margin: "0 auto",
    textAlign: "center",
    color: "#605e5c",
  },
};

export const App: React.FunctionComponent = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="background-container">
        <Stack
          horizontalAlign="center"
          verticalAlign="center"
          verticalFill
          styles={stackStyles}
          tokens={stackTokens}
        >
          <Stack horizontal tokens={stackTokens} horizontalAlign="center">
            <Link href="https://developer.microsoft.com/en-us/fluentui#/get-started/web">
              Docs
            </Link>
            <Link href="https://stackoverflow.com/questions/tagged/office-ui-fabric">
              Stack Overflow
            </Link>
            <Link href="https://github.com/microsoft/fluentui/">Github</Link>
            <Link href="https://twitter.com/fluentui">Twitter</Link>
          </Stack>
          <PokemonSearch />
        </Stack>
        <footer
          id="sticky-footer"
          className="footer-area flex-shrink-0 bg-dark text-white-50"
        >
          <div className="row justify-content-center">
            <div className="col text-center">Using the PokeAPI Service</div>
          </div>
          <div className="container text-center py-4">
            <img
              className="img-small rounded-circle"
              height={"15px"}
              src="https://avatars.githubusercontent.com/u/69900306?v=4"
              alt="it's Jim"
            />
            <small>Copyright &copy; Jimmy Jimster</small>
          </div>
        </footer>
      </div>
    </div>
  );
};
