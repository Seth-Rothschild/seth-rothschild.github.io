<script>
  import { fly } from "svelte/transition";
  import { quadOut } from "svelte/easing";
  let duration = 500;
  let easing = quadOut;

  export let order = 0;
  let delay = 100 * order;
</script>

<article
  in:fly={{ duration: duration, easing: easing, delay: delay, y: 100 }}
  class="border"
>
  <slot />
</article>
