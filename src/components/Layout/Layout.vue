<template>
	<div :class="{ root: true, sidebarClose }">
		<Helper />
		<Header />
		<Sidebar />
		<div ref="content" class="content animated fadeInUp">
			<transition name="router-animation">
				<router-view />
			</transition>
		</div>
		<footer class="contentFooter">
			Light Blue Vue Admin Dashboard Template - Made by
			<a href="#">Flatlogic</a>
		</footer>
	</div>
</template>

<script>
	import { mapState, mapActions } from "vuex";
	import Helper from "@/components/Helper/Helper";
	import Header from "@/components/Header/Header";
	import Sidebar from "@/components/Sidebar/Sidebar";
	export default {
		name: "Layout",
		components: {
			Helper,
			Header,
			Sidebar,
		},
		computed: {
			...mapState("layout", {
				sidebarClose: (state) => state.sidebarClose,
			}),
		},
		mounted() {
			this.$refs.content.addEventListener("animationend", () => {
				this.$refs.content.classList.remove("animated");
				this.$refs.content.classList.remove("fadeInUp");
			});
		},
		methods: {
			...mapActions("layout", ["switchSidebar", "changeSidebarActive"]),
		},
	};
</script>

<style src="./Layout.scss" lang="scss"></style>
