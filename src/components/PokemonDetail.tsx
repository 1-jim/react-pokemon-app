import Card from "react-bootstrap/Card";
import IPokemonDetailProps from "./IPokemonDetailProps";
import "./cards.css";
import { Button, Collapse } from "react-bootstrap";
import { useState } from "react";

function PokemonDetail(props: IPokemonDetailProps): JSX.Element {
  var [toggle, setToggle] = useState(false);

  if (!props.pokemon) return <></>;

  function getImageUrl(): string {
    if (!props.pokemon) return "";

    const id = props.pokemon.id.toString();
    let link = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
    let insert = "";
    switch (id.length) {
      case 1:
        insert = "00";
        break;
      case 2:
        insert = "0";
        break;
      default:
        break;
    }
    return link.concat(insert).concat(id).concat(".png");
  }

  return (
    <div className="card">
      <Card className="card shadow card-background">
        <img
          src={getImageUrl()}
          className="mr-3 rounded-circle"
          alt={props.pokemon.name}
          width="300"
          height="300"
        />
        <Card.Title className="card-meta mb-2">{props.pokemon.name}</Card.Title>
        <Card.Body>
          <div className="row">
            {props.pokemon.types.map((typ) => (
              <div className="">
                <strong>{"Type: " + typ.type.name.toUpperCase()}</strong>
              </div>
            ))}
          </div>
        </Card.Body>
        <Card.Footer>
          <div className="media">
          <img className="mr-3 rounded-circle" width={"50px"} src="https://avatars.githubusercontent.com/u/69900306?v=4" alt="it's Jim"/>
          <div className="media-body">
            <h6 className="my-0 text-white d-block">James Clunies-Ross</h6>
            <small>Director of UI/UX</small>
          </div>

          </div>
          <Button
            type="button"
            className="btn btn-primary"
            onClick={() => setToggle(!toggle)}
            aria-expanded={toggle}
          >
            Statistics
          </Button>
          <Collapse in={toggle} className="card card-background-stats">
            <div className="row">
              {props.pokemon?.stats.map((stat) => (
                <>
                  <strong>{stat.stat.name + ": " + stat.base_stat}</strong>
                  <br></br>
                </>
              ))}
            </div>
          </Collapse>
        </Card.Footer>
      </Card>
      {/* <Card
        className="Carddeck"
        border="warning"
        style={{ paddingBottom: "1rem", marginBottom: "2rem" }}
      >
        <Card.Body>
          <img
            className="card-img-top"
            src={getImageUrl()}
            alt={props.pokemon.name}
          />
          <Card.Title>{props.pokemon.name.toUpperCase()}</Card.Title>
          <Card.Text>
            <Label>Base XP: {props.pokemon.base_experience}</Label>
          </Card.Text>
          <Label>Types</Label>

          {props.pokemon.types.map((typ) => (
            <div className="card bg-primary text-white">
              <div className="card-body">
                <strong>{typ.type.name}</strong>
              </div>
            </div>
          ))}
          <Label>Abilities</Label>
          {props.pokemon.abilities.map((ab) => (
            <div className="card bg-warning text-white">
              <div className="card-body">
                <strong>{ab.ability.name}</strong>
              </div>
            </div>
          ))}
        </Card.Body>
        <Card.Header>
          {props.pokemon?.stats.map((stat) => (
            <>
              <strong>{stat.stat.name + ": " + stat.base_stat}</strong>
              <br></br>
            </>
          ))}
        </Card.Header>
      </Card> */}
      {/* <ul>
        {props.pokemon.moves.map((mv) => (
          <li>{mv.move.name}</li>
        ))}
      </ul> */}
      {/* {props.pokemon?.sprites.front_default ? (
        <img
          src={props.pokemon.sprites.front_default}
          alt={props.pokemon.name + " front"}
        ></img>
      ) : null}
      {props.pokemon?.sprites.front_shiny ? (
        <img
          src={props.pokemon.sprites.front_shiny}
          alt={props.pokemon.name + " front shiny"}
        ></img>
      ) : null}
      {props.pokemon?.sprites.front_female ? (
        <img
          src={props.pokemon.sprites.front_female}
          alt={props.pokemon.name + " front shiny"}
        ></img>
      ) : null} */}
    </div>
  );
}

export default PokemonDetail;
