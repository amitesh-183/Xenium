import roadmap from "../styles/roadmap.module.css"; // Import the CSS module

export default function Roadmap() {
  return (
    <div className="py-10 lg:px-52 px-10">
      <div className={roadmap.container}>
        <div className={roadmap["roadmap-wrapper"]}>
          <div className={roadmap.row}>
            <h2 className={`sec-title ${roadmap.roadh2}`}>Our Roadmap</h2>
          </div>
          <div className={roadmap.row}>
            <div className={roadmap.roadmap}>
              <div className={roadmap["year-count"]}>
                <h2 className={roadmap.roadh2}>2023</h2>
              </div>
              <div className={roadmap["roadmap-content"]}>
                <div className={`${roadmap["year-title"]} ${roadmap.q1}`}>
                  <h3 className={roadmap.roadh3}>Q1</h3>
                  <ul className={roadmap.roadul}>
                    <li className={roadmap.roadli}>MVP Implementation</li>
                  </ul>
                </div>
                <div className={`${roadmap["year-title"]} ${roadmap.q2}`}>
                  <h3 className={roadmap.roadh3}>Q2</h3>
                  <ul className={roadmap.roadul}>
                    <li className={roadmap.roadli}>
                      Start developing Gitopia blockchain built with Cosmos SDK
                    </li>
                    <li className={roadmap.roadli}>
                      Launch first version of Gitopia Webapp
                    </li>
                    <li className={roadmap.roadli}>
                      Release the git remote helper for Gitopia
                    </li>
                  </ul>
                </div>
                <div className={`${roadmap["year-title"]} ${roadmap.q3}`}>
                  <h3 className={roadmap.roadh3}>Q3</h3>
                  <ul className={roadmap.roadul}>
                    <li className={roadmap.roadli}>
                      Release the GitHub Mirror Action for easy migration from
                      GitHub
                    </li>
                    <li className={roadmap.roadli}>
                      Gitopia Web Wallet release
                    </li>
                    <li className={roadmap.roadli}>Gitopia Explorer release</li>
                    <li className={roadmap.roadli}>
                      Exchange listings of LORE token
                    </li>
                  </ul>
                </div>
                <div className={`${roadmap["year-title"]} ${roadmap.q4}`}>
                  <h3 className={roadmap.roadh3}>Q4</h3>
                  <ul className={roadmap.roadul}>
                    <li className={roadmap.roadli}>Ecosystem Partnerships</li>
                    <li className={roadmap.roadli}>
                      Release Organization/ Repository governance
                    </li>
                    <li className={roadmap.roadli}>Release IBC Interface</li>
                    <li className={roadmap.roadli}>
                      Launch Gitopia Desktop app
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={roadmap.row}>
            <div className={roadmap.roadmap}>
              <div className={`${roadmap["year-count"]} ${roadmap.Y2022}`}>
                <h2 className={roadmap.roadh2}>2024</h2>
              </div>
              <div className={roadmap["roadmap-content"]}>
                <div className={`${roadmap["year-title"]} ${roadmap.q1}`}>
                  <h3 className={roadmap.roadh3}>Q1</h3>
                  <ul className={roadmap.roadul}>
                    <li className={roadmap.roadli}>
                      Support CI/CD Integrations
                    </li>
                    <li className={roadmap.roadli}>
                      Release Static Code Analysis
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
