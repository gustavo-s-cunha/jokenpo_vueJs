<template>
	<button class="back" @click="$router.back()">
		BACK
	</button>
</template>

<script>
	export default {
		name: 'BackButton',
	};
</script>

<style lang="scss" scoped>
  @use "sass:color";

  .back {
    @include rfs.font-size(1.5rem);
    text-align: center;
    text-decoration: none;
    border: 3px solid $header-outline;
    border-radius: 10px;
    @include rfs.padding(5px 10px);
    font-weight: 500;
    @include rfs.margin-top(50px);
    transition: background .3s linear;
    box-shadow: 0 4px color.adjust($background-to, $lightness: 15%);

    &:visited {
      color: $white
    }

    &:hover,
    &:focus {
      outline: none;
      background: $header-outline;
    }
  }
</style>
