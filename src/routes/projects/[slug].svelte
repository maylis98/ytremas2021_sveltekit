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

{project.title}
{project.date}
{project.fields}
{project.content}
{project.body}
{project.fonts}

{#each project.medias as media}
  <img src="/projects/{project.slug}/medias/{media}" alt=""/>
{/each}
