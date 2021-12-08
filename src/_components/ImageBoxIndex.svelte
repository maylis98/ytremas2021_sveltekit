<script context="module">
// import {titles} from "js file that parse the json file and get all the titles of the projects"
  export async function preload() {
      const response = await this.fetch('projects.json');
      const responseJson = await response.json();
      return {
          title: responseJson
      }
  }
</script>



<div class="carousel-item">
    <img src="../../static/medias/dog.jpg" loading="lazy" alt="#">
    <div class="title-box">

        <!-- {#each titles as title} -->
        <!-- <h1>{title}</h1> -->
        <!-- {/each} -->
        
    </div>
</div>

<style>

.carousel-item{
    height : 52.1rem;
}   

.carousel-item > img{
  display: block;
  object-fit: cover;
  width:100%;
  height:100%;
  border-radius: 6rem;
  z-index: 20;
}

.title-box{
  margin: auto 0;
}


</style>