import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function App() {

  return (
    <>
      <Header />
    {/*   <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />} */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
