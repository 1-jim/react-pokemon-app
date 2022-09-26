import { useState } from "react";
import pokapiGetter from "../services/pokapiGetter";
import {
  ISearchBoxStyles,
  IStackTokens,
  Label,
  MessageBar,
  MessageBarType,
  SearchBox,
  Stack,
} from "@fluentui/react";
import { Button } from "react-bootstrap";
import MyLoadingSpinner from "./MyLoadingSpinner";
import PokemonDetail from "./PokemonDetail";
import { Pokemon } from "../models/Pokemon/pokemon";

function PokemonSearch(): JSX.Element {
  const [responseSvc, setResponseSvc] = useState<Pokemon>();
  const [error, setError] = useState<unknown>();
  const [isLoadingSvc, setIsLoadingSvc] = useState(false);
  const [target, setTarget] = useState("");

  const stackTokens: IStackTokens = { childrenGap: 15 };
  const searchBoxStyles: Partial<ISearchBoxStyles> = {
    root: { width: 400, height: 50 },
  };

  const getData = async (e: any) => {
    if (target.length === 0) {
      console.log("Target Is Empty!");
      return;
    }
    try {
      setIsLoadingSvc(true);
      const url = "pokemon/" + target;
      console.log(url);
      const res = await pokapiGetter(url, "");
      setResponseSvc(res);
    } catch (err) {
      console.error(JSON.stringify(err));
      setError(err);
    } finally {
      setIsLoadingSvc(false);
      localStorage.setItem("Pokemon", target);
    }
  };

  if (error)
    return (
      <MessageBar
        messageBarType={MessageBarType.error}
        dismissButtonAriaLabel="close"
        isMultiline={true}
      >
        {JSON.stringify(error)}
      </MessageBar>
    );

  return (
    <>
      <form onSubmit={getData} style={{ padding: "1em" }}>
        <Stack horizontal tokens={stackTokens}>
          <SearchBox
            disabled={isLoadingSvc}
            styles={searchBoxStyles}
            placeholder="Find Pokémon"
            onChange={(_, newValue) => {
              if (newValue !== undefined) {
                setTarget(newValue.toLowerCase());
                //console.log("Target string: " + target);
              }
            }}
            onSearch={(e) => {
              getData(e);
            }}
            width={500}
            onEscape={(e) => {
              console.log("Custom onEscape Called");
              setTarget("");
            }}
            onClear={(e) => {
              console.log("Custom onClear Called");
              setTarget("");
            }}
          />
          <Button disabled={isLoadingSvc} onClick={(e) => getData(e)}>
            Search
          </Button>
        </Stack>
      </form>
      {isLoadingSvc ? (
        <MyLoadingSpinner divHeight={300} loadingText="Querying Pokedex" />
      ) : null}
      {responseSvc === undefined && target !== "" && !isLoadingSvc ? (
        <Label>Nothing found</Label>
      ) : (
        <PokemonDetail pokemon={responseSvc} />
      )}
    </>
  );
}

export default PokemonSearch;
