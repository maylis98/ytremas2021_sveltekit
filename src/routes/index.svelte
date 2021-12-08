<script lang="ts">
	// import logo from '../_components/medias/logo-s.svg';
  import previous from '../_components/medias/arrow-previous.svg';
  import next from '../_components/medias/arrow-next.svg';
import { svg_element } from 'svelte/internal';
import ImageBox from '../_components/ImageBox.svelte';
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

    <svelte:component this={ImageBox}/>

  </div>
</main>

<style>

.carousel{
  display: flex;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  scroll-behavior: smooth;
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
  height: 95%;
  margin-top: auto;
  margin-bottom:auto;
  padding: var(--ui-layout-container-padding);
  padding: var(--ui-layout-container-padding);
}

.layout-button {
  display: inline;
}

</style>