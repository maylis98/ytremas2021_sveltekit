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
  import previous from '../_components/medias/arrow-previous.svg';
  import next from '../_components/medias/arrow-next.svg';
  import ImageBoxIndex from '../_components/ImageBoxIndex.svelte';
  import Logo from '../_components/Logo.svelte';
  // import { onMount } from 'svelte';

  // onMount(() => {
  //   const scrollContainer = document.querySelector(".carousel");

  //   scrollContainer.addEventListener("wheel", (evt) => {
  //       evt.preventDefault();
  //       scrollContainer.scrollLeft += 5 * evt.deltaY;
  //   });
  // });

  // function scrollLeft() {
	// 	document.getElementByClass('.carousel').scrollLeft += 20;
	// }

  let carousel

  function horizontalScroll (e) {
    e.preventDefault();
    carousel.scrollLeft += e.deltaY;
  };

  function scrollLeft (e) {
    carousel.scrollTo(0,carousel.innerWidth);
    // carousel.scrollLeft += -20;
  };


</script>

<svelte:head>
  <link rel="icon" href="/favicon.png" />
  <link rel="stylesheet" href="/global.css">
  <title>Y_TREMAS</title>
</svelte:head>

<main>
  <div class="logo-home"><Logo/></div>

    <div on:mouseenter={scrollLeft} class="arrow-left">
      <img src="{previous}" alt="">
    </div>

    <div class="arrow-right">
      <img src="{next}" alt="">
    </div>


    <div on:wheel={horizontalScroll} bind:this={carousel} class="carousel">
      {#each projects_list as project}
        <ImageBoxIndex
        title={project.title}
        slug={project.slug}/>
      {/each}
    </div>
</main>

<style>

.logo-home{
  position: fixed;
  top:10%;
  left: 1%;
  z-index: 2;
}

.carousel{
  display: flex;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  scroll-behavior: smooth;
  height: 87.7vh;
  position: relative;
  z-index: 1;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.arrow-left{
  position: fixed;
  left:1%;
  top:47%;
  z-index:10;
}

.arrow-right{
  position: fixed;
  right:1%;
  top:47%;
  z-index:10;
}

</style>
