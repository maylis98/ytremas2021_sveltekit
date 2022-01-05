<script lang="ts">
	import Header from '../_components/Header.svelte';
  import Footer from '../_components/Footer.svelte';
  import PageTransition from '../_components/PageTransition.svelte';
</script>

<svelte:head>
  <link rel="icon" href="/favicon.png" />
  <link rel="stylesheet" href="/global.css">
</svelte:head>

<Header/>
<PageTransition><slot></slot></PageTransition>
<Footer/>


