<template>
  <button
    aria-label="Toggle dark/light"
    class="toggle-theme"
    role="button"
    @click.prevent="toggleTheme"
  >
    <svg
      v-if="darkTheme"
      class="feather feather-sun"
      aria-label="sun"
      fill="none"
      height="24"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      stroke="currentColor"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    ><circle
      cx="12"
      cy="12"
      r="5"
    /><line
      x1="12"
      x2="12"
      y1="1"
      y2="3"
    /><line
      x1="12"
      x2="12"
      y1="21"
      y2="23"
    /><line
      x1="4.22"
      y1="4.22"
      x2="5.64"
      y2="5.64"
    /><line
      x1="18.36"
      x2="19.78"
      y1="18.36"
      y2="19.78"
    /><line
      x1="1"
      x2="3"
      y1="12"
      y2="12"
    /><line
      x1="21"
      x2="23"
      y1="12"
      y2="12"
    /><line
      x1="4.22"
      x2="5.64"
      y1="19.78"
      y2="18.36"
    /><line
      x1="18.36"
      x2="19.78"
      y1="5.64"
      y2="4.22"
    />
    </svg>
    <svg
      v-else
      class="feather feather-moon"
      aria-label="moon"
      fill="none"
      height="24"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      stroke="currentColor"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
    <span
      v-if="darkTheme"
      class="sr-only"
    >Swith to light theme</span>
    <span
      v-else
      class="sr-only"
    >Swith to dark theme</span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      darkTheme: false
    }
  },
  mounted() {
    if (window.__theme == 'dark') this.darkTheme = true
  },
  methods: {
    toggleTheme() {
      this.darkTheme = !this.darkTheme

      // This is using a script that is added in index.html
      window.__setPreferredTheme(
        this.darkTheme ? 'dark' : 'light'
      )
    }
  }
}
</script>

<style lang="scss">
.toggle-theme {
  background-color: transparent;
  border: 0;
  color: var(--body-color);
  cursor: pointer;

  &:hover {
    opacity: .8
  }
  &:focus {
    outline: none;
  }
}
</style>