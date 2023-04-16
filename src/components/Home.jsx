import React from "react";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="homePrimary" id="home">
        <main>
          <h1>TechStar</h1>
          <p>solution to all your problems</p>
        </main>
      </div>

      <div className="homeSecondary">
        <img src="" alt="Graphics" />

        <div>
          <p>
            Quote to add. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Quos officiis nam nesciunt asperiores temporibus repellat
            dolores harum a veniam voluptatum!
          </p>
        </div>
      </div>
      <div className="homeTernary" id="about">
        <div>
          <h1>Who we Are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            eligendi dicta magni dignissimos molestiae ex repellendus dolor unde
            necessitatibus tempore ratione, explicabo officiis cum! Assumenda, a
            doloribus veritatis atque impedit sequi incidunt quam distinctio
            dolore provident cum earum explicabo dolorem. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Consectetur unde maxime alias
            iure repellendus numquam quis aperiam soluta magnam odio!s
          </p>
        </div>
      </div>

      <div className="homeQuarternary" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div style={{ animationDelay: "0.9s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
