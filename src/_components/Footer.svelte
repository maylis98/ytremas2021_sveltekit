<footer>
    <div class="ui-layout-container">
        <p class="p2">©ALL RIGHTS RESERVED</p>
        <a href={'#'} role="link" aria-label="#" id="drop-menu">
          <p class="p2">LAST UPDATE 05/01/2022</p>
          <div class="ui-drop-menu">
            <div>
              <p class="p2">Built with SvelteKit | Dev by Maÿlis d'Haultfoeuille, Thibaud Goiffon, Nicolas Baldran</p>
            </div>
          </div>
        </a>
    </div>

</footer>

<style>

p{
  font-family: 'Roboto', sans-serif;
}

footer {
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    background-color:var(--color-3); 
}

.ui-layout-container {
    display: flex;
    position:relative;
    flex-direction: row;
    justify-content: space-between;
    padding-left: var(--ui-layout-container);
    padding-right: var(--ui-layout-container);
}

.ui-drop-menu{
  display:none;
  position: absolute;
  bottom:127%;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100%;
  left: 0;
  padding: 2rem;
  border-radius: var(--ui-radius-img) var(--ui-radius-img) 0 0;
  z-index : 22;
  background-color:var(--color-3);
  transform-origin: bottom center;
  animation:rotateX 300ms ease-in-out forwards;
  text-align: end;
}

.ui-layout-container a > p:hover{
 color: var(--color-1);
}

#drop-menu:hover > .ui-drop-menu {
  display:block;
}

@keyframes rotateX {
  0% {
    opacity: 0;
    transform: rotateX(-90deg);
  }
  50% {
    transform: rotateX(-20deg);
  }
  100% {
    opacity: 1;
    transform: rotateX(0deg);
  }
}

small { 
  font-family:'Roboto', sans-serif;
  font-size: var(--typo-s); 
  color: var(--color-2);
}
    

</style>