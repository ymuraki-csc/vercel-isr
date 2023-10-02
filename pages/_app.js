import '../styles/globals.css'
import {Hydrate,QueryClient,QueryClientProvider} from "@tanstack/react-query";
import {useState} from "react";


export const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
