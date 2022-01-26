<script>
    import ArrowNext from '../_components/medias/ArrowNext.svelte';
    import ArrowPrev from '../_components/medias/ArrowPrev.svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const D = 40, INCR = 100;
	const progress = tweened(0, {
		duration: D
	});
	let carousel_el, wrap_el;
	let update = undefined,
			direction = 0;
            
	function pointerIn(new_direction){
		if(update != undefined) return;
		direction = new_direction;
		updateFunc();
		update = setInterval(updateFunc, D);
	}
	function pointerOut(){
		if(update == undefined) return;
		clearInterval(update);
		update = undefined;
	}
	function updateFunc(){
		let value = (INCR * direction);
		updateProgress(value);
	}

	function wheeeeeeel(e){
		let value = e.deltaY * .01 * INCR;
		updateProgress(value);
	}

	function updateProgress(in_v){
		let value = $progress + in_v;
		value = Math.min(value, wrap_el.clientWidth - carousel_el.clientWidth)
		value = Math.max(value,0);
		progress.set(value);
	}


</script>

<main bind:this={carousel_el} on:wheel={wheeeeeeel}>
	<div bind:this={wrap_el}
			 class="wrap"
			 style="transform:translateX(-{$progress}px)">
       <slot></slot>
	</div>
	<div class="ctrls">
		<div on:pointerover={()=>{pointerIn(-1);}} on:pointerleave={pointerOut}>
            <ArrowPrev/>
		</div>
		<div on:pointerover={()=>{pointerIn(1);}} on:pointerleave={pointerOut}>
            <ArrowNext/>
		</div>
	</div>
</main>

<style>
	main{
		position:relative;
		width: 100%;
		height: 80vh;
		overflow:clip;
	}
	.wrap{
		position:absolute;
		display: flex;
		transition: transform 0.1s;
		height:100%;
	}

	.ctrls{
		position:absolute;
		top:40%;
		left:0.2%;
		box-sizing:border-box;
		width:100%;
		display:flex;
		justify-content: space-between;
		padding:1em;
	}

	/* .ctrls > div{
		background:black;
		color:white;
		padding: .8em 1em;
	} */
</style>
