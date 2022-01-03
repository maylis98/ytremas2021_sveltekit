<script>
export let title, slug;
</script>
<a href="projects/{slug}">{title}</a>

<div class="carousel-item">
    <img src="/projects/{slug}/vignette.jpg" loading="lazy" alt="#">
    <div class="title-box">
    {title}
    </div>
</div>

<style>

.carousel-item{
    height : 100%;
    width: calc(100% / 2);
    position: relative;
}

.carousel-item > img{
  position: absolute;
  display: block;
  object-fit: cover;
  width:100%;
  height:100%;
  border-radius: 6rem;
}

.title-box{
  margin: auto 0;
  position: absolute;
  left: 50%;
}


</style>
