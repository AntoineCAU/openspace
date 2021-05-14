import SAbout from './styled/SAbout';

export default function About() {
  return (
    <SAbout>
      <h1 className="Team">Team</h1>
      <ul className="team-list">
        <li className="team-item">
          <img src="/img/team/antoine.jpg" alt="antoine" />
          <h1>Antoine Cau</h1>
          <a
            href="https://github.com/AntoineCAU"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <img src="/img/github.svg" alt="github" />
          </a>
        </li>
        <li className="team-item">
          <img src="/img/team/thomas.png" alt="thomas" />
          <h1>Thomas Supervil</h1>
          <a
            href="https://github.com/ThomasSupervil"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <img src="/img/github.svg" alt="github" />
          </a>
        </li>
        <li className="team-item">
          <img src="/img/team/teddy.jpeg" alt="teddy" />
          <h1>Teddy Hochart</h1>
          <a
            href="https://github.com/Hochart-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <img src="/img/github.svg" alt="github" />
          </a>
        </li>
        <li className="team-item">
          <img src="/img/team/kevin.jpg" alt="kevin" />
          <h1>Kévin Bodart</h1>
          <a
            href="https://github.com/bdtkevin"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <img src="/img/github.svg" alt="github" />
          </a>
        </li>
      </ul>
    </SAbout>
  );
}
