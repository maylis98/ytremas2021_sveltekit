<script lang="ts">
	import Header from '../_components/Header.svelte';
  import Footer from '../_components/Footer.svelte';
  import PageTransition from '../_components/PageTransition.svelte';
</script>

<svelte:head>
  <link rel="icon" href="/favicon.png" />
  <link rel="stylesheet" href="/global.css">
</svelte:head>

<div class="root-wrap">
  <Header/>
  <PageTransition>
    <main>
      <slot></slot>
    </main></PageTransition>
  <Footer/>
</div>

<style>
.root-wrap {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  box-sizing: border-box;
}

main {
  flex: 1;
}

</style>
