<template>
	<section class="notifications navbar-notifications">
		<header class="header">
			<h6 class="my-3 text-center">You have 13 notifications</h6>
		</header>
		<NewNotifictionsList v-if="newNotifications" />
		<NotifictionsList v-else />
		<Messages v-if="notificationsTabSelected" />
		<Progress v-else />
		<footer class="text-sm footer px-4 py-2">
			<span class="fs-mini">Synced at: {{ getNowTime() }}</span>
			<b-button
				variant="link"
				@click="loadNotifications"
				:class="{ disabled: isLoad, 'btn-xs float-right py-0': true }"
			>
				<span v-if="isLoad"
					><i class="la la-refresh la-spin" /> Loading...</span
				>
				<i v-else class="la la-refresh" />
			</b-button>
		</footer>
	</section>
</template>

<script>
	import NewNotifictionsList from "./NotificationsDemo/NewNotifictionsList";
	import NotifictionsList from "./NotificationsDemo/NotificationsList";
	import Messages from "./NotificationsDemo/Messages";
	import Progress from "./NotificationsDemo/Progress";
	export default {
		name: "notifications",
		components: {
			NewNotifictionsList,
			NotifictionsList,
			Messages,
			Progress,
		},
		data() {
			return {
				isLoad: false,
				newNotifications: false,
				notificationsTabSelected: false,
			};
		},
		methods: {
			getNowTime() {
				const now = new Date();
				const year = now.getFullYear(); //得到年份
				const month = now.getMonth() + 1; //得到月份
				const date = now.getDate(); //得到日期
				const hour = now.getHours(); //得到小时数
				const minute = now.getMinutes(); //得到分钟数
				return `${date} ${month} ${year} ${hour}:${minute}`;
			},
			loadNotifications() {
				this.isLoad = !this.isLoad;
				this.notificationsTabSelected = false;
				setTimeout(() => {
					this.newNotifications = !this.newNotifications;
					this.notificationsTabSelected = true;
					this.isLoad = !this.isLoad;
				}, 1500);
			},
		},
	};
</script>

<style src="./Notifications.scss" lang="scss" />
