<template>
	<div>
		<a :href="href" class="wrap-pic-w hov1 trans-03">
			<img :src="preview" alt="IMG"/>
		</a>

		<div class="p-t-10">
			<h5 class="p-b-5">
				<a :href="href" class="f1-s-5 cl3 hov-cl10 trans-03">
					{{title}}
				</a>
			</h5>

			<span class="cl8">
        <a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
          {{category}}
        </a>

        <span class="f1-s-3 m-rl-3">
          -
        </span>

        <span class="f1-s-3">
          {{publishDate}}
        </span>
      </span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "PostCard",
		props: {
			category: String,
			title: String,
			href: String,
			preview: String,
			publishDate: String,
		}
	}
</script>

<style scoped>

</style>
