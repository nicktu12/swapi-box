import mockFilmData from './mockFilmData';
import mockVehicleData from './mockVehicleData';

const mockAppState = [
  [
    {
      "name": "Luke Skywalker",
      "homeworld": "Naboo",
      "species": "human",
      "population": 4500000000
    },
    {
      "name": "C-3PO",
      "homeworld": "Naboo",
      "species": "Droid",
      "population": 4500000000
    },
    {
      "name": "R2-D2",
      "homeworld": "Naboo",
      "species": "Droid",
      "population": 4500000000
    }
  ], [
    {
      "name": "Alderaan",
      "climate": "temperate",
      "terrain": "grasslands, mountains",
      "population": "2000000000",
      "residents": [
        { "name": "Luke Skywalker" },
        { "name": "Leia Organa" },
        { "name": "C-3PO" }
      ]
    },
    {
      "name": "Yavin IV",
      "climate": "temperate, tropical",
      "terrain": "jungle, rainforests",
      "population": "1000",
      "residents": []
    },
    {
      "name": "Hoth",
      "climate": "frozen",
      "terrain": "tundra, ice caves, mountain ranges",
      "population": "unknown",
      "residents": []
    }
  ], mockVehicleData, mockFilmData
];


export default mockAppState;
