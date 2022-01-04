<script>
    export let slug, media;
</script>

<div class="project-carousel-item">
    <img src="/projects/{slug}/medias/{media}" alt=""/>
</div>

<style>

.project-carousel-item{
    height : 100%;
    /* width: calc(100%/3); */
    position: relative;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: calc(100%/3) ;
}

.project-carousel-item > img{
  position: absolute;
  display: block;
  object-fit: cover;
  width:100%;
  height:100%;
  border-radius: 6rem;
}

</style>