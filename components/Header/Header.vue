<template>
	<header class="header">
		<div class="header--box">
			<h2 class="title">
				<span>ROCK</span>
				<span>PAPER</span>
				<span>SCISSORS</span>
				<span>LIZARD</span>
				<span>SPOCK</span>
			</h2>
			<Score />
		</div>
	</header>
</template>

<script>
	import Score from './Score.vue';

	export default {
		name: 'Header',
		components: {
			Score,
		},
	};
</script>

<style lang="scss" scoped>

    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 800px;
        @include rfs.padding(30px);
        @media (min-width: 800px) {
            margin: 0 auto;
        }

        &--box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            border: 3px solid $header-outline;
            border-radius: 20px;
            @include rfs.padding(20px 30px);
            .title {
                display: flex;
                flex-direction: column;
                line-height: 0.8;
                @include rfs.font-size(2rem);
                span {
                    @include rfs.padding(6px);
                }
            }
        }
    }
</style>
