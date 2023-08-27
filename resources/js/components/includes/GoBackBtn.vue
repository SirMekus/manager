<template>
	<nav class="navbar navbar-expand-lg bg-dark sticky-top home-color">
		<div class="navbar-collapse">
			<a @click.prevent="goBack" href="#" class="text-decoration-none text-light">
				<i class="fas fa-arrow-left fa-lg"></i>
			</a>
			<span class="ms-3 fs-5 text-light fw-bold">{{ header }}</span>
		</div>
	</nav>
</template>

<script>
import { useRouter } from "vue-router";

export default {
	props: ["heading"],
	setup(props) {
		const router = useRouter();

        const header = props.heading ?? import.meta.env.VITE_APP_NAME

		function goBack() {
			router.back();
		}

		return {
			goBack,
            header
		};
	},
};
</script>
