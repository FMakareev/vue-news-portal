<template>
	<li class="mega-menu-item">
		<a :href="menuItem.href">{{ menuItem.title }}</a>

		<div class="sub-mega-menu">
			<div class="nav flex-column nav-pills" role="tablist">
				<a
					v-on:mouseenter="tabHover(item)"
					v-for="(item, index) in menuItem.tabs"
					v-bind:key="index"
					class="nav-link"
					:class="{'active':activeTab === item.tag}"
					data-toggle="pill"
					v-bind:href="'#' + item.title + index"
					role="tab"
				>
					{{ item.title }}
				</a>
			</div>

			<div class="tab-content">
				<HeaderMenuDesktopItemTabPanel
					v-for="(item,name) in postList"
					v-bind:key="name"
					:postList="item"
					:tabID="name"
					:activeTab="activeTab"
				/>
			</div>
		</div>
	</li>
</template>

<script>
	import HeaderMenuDesktopItemTabPanel from "./HeaderMenuDesktopItemTabPanel.vue";

	export default {
		name: "HeaderMenuDesktopItem",
		props: {
			title: String,
			href: String,
			menuItem: Object,
		},
		computed: {
			postList: function () {
				console.log('postList: ', this.menuItem);
				const dict = {};
        dict['*'] = [];
				this.menuItem.items.forEach((item) => {
					if (item && item.category) {
						if (!dict.hasOwnProperty(item.category)) {
							dict[item.category] = [];
						}
						dict[item.category].push(item);
					}
          dict['*'].push(item);
				});
        console.log('dict: ', dict);
				return dict
			},
		},
		data: function () {
			return {
				activeTab: '*',
			}
		},
		methods: {
			tabHover: function (event) {
				console.log(event);
				console.log(this);
				this.activeTab = event.tag;
			}
		},
		components: {
			HeaderMenuDesktopItemTabPanel
		}
	};
</script>

<style scoped></style>
