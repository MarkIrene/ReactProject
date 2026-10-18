import "./HomePage.css";
import { SITE_NAME } from "../../config/siteConfig";

function Home() {
  const title = SITE_NAME;

  return (
    <main className="home">
      <section className="hero">
        <div className="heroTitle">
          <h1>
            {title.split("").map((letter, index) => (
              <span key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                {letter}
              </span>
            ))}
          </h1>

          <h4>Used Cars</h4>
          {/* <p>Find your next car</p> */}
        </div>
      </section>
    </main>
  );
}

export default Home;
