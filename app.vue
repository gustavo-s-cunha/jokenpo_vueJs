
<template>
  <div
    id="app"
    :style="backgroundGradient"
    @mousemove="redefinePositions"
    @mouseleave="resetPositions"
  >
    <header id="header_menu">
      <div class="wrapper">
        <nav id="nav_header" class="flex justify-between ">
          <div class="d-flex justify-start">
            <NuxtLink to="/">
              Inicio
            </NuxtLink>
            <NuxtLink to="/play">
              Jogar
            </NuxtLink>
            <NuxtLink to="/rules">
              Regras
            </NuxtLink>
          </div>
          <div class="w-[70vw] flex justify-end">
            <NuxtLink to="/about" class="button button-secondary">
              Sobre
            </NuxtLink>
          </div>
        </nav>
      </div>
    </header>

    <Header />

    <div class="view">
      <NuxtPage />
    </div>
  </div>
</template>

<script>
	import Header from '@/components/Header/Header.vue';

	export default {
		name: 'App',
		components: {
			Header,
		},
		data() {
			return {
				gradientX: '50%',
				gradientY: '0%',
        bgColorFrom: '#2a45c2',
        bgColorTo: '#1a1e66',
			};
		},
		computed: {
			backgroundGradient() {
				return {
          background: `radial-gradient(circle at ${this.gradientX} ${this.gradientY}, ${this.bgColorFrom}, ${this.bgColorTo})`,
				};
			},
		},
		methods: {
			redefinePositions({ clientX, clientY }) {
				this.gradientX = `${clientX}px`;
				this.gradientY = `${clientY}px`;
			},
			resetPositions() {
				this.gradientX = '50%';
				this.gradientY = '0%';
			},
		},
	};
</script>
