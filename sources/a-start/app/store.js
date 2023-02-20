import { configureStore } from "@reduxjs/toolkit";

import { restcountryApi } from "../services/restcountry";
import { kitsuApi } from "../services/kitsu";

// Contoh di sini menggunakan configureStore (Redux Toolkit)
// Bukan createStore (legacy / Redux standard, non-toolkit)
const store = configureStore({
  reducer: {
    // Di sini akan menggunakan reducerPath dan reducer
    // yang sudah dibuatkan secara otomatis oleh RTK Query (createApi)
    [restcountryApi.reducerPath]: restcountryApi.reducer,
    [kitsuApi.reducerPath]: kitsuApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Karena datanya terlalu banyak, maka untuk dev mode harus
      // mematikan serializable
      serializableCheck: false,
    })
      // Di sini akan menggabungkan middleware yang lagi-lagi sudah dibuatkan
      // oleh RTK Query (createApi)
      .concat(restcountryApi.middleware)
      .concat(kitsuApi.middleware),
});

export default store;
