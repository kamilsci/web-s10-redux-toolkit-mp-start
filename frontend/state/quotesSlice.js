// ✨ create your `quotesSlice` in this module
import { createSlice } from '@reduxjs/toolkit'

let id = 1
export const getNextId = () => id++
const initialState = {
  displayAllQuotes: true,
  highlightedQuote: null,
  quotes: [
    {
      id: getNextId(),
      quoteText: "Don't cry because it's over, smile because it happened.",
      authorName: "Dr. Seuss",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "So many books, so little time.",
      authorName: "Frank Zappa",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "Be yourself; everyone else is already taken.",
      authorName: "Oscar Wilde",
      apocryphal: false,
    },
  ],
}


export const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    toggleVisibility: (state, ) => {
      state.displayAllQuotes = !state.displayAllQuotes 

    },
    deleteQoute: (state, action) => {
      state.quotes = state.quotes.filter(quote => quote.id !== action.payload)

    },
    editQuoteAuthenticity: (state, action) => {
     const qouteToEdit = state.quotes.find(quote => quote.id === action.payload)
     qouteToEdit.apocryphal = !qouteToEdit.apocryphal

    },
    setHighlightedQuote: (state, action) => {
      if (state.highlightedQuote === action.payload) {
        state.highlightedQuote = null

    }else {
      state.highlightedQuote = action.payload
    }
    },
    createQuote: (state, action) => {
      state.quotes.push(action.payload)

    },
  },
})

export const{
  toggleVisibility,
  deleteQoute,
  editQuoteAuthenticity,
  setHighlightedQuote,
  createQuote
} = quotesSlice.actions 

export default quotesSlice.reducer