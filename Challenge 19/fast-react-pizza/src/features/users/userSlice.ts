/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice } from "@reduxjs/toolkit";

/*
function getPosition():any {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

function getAddress():any{
  
}

export async function fetchAddress() {
  // 1) We get the user's geolocation position
  const positionObj:any = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress();
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  return { position, address };
}*/

const initialState : any ={
  userName : ""
}

const userSlice = createSlice({
  name:"user",
  initialState:initialState,
  reducers:{
    updateName(state,action){
      state.userName = action.payload;
    }
  }
});

export const {updateName} = userSlice.actions;
export const userReducer = userSlice.reducer;
