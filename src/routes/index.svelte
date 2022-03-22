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
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';


  import ImageBoxIndex from '../_components/ImageBoxIndex.svelte';
  import Carousel from '../_components/Carousel.svelte';
  import Logo from '../_components/Logo.svelte';
  import ArrowNext from '../_components/medias/ArrowNext.svelte';
  import ArrowPrev from '../_components/medias/ArrowPrev.svelte';

  const D = 40, PERCENT = 0.02;

  const progress = tweened(0, {
		duration: D
	});

  let carousel_el, wrap_el;
	let update = undefined,
    direction = 0;

  function pointerIn(new_direction){
		if(update != undefined) return;
		direction = new_direction;
		updateFunc();
		update = setInterval(updateFunc, D);
	}

  function pointerOut(){
		if(update == undefined) return;
		clearInterval(update);
		update = undefined;
	}

  function updateFunc(){
		let increment = wrap_el.clientWidth * PERCENT;
		let value = $progress + (increment * direction);
		value = Math.min(value, wrap_el.clientWidth - carousel_el.clientWidth)
		value = Math.max(value,0);
		progress.set(value);
	}

  let carousel;

  function horizontalScroll (e) {
    e.preventDefault();
    wrap_el.scrollLeft += e.deltaY;
  };

  // function scrollLeft (e) {
  //   console.log(progress);
  //   carousel.scrollTo(carousel.scrollLeft - 20,0);
  // };

</script>

<svelte:head>
  <link rel="icon" href="/favicon.png" />
  <link rel="stylesheet" href="/global.css">
  <title>Y_TREMAS</title>
</svelte:head>

<main bind:this={carousel_el}>
  <div class="logo-home"><Logo/></div>

    <Carousel>
    {#each projects_list as project}
      <ImageBoxIndex
      title={project.title}
      slug={project.slug}/>
    {/each}

    </Carousel>


</main>

<style>
.logo-home{
  position: fixed;
  top:10%;
  left: 1%;
  z-index: 2;
}

/* .carousel{
  display: flex;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  scroll-behavior: smooth;
  height: 87.7vh;
  position: relative;
  z-index: 1;
  transition: transform 0.1s;
} */

</style>
