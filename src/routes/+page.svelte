<script>
  import ContentCard from "../components/ContentCard.svelte";
</script>

<div class="content">
  <h1 class="small">Home</h1>
  <div class="small-divider" />
  <div class="flex">
    <div class="column">
      <h3 class="small">About</h3>
      <p>
        I am a Senior Principal Software Engineer in the Dell Technologies
        Office of the CTO, where I turn loosely defined, ambitious ideas into
        working prototypes. My recent focus is agentic AI and how developers
        should work alongside it, including how to raise the engineering bar
        with pair programming and extreme programming.
      </p>
      <p>
        Prior to working at Dell I was a Research Scientist at <a
          href="https://www.featurelabs.com/open/"
          target="_blank"
          rel="noopener noreferrer">Feature Labs</a
        >
        where I worked on the open source project
        <a
          href="https://github.com/alteryx/featuretools"
          target="_blank"
          rel="noopener noreferrer"
        >
          Featuretools.
        </a>
      </p>
    </div>
    <img alt="Seth Rothschild" src="headshot.jpg" height="200px" />
  </div>
  <h3 class="small">Mathematics</h3>
  <p>
    I studied in algebraic groups over finite fields of positive characteristic.
    I completed my Ph.D. in 2017 under <a
      href="https://math.tufts.edu/people/faculty/george-mcninch"
      target="_blank"
      rel="noopener noreferrer">George McNinch</a
    >
    at
    <a href="https://www.tufts.edu" target="_blank" rel="noopener noreferrer"
      >Tufts University</a
    > in Medford, MA.
  </p>
  <p>
    My thesis work involved constructing unipotent groups by group extensions,
    and then finding representations of nice groups which contain those
    extensions.
  </p>
  <h3 class="small">Contact</h3>
  <p>gmail: seth.j.rothschild</p>

  <h3 class="small">Resume</h3>
  <p>
    <a href="/seth_rothschild_resume.pdf">PDF Version [Updated November 2026]</a
    >
  </p>

  <h3 class="small">Thesis</h3>
  <p>
    <a href="/seth_rothschild_thesis.pdf">PDF Version [Updated April 2017]</a
    >
  </p>
  <p>
    <a
      href="https://dl.tufts.edu/concern/pdfs/bk128p04h"
      target="_blank"
      rel="noopener noreferrer">Tufts Digital Library</a
    >
  </p>
</div>

<style>
  a {
    color: var(--primary);
    font-weight: bold;
    text-decoration: underline;
  }

  .flex {
    display: flex;
  }
  img {
    float: right;
    margin-left: 15px;
    margin-top: 25px;
    margin-right: 10px;
  }
  @media screen and (max-width: 700px) {
    img {
      width: 0%;
    }
  }
</style>
