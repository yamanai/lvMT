export const getAllFlight = 'allFlightInfo'
export const selsectAllFlight = 'selectAllFlightInfo'

export const getAllReturnFlight = 'allReturnFlightInfo'
export const selsectReturnAllFlight = 'selectAllReturnFlightInfo'


export const XFlight = {
  state: {
  	allFlight: null,
    selectAllFlight:null,

  //roundTrip have returnFlight
    returnAllFlight:null,
    selectReturnAllFlight:null

  },
  getters: {
    flightofall:state=>state.allFlight,
    selectflightofall: state => state.selectAllFlight,

    returnflightofall:state=>state.returnAllFlight,
    selectReturnFlightOfAll:state=>state.selectReturnAllFlight
  },
  mutations: {
    [getAllFlight] (state,allFlight){
      state.allFlight = allFlight
    },
    [selsectAllFlight](state,selectAllFlight){
       state.selectAllFlight = selectAllFlight
    },


    [getAllReturnFlight] (state,returnAllFlight){
      state.returnAllFlight = returnAllFlight
    },
    [selsectReturnAllFlight] (state,selectReturnAllFlight){
      state.selectReturnAllFlight = selectReturnAllFlight
    }
  }
}
