<script context="module">
	import * as c from "../db/enc";
	export async function load({ session }) {
		if (!session?.token) {
			return {
				props: {
					session: null
				}
			};
		}
		return {
			props: {
				user: c.encrypt(session.token),
			},
		};
	}
</script>

<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
	integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
	crossorigin="anonymous">export let user;</script>

<svelte:head>
	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
		crossorigin="anonymous"
	/>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
	/>
</svelte:head>


<!-- {#if user}
	<h1>hi {user}</h1>
{:else}
	<h1>login pls</h1>
{/if} -->

<img src="/hyper.png" alt="idk something poopy" class="image" />

<style>
	.image {
  	display: block;
  	margin-left: auto;
  	margin-right: auto;
  	width: 50%;
	}
</style>