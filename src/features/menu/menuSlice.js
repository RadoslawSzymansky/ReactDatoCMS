import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMenu } from './menuApi';

const initialState = {
  list: [],
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fectchMenuAsync = createAsyncThunk(
  'menu/fetchMenu',
  async () => {
    const response = await fetchMenu();
    console.log('res', response)
    return response.menu.menuList;
  }
);

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fectchMenuAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fectchMenuAsync.fulfilled, (state, action) => {
        console.log('ackja ',action)
        state.status = 'idle';
        state.list = action.payload;
      })
      .addCase(fectchMenuAsync.rejected, (state, action) => {
        console.log(action);
        console.log('bład pobierania menu')
        state = initialState
      });
  },
});

export const selectMenu = (state) => state.menu.list;
export const selectMenuStatus = (state) => state.menu.status;

// export wlasnych akcji
export const { menuIsLoading, menuReceived  } = menuSlice.actions;

export default menuSlice.reducer;
