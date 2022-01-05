<header>
  <div class="ui-layout-container">
        <a href="#" role="link" aria-label="#" id="drop-menu"><small>ABOUT</small>
          <div class="ui-drop-menu">
            <div>
              <p class="p3 on-left">
                <strong> y_tremas</strong> is Maÿlis's portfolio & research platform. 
              </p>
              <br>
              <p class="p3 on-left">
                <strong>Maÿlis d’Haultfoeuille</strong> is a French graphic and media designer. 
              </p>
              <br>
              <p class="p3 on-left">
                She is interested in human behaviours towards digital technologies. She uses interactive fictions to trigger spectators, make them dream or reflect. 
              </p>
              <br>
              <p class="p3 on-left">
                She is currently based in Geneva where she plays with virtual and analog tools to find new ways of doing storytelling. 
              </p>
            </div>
            <div>
              <p class="p3 on-right">
                Artistic direction <br> interaction & graphic design <br> applied to <br> video, electronics, creative coding, industrial design, video games, art installation
              </p>

              <br>
              <p class="p2 on-right">Graduated from</p>

              <br>
              <p class="p3 on-right">
                <strong>HEAD</strong> <em>Geneva, CH</em>
              </p>
              <p class="p3 on-right">Master of Art in Design <em>→</em> Media Design</p>

              <br>
              <p class="p3 on-right">
                <strong>HEAR</strong> <em>Strasbourg, FR</em>
              </p>
              <p class="p3 on-right">Bachelor in Visual Communication <em>→</em> Graphic Design</p>

            </div>
          </div>
        </a>

        <a href="#" role="link" aria-label="#" id="drop-menu"><small>EXPERIENCE</small>
          <div class="ui-drop-menu">
            <div>
              <p class="p2 on-left">EXHIBITIONS</p>
              <br>

              <p class="p3 on-left">
                <strong>International Biennial of Graphic Design</strong> <em>2021</em>
              </p>
              <p class="p3 on-left">Finalist in the Book design’s student competition
               <br>
               <em>Le Signe, National Center of Graphic Design, Chaumont, FR</em>
              </p>

              <br>
              <p class="p3 on-left">
                <strong>GSGS’21</strong> <em>2021</em>
              </p>
              <p class="p3 on-left">International conference on gamification & serious game
               <br>
               <em>La Source, HES-SO University of Applied Sciences and Arts, Lausanne, CH</em>
              </p>

              <br>
              <p class="p3 on-left">
                <strong>Distortion Festival 'As Above, So Below'</strong> <em>2021</em>
              </p>
              <p class="p3 on-left">Finalist in the Book design’s student competition
               <br>
               <em>Online conferences and exhibition at HEAD-Genève Campus, Geneva, CH</em>
              </p>

              <br>
              <p class="p3 on-left">
                <strong>Visions d'exil Festival</strong> <em>2019</em>
              </p>
              <p class="p3 on-left">In collaboration with OFPRA
               <br>
               <em>Palais de la Porte Dorée, Paris, FR</em>
              </p>

              <br>
              <p class="p3 on-left">
                <strong>Nuit de l'Aubette</strong> <em>2018</em>
              </p>
              <p class="p3 on-left">
               <em>Aubette 1928, Strasbourg, FR</em>
              </p>

            </div>


            <div>
              <p class="p2 on-right">EXPERIENCE</p>
              <br>
              <p class="p3 on-right">
                <strong>Studio Z1</strong> <em>Geneva, CH</em>
              </p>
              <p class="p2 on-right">Laurent Novac & Camille de Dieu</p>
              <p class="p3 on-right">Virtual production & Artistic Direction
                <br>
                <em>July-Sept 2021</em> 
              </p>

              <br>
              <p class="p3 on-right">
                <strong>Plus33 | Support Magazine</strong> <em>Paris, FR</em>
              </p>
              <p class="p2 on-right">Léopoldine Siaud</p>
              <p class="p3 on-right">Visual Communication & Artistic Direction
                <br>
                <em>June-August 2019</em> 
              </p>

              <br>
              <p class="p3 on-right">
                <strong>Chez Voltaire</strong> <em>Paris, FR</em>
              </p>
              <p class="p2 on-right">Renaud Philippe</p>
              <p class="p3 on-right">Visual Communication & Artistic Direction
                <br>
                <em>June-August 2018</em> 
              </p>
              
            </div>
          </div>
        </a>

        <a href="#" role="link" aria-label="#" id="drop-menu"><small>CONTACT</small>
          <div class="ui-drop-menu">
            <div>
              <p class="p4"><strong>Say Hello:</strong>
              </p>
            </div>
            <div class="component-button"><a onClick="javascript:window.open('mailto:'y.tremas@gmail.com', 'my-window');event.preventDefault()"
              href="mailto:y.tremas@gmail.com"><p class="p4">y.tremas@gmail.com</p></a></div>
            <div class="component-button"><a href="https://www.instagram.com/y_tremas/?hl=fr" target="_blank"><p class="p4">@y_tremas</p></a></div>
          </div>
        </a>
  </div>
</header>

<style>

  header {
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    background-color:var(--color-3); 
  }
  
  .ui-layout-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: var(--ui-layout-container);
    padding-right: var(--ui-layout-container);
  }

  .ui-layout-container > a{
  text-decoration: none;
  color: var(--color-2);
}

.ui-layout-container > a:hover{
  color: var(--color-1);
}

  .ui-drop-menu{
  display:none;
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  left: 0;
  padding: 3rem;
  border-radius: 0 0 var(--ui-radius-img) var(--ui-radius-img);
  z-index : 22;
  background-color:var(--color-3);
  transform-origin: top center;
  animation:rotateX 300ms ease-in-out forwards;
}

#drop-menu:hover > .ui-drop-menu {
  display:flex;
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

  strong{
    color: var(--color-1);
    text-transform: uppercase;
    font-weight: 100;
  }

  .p3{
    font-size: var(--typo-min);
    line-height: var(--typo-p-leading);
    color: var(--color-2);
    letter-spacing: var(--letter-spacing-p);
  }

  .p4{
    font-size: var(--typo-p4);
  }

    </style>