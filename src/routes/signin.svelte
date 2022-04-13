<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
	integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
	crossorigin="anonymous"></script>

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

<form action="/api/signin" method="post">
	<div class="form-floating mb-3">
		<input type="text" class="form-control" id="username" name="username" placeholder="Username" />
		<label for="username">Username</label>
	</div>
	<div class="form-floating">
		<input
			type="password"
			class="form-control"
			id="password"
			name="password"
			placeholder="Password"
		/>
		<label for="password">Password</label>
	</div>
	<button type="submit" class="btn btn-primary">Submit</button>
</form>
