//Creamos el estado inicial

const initialState = {
    countries: [],         //este array se va a ir modificando según los filtros que aplique en el front
    allCountries: [],      //en este array voy a tener siempre TODOS los paises
    activities:[],
    detail: [],   
}

function rootReducer(state= initialState, action){
    switch(action.type){
        case "GET_COUNTRIES":
            return{
                ...state,
                countries: action.payload,
                allCountries: action.payload,
            };
        
        case "GET_NAME":
            return{  
              ...state,
              countries: action.payload,
            };
        
        case "GET_COUNTRY_DETAIL":
            return{
                ...state,
                detail: action.payload,
            };

        case "POST_COUNTRY_ACTIVITY":
            return{
                ...state,
            };

        case "GET_ACTIVITY":  
            return{
              ...state,
              activities: action.payload,
            };

        //FILTRAR POR CONTINENT -> Asia 
        case "FILTER_BY_CONTINENT":
            const allCountries = state.allCountries;
            const FiltradoContinente = action.payload === "All" ? allCountries : allCountries.filter((elemento)=> elemento.continents === action.payload);
            return{
                ...state,
                countries: FiltradoContinente ,
            };

        case "FILTER_BY_ACTIVITY":
            const FiltradoActividad =
            action.payload === "All" ? state.allCountries : state.allCountries.filter((c) => c.activities && c.activities.filter((a) => a.name === action.payload).length);
            return {
            ...state,
            countries: FiltradoActividad,
          };

        case "ORDER_NAME":
          const orderName = action.payload === 'ASC' ? state.countries.sort((a,b) => {
            if(a.name > b.name) return 1;
            if(a.name < b.name) return -1;
            return 0;
          }) : state.countries.sort((a,b) => {
            if(a.name < b.name) return 1;
            if(a.name > b.name) return -1;
            return 0;
          })
        return {
          ...state, 
          countries: orderName
        }

        case "ORDERR_BY_POPULATION":
            const orderByPopulation = action.payload === "desc" 
            ? state.countries.sort(function (a,b) {
                  if (a.population > b.population) return 1;
                  if (b.population > a.population) return -1;
                  return 0;

                }) : state.countries.sort(function (a,b) {
                  if (a.population > b.population) return -1;
                  if (b.population > a.population) return 1;
                  return 0;
                });
            return {
            ...state,
            countries: orderByPopulation,
          };
        default:
            return state;
    }
}

export default rootReducer;