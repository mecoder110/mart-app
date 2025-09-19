import { FaHome } from "react-icons/fa";
import "./Home.css";

function Home() {
  return (
    <div id="body-container">
      <h1 id="main-heading">Welcome To My-Mart</h1>
      <p id="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ratione
        totam facere debitis ullam voluptate nesciunt, mollitia repellendus!
        Quia inventore dignissimos est delectus! In similique laborum provident
        accusamus asperiores consequuntur.
      </p>
      <button className="transparent-btn">
        <FaHome style={{ marginRight: "8px" }} /> Home
        Explore More!!!</button>
    </div>
  );
}
export default Home;
