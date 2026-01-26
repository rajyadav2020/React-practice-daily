import { configureStore } from "@reduxjs/toolkit";
import slice1reduer from "./slicer1"

const store = configureStore( {
  reducer:{
    slice1:slice1reduer,


  }
})

export default store;