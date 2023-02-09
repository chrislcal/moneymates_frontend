import Profile from "./Profile";
import { NavBar } from "./NavBar";
import { Banner } from "./Banner";

const Landingpage = () => {
  return (
    <div className="App">
      <Profile />
      <NavBar />
      <Banner />
    </div>
  );
};

export default Landingpage;
