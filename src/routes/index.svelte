<script context="module">
  export async function load({
    fetch
  }) {
    const projects_list = await fetch(`/projects.json`)
      .then((r) => r.json());
    return {
      props: {
        projects_list
      }
    };
  }
</script>

<script lang="ts">
  export let projects_list;
	// import logo from '../_components/medias/logo-s.svg';
  import previous from '../_components/medias/arrow-previous.svg';
  import next from '../_components/medias/arrow-next.svg';
  import { svg_element } from 'svelte/internal';
  import ImageBoxIndex from '../_components/ImageBoxIndex.svelte';

</script>

<svelte:head>
  <link rel="icon" href="/favicon.png" />
  <link rel="stylesheet" href="/global.css">
  <title>Y_TREMAS</title>
</svelte:head>

<main>
  <!-- div logo-box
    (don't forget to import it) -->
  <div class="layout-controls">
    <div class="layout-button">
      <img src="{previous}" alt="">
    </div>
    <div class="layout-button">
      <img src="{next}" alt="">
    </div>
  </div>

    <div class="carousel">
      {#each projects_list as project}
        <ImageBoxIndex
        title={project.title}
        slug={project.slug}/>
      {/each}
    </div>
</main>

<style>


.carousel{
  display: flex;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  scroll-behavior: smooth;
  height: 87.7vh;
  position: relative;
  z-index: 1;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.layout-controls {
  position:absolute;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width:100%;
  height: 92%;
  margin-top: auto;
  margin-bottom:auto;
  padding-right: var(--ui-layout-container-padding);
  padding-left: var(--ui-layout-container-padding);
  /* z-index: 2; */
}

.layout-button {
  display: inline;
}

</style>
