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
  <div class="logo-home"><Logo class="logo-index"/></div>

    <div on:pointerover={()=>{pointerIn(-1);}} on:pointerleave={pointerOut} class="arrow-left">
      <img src="{previous}" alt="">
    </div>

    <div on:pointerover={()=>{pointerIn(1);}} on:pointerleave={pointerOut} class="arrow-right">
      <img src="{next}" alt="">
    </div>


    <div on:wheel={horizontalScroll} bind:this={wrap_el} class="carousel" style="transform:translateX(-{$progress}px)">
      {#each projects_list as project}
        <ImageBoxIndex
        title={project.title}
        slug={project.slug}/>
      {/each}
    </div>
</main>

<style>

/* main{
		position:relative;
		height:auto;
		width: 100%;
		height: 80%;
		overflow:clip;
	} */

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
  transition: transform 0.1s;
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
