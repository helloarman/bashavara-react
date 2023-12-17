import Category from "../Components/Category";
import Header from "../Components/Header";
import Master from "../Layouts/Master";

function Home() {
  return (
    <div>
      <Master>
        <Header />
        <Category />
      </Master>
    </div>
  );
}

export default Home;
