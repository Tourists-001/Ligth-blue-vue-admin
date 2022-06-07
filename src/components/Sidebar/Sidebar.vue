<template>
	<b-collapse
		class="sidebar-collapse"
		id="sidebar-collapse"
		:visible="sidebarOpened"
	>
		<nav :class="{ sidebar: true }">
			<header class="logo">
				<router-link to="/app"
					>Light <span class="fw-bold">Blue</span></router-link
				>
			</header>

			<a class="generator-link navTitle" href="#">Generate App</a>

			<ul class="nav">
				<h5 class="navTitle">APP</h5>
				<NavLink
					:activeItem="activeItem"
					header="Dashboard"
					link="/app/dashboard"
					iconName="flaticon-home-3"
					index="dashboard"
					isHeader
				></NavLink>
				<h5 class="navTitle">TEMPLATE</h5>
				<NavLink
					header="Typography"
					link="/app/typography"
					iconName="flaticon-list-3"
					index="typography"
					isHeader
				></NavLink>
				<NavLink
					header="Tables Basic"
					link="/app/tables"
					iconName="flaticon-equal-3"
					index="tables"
					isHeader
				></NavLink>
				<NavLink
					header="Notifications"
					link="/app/notifications"
					iconName="flaticon-bell"
					index="notifications"
					isHeader
				/>
				<NavLink
					:activeItem="activeItem"
					header="Components"
					link="/app/components"
					iconName="flaticon-network-1"
					index="components"
					:childrenLinks="[
						{ header: 'Charts', link: '/app/components/charts' },
						{ header: 'Icons', link: '/app/components/icons' },
						{ header: 'Maps', link: '/app/components/maps' },
					]"
				></NavLink>
			</ul>
			<h5 class="navTitle d-sm-down-none">LABELS</h5>
			<ul class="sidebarLabels d-sm-down-none">
				<li>
					<a href="#">
						<i class="fa fa-circle text-success mr-3"></i>
						<span class="labelName">Core</span>
					</a>
				</li>
				<li>
					<a href="#">
						<i class="fa fa-circle text-primary mr-3" />
						<span class="labelName">UI Elements</span>
					</a>
				</li>
				<li>
					<a href="#">
						<i class="fa fa-circle text-danger mr-3" />
						<span class="labelName">Forms</span>
					</a>
				</li>
			</ul>
			<h5 class="navTitle d-sm-down-none mb-3">
				PROJECTS
			</h5>
			<div class="sidebarAlerts d-sm-down-none">
				<b-alert
					v-for="alert in alerts"
					:key="alert.id"
					class="sidebarAlert"
					variant="transparent"
					show
					dismissible
				>
					<span>{{ alert.title }}</span
					><br />
					<b-progress
						class="sidebarProgress progress-xs mt-1"
						:variant="alert.color"
						:value="alert.value"
						:max="100"
					/>
					<span>{{ alert.footer }}</span>
				</b-alert>
			</div>
		</nav>
	</b-collapse>
</template>

<script>
	import { mapActions, mapState } from "vuex";
	import NavLink from "./NavLink/NavLink";
	export default {
		components: {
			NavLink,
		},
		data() {
			return {
				alerts: [
					{
						id: 0,
						title: "Sales Report",
						value: 15,
						footer: "Calculating x-axis bias... 65%",
						color: "primary",
					},
					{
						id: 1,
						title: "Personal Responsibility",
						value: 20,
						footer: "Provide required notes",
						color: "danger",
					},
				],
			};
		},
		created() {
			this.setActiveByRoute();
		},
		computed: {
			...mapState("layout", {
				sidebarOpened: (state) => !state.sidebarClose,
				activeItem: (state) => state.sidebarActiveElement,
			}),
		},
		methods: {
			...mapActions("layout", ["changeSidebarActive", "switchSidebar"]),
			setActiveByRoute() {
				// 当前直接进来，通过地址栏选择哪个被选择，携带高亮
				const paths = this.$route.fullPath.split("/");
				paths.pop();
				this.changeSidebarActive(paths.join("/"));
			},
		},
	};
</script>

<style src="./Sidebar.scss" lang="scss" scoped></style>
