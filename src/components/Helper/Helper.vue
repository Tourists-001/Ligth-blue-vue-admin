<template>
	<div :class="{ 'theme-helper': true, 'theme-helper-opened': opened }">
		<section class="widget theme-helper-content">
			<header class="theme-helper-header d-flex p-0">
				<div class="theme-helper-toggler" @click="toggle">
					<div class="theme-helper-spinner text-white">
						<i class="la la-cog"></i>
						<i class="la la-cog"></i>
					</div>
				</div>
				<h6>Configuration</h6>
			</header>
			<div class="widget-body mt-3">
				<div class="mt-4">
					<a
						role="button"
						class="btn btn-warning btn-rounded-f btn-block fs-mini text-white"
						>Purchase</a
					>
					<a
						role="button"
						class="btn btn-danger btn-rounded-f btn-block fs-mini text-white"
					>
						Go FULL Version</a
					>
					<a
						role="button"
						class="btn btn-inverse btn-rounded-f btn-block fs-mini"
						>Documentation</a
					>
				</div>
				<div class="d-flex justify-content-between mt-lg">
					<a
						role="button"
						class="btn btn-outline-default btn-rounded-f fs-mini text-muted d-flex align-items-center"
					>
						<i class="glyphicon glyphicon-headphones mr-xs mt-n-sm"></i>
						Support
					</a>
					<a
						role="button"
						class="btn btn-outline-default btn-rounded-f fs-mini text-muted d-flex align-items-center"
					>
						<i class="fa fa-github mr-xs"></i>
						Github
					</a>
				</div>
				<div class="mt-lg d-flex flex-column align-items-center theme-sharing">
					<span class="fs-sm">Thank you for sharing!</span>
					<div class="d-flexjustify-content-center text-light mt-2 h2 mb-0">
						<a>
							<i class="fa fa-twitter mx-3"></i>
						</a>
						<a>
							<i class="fa fa-facebook mx-3"></i>
						</a>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: "Helper",
		data() {
			return {
				opened: false,
			};
		},
		methods: {
			toggle() {
				this.opened = !this.opened;
			},
		},
	};
</script>

<style src="./Helper.scss" lang="scss" scoped />
