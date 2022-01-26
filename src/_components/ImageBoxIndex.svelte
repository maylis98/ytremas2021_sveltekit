<script>
  export let title, slug;
</script>

<div class="carousel-item">
    <img src="/projects/{slug}/vignette.jpg" loading="lazy" alt="#">
    <a href="projects/{slug}">
    <div class="title-box">{title}</div>
    </a>
</div>

<style>

.carousel-item{
  display: block;
    height : 100%;
    width:auto;
    /* width: calc(100%/3); */
    position: relative;
    /* flex-grow: 1; */
    flex-shrink: 0;
    flex-basis: calc(100%/2.3) ;
}

.carousel-item > img{
  position: absolute;
  display: block;
  object-fit: cover;
  width:100%;
  height:100%;
  border-radius: var(--ui-radius-img);
}

.title-box{
  position: absolute;
  margin: auto auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-family: sneakers-pro, sans-serif;
  font-size: var(--typo-h1); 
  color: var(--color-1);
  letter-spacing: 0.05em;
  line-height: var(--typo-h2-leading);
  text-align: center;
  cursor: crosshair;
}

.title-box:hover{
  color: var(--color-2);
  -webkit-text-stroke: 2px black;
}


</style>
