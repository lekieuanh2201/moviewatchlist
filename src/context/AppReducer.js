export default (state, action) => {
    switch(action.type){
        case "ADD_MOVIE_TO_WATCHLIST":
            console.log("add");
            return {
                ...state, 
                watchlist: [action.payload, ...state.watchlist],
            };
        
        case "REMOVE_MOVIE_FROM_WATCHLIST":
            // console.log("he");
            return{
                ...state,
                watchlist: state.watchlist.filter(
                (movie) => movie.id !== action.payload
                ),
            };

        case "ADD_MOVIE_TO_WATCHED":
            return{
                ...state,
                watched: [action.payload, ...state.watched],
                watchlist: state.watchlist.filter(
                (movie) => movie.id !== action.payload.id
                ),
            };

        case "REMOVE_MOVIE_FROM_WATCHED":
            return{
                ...state,
                watched: state.watched.filter(
                (movie) => movie.id !== action.payload
                ),
            };

        case "MOVE_TO_WATCHLIST":
            return{
                ...state,
                watchlist: [action.payload, ...state.watchlist],
                watched: state.watched.filter(
                (movie) => movie.id !== action.payload.id
                ),
            };

        default:
            return state;
    }
};