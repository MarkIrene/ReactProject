import "./HomePage.css";

function Home() {
  const title = "Walker";

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
          <p>Find your next car</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
