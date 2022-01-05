<script context="module">
  export async function load({
    page,
    fetch
  }) {
    const slug = page.params.slug;
    let res = await fetch(`/projects/${slug}.json`);
    if (res.status == 404) return {
      status: 404,
      error: new Error(`Ce projet n'existe pas`)
    }
    let project = await res.json();
    return {
      props: {
        project
      }
    }
  }
</script>

<script>
  export let project;
  // import ImageBoxProjects from 'src/_components/projects_components/ImageBoxProjects.svelte';
  import Logo from "../../_components/Logo.svelte";
</script>

<svelte:head>
  <link rel="icon" href="/favicon.png" />
  <link rel="stylesheet" href="/global.css">
  <title>Y_TREMAS | {project.title}</title>
</svelte:head>

<main>
  <!-- <div class="logo-s">
    <img src="{logo}" alt="">
  </div> -->

  <div class="logo-project"><Logo/></div>

  <div class="project-carousel">
      {#each project.medias as media}
      <div class="project-carousel-item">
        <img src="/projects/{project.slug}/medias/{media}" alt=""/>
      </div>
      {/each}
  </div>

  <div class="details">
    <div class="on-left">
      <h1>{project.title}</h1>
      <p class="p-grey">{project.type}</p>
      <p class="caps">{project.package}</p>
      <p class="p-grey big">{project.date}</p>
      <!-- <p class="p-grey">CATEGORY</p> -->
      <p class="caps">{project.fields}</p>
      <br>
      <p>{project.body}</p>
    </div>
    <div class="on-right">
      <p class="p-grey">CONTENT</p>
      <p>{project.content}</p>
      <p class="p-grey">SPEC</p>
      <p>{project.fonts}</p>
      <p>{project.format}</p>
      <p>{project.media}</p>
    </div>
  </div>
</main>


<!-- A FAIRE -->

<!-- <div class="project-carousel">
  {#each project.medias as media}
    <ImageBoxProjects
          slug={project.slug}
          media={media}/>
  {/each}
</div> -->


<style>

.logo-project{
  position: fixed;
  top:10%;
  left: 1%;
  z-index: 2;
}

.logo-project > svg{
width: 20%;
  height: 20%;
}

.project-carousel{
  display: flex;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  scroll-behavior: smooth;
  height: 87.7vh;
  position: relative;
  z-index: 1;
}

.project-carousel::-webkit-scrollbar {
  display: none;
}

.project-carousel-item{
    height : 100%;
    position: relative;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: calc(100%/2);
}

.project-carousel-item > img{
  position: absolute;
  display: block;
  /* object-fit: cover;
  width:100%; */
  height:100%;
  border-radius: var(--ui-radius-img);
}

.details{
  position: relative;
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

h1{
  font-family: sneakers-pro, sans-serif;
  font-size: var(--typo-p4); 
  color: var(--color-3);
  letter-spacing: 0.05em;
  text-align: left;
}

p{
  font-family: 'Roboto', sans-serif;
  font-size: var(--typo-p); 
  letter-spacing: 0.05em;
  line-height: var(--typo-p-leading);
  text-align: left;
}

.p-grey{
  color: var(--color-n-500);
}

.big{
  font-size: var(--typo-p4);
}

.caps{
  text-transform: uppercase;
}

main{
  background-color: var(--color-1);
}

</style>
