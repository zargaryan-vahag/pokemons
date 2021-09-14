import PropTypes from 'prop-types';
import { Box } from "@material-ui/core";

const colors = {
  "normal"  : "#a8a77a",
  "fire"    : "#ee8130",
  "water"   : "#6390f0",
  "electric": "#f7d02c",
  "grass"   : "#7ac74c",
  "ice"     : "#96d9d6",
  "fighting": "#c22e28",
  "poison"  : "#a33ea1",
  "ground"  : "#e2bf65",
  "flying"  : "#a98ff3",
  "psychic" : "#f95587",
  "bug"     : "#a6b91a",
  "rock"    : "#b6a136",
  "ghost"   : "#735797",
  "dragon"  : "#6f35fc",
  "dark"    : "#705746",
  "steel"   : "#b7b7ce",
  "fairy"   : "#d685ad"
};

export default function SquadItem({pokemon, moves, onRemove}) {
  return (
    <Box
      width="10%"
      padding={3}
      bgcolor={pokemon ? colors[pokemon.types[0].name] : ''}
      className={pokemon ? '' : 'bg-grey'}
      style={pokemon ? {
        cursor: "pointer"
      } : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => pokemon && onRemove()}
    >
      {!pokemon ? (
        <Box className={`text-blue`}>
          empty
        </Box>
      ) : (<>
        <Box>
          <img src={pokemon.image} alt="pokemon" width="100%"/>
        </Box>
        <Box>
          <Box style={{
            textTransform: 'uppercase',
            textAlign: 'center',
            color: 'white',
            fontSize: '1vw',
            fontWeight: 'bold'
          }}>
            {pokemon.name}
          </Box>
          <Box>
            {moves.map((move) => {
              return (
                <Box
                  key={move.name}
                  width="100%"
                  borderRadius="7px"
                  bgcolor="white"
                  padding="5px 3px"
                  marginTop={1}
                  className={`text-blue`}
                >
                  {move.name}
                </Box>
              );
            })}
          </Box>
        </Box>
      </>)}
    </Box>
  );
}

SquadItem.propTypes = {
  pokemon: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.oneOf([null]).isRequired
  ]),
  moves: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.oneOf([null]).isRequired
  ]),
  onRemove: PropTypes.func.isRequired
};
