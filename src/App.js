import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="">
      <RouterProvider router={ routes} />
    </div>
  );
}

export default App;
