<template>
<div class="navbar-collapse">
    <a @click.prevent="goBack" href="#" class="text-decoration-none text-dark">
        <i class="fas fa-arrow-left fa-lg"></i>
    </a>

    <span class='ms-2 fs-5 fw-bold'>{{ header }}</span>
</div>
<hr class="dropdown-divider">
</template>

<script>
    import { useRouter } from "vue-router"
    
    export default {
        props: ['heading'],
        setup(props) {
		const router = useRouter();

        const header = props.heading ?? "i-runs"

		function goBack() {
			router.back();
		}

		return {
			goBack,
            header
		};
	   }
    }
    </script>