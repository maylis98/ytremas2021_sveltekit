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
</script>

<!-- <div class="logo-s">
  <img src="{logo}" alt="">
</div> -->

<div class="details">
  <div class="on-left">
    <h1>{project.title}</h1>
    <p class="p-grey big">{project.date}</p>
    <!-- <p class="p-grey">CATEGORY</p> -->
    <p class="caps">{project.fields}</p>
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

{#each project.medias as media}
  <img src="/projects/{project.slug}/medias/{media}" alt=""/>
{/each}

<style>

  .details{
    position: absolute;
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
  line-height: var(--typo-h1-leading);
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


</style>
