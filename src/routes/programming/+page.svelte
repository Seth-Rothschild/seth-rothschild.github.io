<script>
  import ContentCard from "../../components/ContentCard.svelte";

  const games = [
    {
      name: "Mouse",
      path: "mouse",
      description: "Programming tutorial for kindergarteners. Create a program and execute it to get cheese.",
    },
    {
      name: "Outer Spatial Reasoning",
      path: "outer-spatial-reasoning",
      description: "The Sun, Earth, and Moon in real time to see phases of the moon and relative position of the planets.",
    },
    {
      name: "Space Explorer",
      path: "space-explorer",
      description: "Fly a rocket around the solar system and see fun facts from Wikipedia.",
    },
    {
      name: "Taxi and Stoplights",
      path: "taxi-and-stoplights",
      description: "Red light, green light, and others.",
    },
    {
      name: "Vim Dodge",
      path: "vim-dodge",
      description: "Dodge walls with vim keybindings.",
    },
  ];
</script>

<div class="content">
  <h1 class="small">Programming</h1>
  <div class="small-divider" />
  <h3 class="small">Example Tools from Work</h3>
  <p>
    There's a large part of my day-to-day that's considered proprietary
    information, but a few of the tools I've made have been either disclosed as
    patents, or would not be considered proprietary.
  </p>
  <ContentCard order="0">
    <b>Dell Chat</b> is an internal AI platform where I was the tech
    lead and a hands-on engineer. We adapted early versions of the open source
    <a
      href="https://github.com/open-webui/open-webui"
      target="_blank"
      rel="noopener noreferrer">Open WebUI</a
    >
    to work within Dell, enabling users and teams to experiment and distribute their own AI solutions. 
    It grew to over 30,000 registered users and 4,000 daily users.
  </ContentCard>
  <ContentCard order="1">
    <b>Retriever</b> is an application I made to help the team write and submit reports
    and patent disclosures. The
    most interesting part is that it uses pandoc to convert from markdown (which
    the team does like using) into LaTeX templates that match required designs by
    the org. A similar markdown-to-PDF engine is open source as
    <a
      href="https://github.com/Seth-Rothschild/template_builder"
      target="_blank"
      rel="noopener noreferrer">template_builder</a
    >.
  </ContentCard>
  <ContentCard order="2">
    <b>Springerdoodle</b> was a prototype application I made in Elm and Flask
    back in 2019 to manage access to remote machines. Noting that the default
    behavior of developers was to use username/password, this application took
    care of the mechanics of key transfer and setting up the ssh config. That
    prototype is associated with the patent
    <a
      href="https://patents.google.com/patent/US11489824B2/en?inventor=Seth+Jacob+Rothschild"
      target="_blank"
      rel="noopener noreferrer">US11489824B2</a
    >.
  </ContentCard>

  <h3 class="small">A few public projects</h3>
  <p>
    My GitHub page can be found <a
      href="https://github.com/Seth-Rothschild"
      target="_blank"
      rel="noopener noreferrer">here,</a
    > and I'm happy to talk about any of the projects in there. Here are a few of
    the more recent and interesting ones:
  </p>
  <ContentCard order="3">
    <p>
      <a href="https://libaduk.com" target="_blank" rel="noopener noreferrer"
        >libaduk.com</a
      >
      I like the way
      <a href="https://lichess.org" target="_blank" rel="noopener noreferrer"
        >Lichess</a
      >
      feels and wanted to study Go with a similar interface. It can play games on OGS,
      has puzzles, a shared library for game review, and
      an in-browser KataGo opponent, and has over 150 registered players.
    </p>
    <p>
      Using LLMs is currently controversial. For this site I made extensive use of Claude at the start to port over the HTML and CSS from
      <a
        href="https://github.com/lichess-org/lila"
        target="_blank"
        rel="noopener noreferrer">lila</a
      >
      and the board implementation from
      <a
        href="https://github.com/SabakiHQ"
        target="_blank"
        rel="noopener noreferrer">Sabaki</a
      > into Svelte. That got me to a working site that looks like Lichess, which I have tried
      and failed to do a few times before. While I wouldn't consider the site "vibe coded" by most definitions (I read and rewrite code going in) I do use LLMs in development.
      The
      <a
        href="https://github.com/Seth-Rothschild/libaduk"
        target="_blank"
        rel="noopener noreferrer">source</a
      > is AGPL licensed.
    </p>
  </ContentCard>
  <ContentCard order="4">
    <a
      href="https://github.com/Seth-Rothschild/ep_vim"
      target="_blank"
      rel="noopener noreferrer">ep_vim</a
    >
    When we were experimenting with Etherpad internally, I missed vim keybindings, so I made a
    plugin that adds them. It has normal, insert, and visual modes, motions,
    text objects, operators, registers, marks, search, counts, and dot-repeat.
    It's published on
    <a
      href="https://www.npmjs.com/package/ep_vim"
      target="_blank"
      rel="noopener noreferrer">npm</a
    > and was mostly written with Claude Code.
  </ContentCard>
  <ContentCard order="5">
    <a
      href="https://github.com/Seth-Rothschild/goban_irl"
      target="_blank"
      rel="noopener noreferrer">Goban IRL</a
    >
    This is an app that uses a webcam to track the state of a Go board using OpenCV.
    While I've seen a lot of sophisticated strategies for detecting stones with image
    recognition, the strategy here is to just use the color differential between
    black and white stones which is sufficient, cheap, and fast. As a proof of concept
    I was able to use this library to copy games from a physical board to a computer,
    but also between two computer boards.
  </ContentCard>
  <ContentCard order="6">
    <a
      href="https://github.com/Seth-Rothschild/player_pyano"
      target="_blank"
      rel="noopener noreferrer">Player Pyano</a
    >
    At home I'm housesitting a 1989 Yamaha Disklavier grand piano, which takes in
    floppy disks of MIDI and plays the song using solenoids built into the piano.
    Thankfully, MIDI hasn't really changed in the last 30 years. This is a webapp
    that I run on a raspberry pi to quickly create a playlist and send songs to the
    piano. The software also does adjustments to note velocity to account for the
    physical state of the piano.
  </ContentCard>
  <ContentCard order="7">
    <a
      href="https://github.com/Seth-Rothschild/wordle_strategy_evaluation"
      target="_blank"
      rel="noopener noreferrer">Wordle Strategy Evaluation</a
    >
    When everyone was playing Wordle, there was some speculation on what the optimal
    strategy would be. To quickly test out varying strategies I threw together a
    quick TDD Wordle implementation in Python to test a given strategy against the
    full word list. The oft-proposed strategy to select words by how often a letter
    appears in a particular position only scores an average of 3.81 guesses across
    the word set.
  </ContentCard>

  <h3 class="small">Fun and Games</h3>
  <p>
    The following are fully vibe coded. They're mostly made to entertain myself and my family, but they might be fun for you too!
  </p>
  <div class="games">
    {#each games as game}
      <a
        class="game"
        href="https://sethjrothschild.com/{game.path}/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          class="small-round"
          src="/projects/{game.path}.jpg"
          alt="Screenshot of {game.name}"
        />
        <b>{game.name}</b>
        <small>{game.description}</small>
      </a>
    {/each}
  </div>
</div>

<style>
  a {
    color: var(--primary);
    text-decoration: underline;
    font-weight: bold;
  }

  .games {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 16px;
    margin-bottom: 40px;
  }
  .game {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    text-align: left;
    text-decoration: none;
    font-weight: normal;
    color: inherit;
    line-height: 1.3;
  }
  .game img {
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    object-position: top;
    border: 1px solid var(--outline-variant);
    margin-bottom: 6px;
  }
  .game b {
    color: var(--primary);
    font-size: 16px;
  }
  .game small {
    font-size: 14px;
  }
</style>
