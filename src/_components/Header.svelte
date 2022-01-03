<header>
  <div class="ui-layout-container">
        <a href="#" role="link" aria-label="#" id="about"><small>ABOUT</small>
          <div class="ui-drop-menu">
            <div>
              <p class="p3 on-left">y_tremas is the field of research of Maÿlis. Maÿlis d’Haultfoeuille is a French graphic and media designer. 
                She is interested in interactive narration, human behaviours towards digital screens and hybrid images. 
                She’s currently studing at the HEAD Geneva in the Media Design department where she plays with virtual and non-virtual tools to question our relationships towards technology and techniques. 
              </p>
            </div>
            <div>
              <p class="p3 on-right">
                Artistic direction <br> interaction & graphic design <br> applied to <br> video, electronics, creative coding, industrial design, video games, art installation
              </p>
            </div>
          </div>
        </a>

        <a href="#" role="link" aria-label="#" id="contact"><small>CONTACT</small>
          <div class="ui-drop-menu">
            <div>
              <p class="p4"><strong>Say Hello:</strong>
              </p>
            </div>
            <div class="component-button"><p class="p4">y.tremas@gmail.com</p></div>
            <div class="component-button"><p class="p4">@y_tremas</p></div>
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

    a{
      text-decoration: none;
      color: var(--color-2);
    }
    
    .ui-layout-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left: var(--ui-layout-container);
        padding-right: var(--ui-layout-container);
    }
    
    .ui-drop-menu{
      display:none;
      position: absolute;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      left: 0;
      padding: 3rem;
      z-index : 22;
      background-color:var(--color-3);
      transform-origin: top center;
      animation:rotateX 300ms ease-in-out forwards;
    }

    strong{
      text-transform: uppercase;
      font-weight: 100;
    }

    p{
      font-family: 'Roboto', sans-serif;
    }

    .p3{
      font-size: var(--typo-p);
      line-height: var(--typo-p-leading);
    }

    .p4{
      font-size: var(--typo-p4);
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
    
    #about:hover > .ui-drop-menu {
      display:flex;
    }
    
    #contact:hover > .ui-drop-menu {
      display:flex;
    }

    </style>