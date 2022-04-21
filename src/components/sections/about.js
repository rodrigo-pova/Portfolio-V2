import styled from 'styled-components';
import profilePic from '../../images/me.png';

const StyledAboutSection = styled.section`
  margin: 0 auto;
  height: 100vh;
  width: 80%;
  max-width: 1120px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    margin-top: 1em;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      font-family: var(--ff-mono);
      font-size: var(--fz-sm);

      &:before {
        content: '=>';
        display: inline-block;
        font-family: var(--ff-mono);
        position: relative;
        padding-right: 1em;
        color: var(--color-accent);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    display: block;
    position: relative;
    width: fit-content;
    border-radius: var(--border-radius);
    background-color: var(--color-accent);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      width: 300px;
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--color-black);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--color-accent);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Redux', 'Node.js', 'MySQL', 'MongoDB', 'Docker'];

  return (
    <StyledAboutSection id="about">
      <h2 className="section-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello, world! My name is Rodrigo Pova.
            </p>

            <p>
              I started my software development journey in 2020 after working for Ed-tech companies as a Chemistry teacher. 
            </p>
            <p>
              As I sought to understand the tech behind their products, I discovered an entire world of challenges and opportunities in software development that thrilled me to give it a try.
            </p>
            <p>
              I am now a student at{' '}
              <a href="https://github.com/betrybe">@betrybe</a>
              , where I've acquired knowledge and practice in the following technologies:
            </p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <img
              className="img"
              src={profilePic}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
