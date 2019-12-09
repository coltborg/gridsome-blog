<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
  >
    <component
      :is="icon"
      class="social"
    />
    <span class="sr-only">{{ label }}</span>
  </a>
</template>

<script>
export default {
  name: 'SocialIcon',
  props: {
    icon: {
      type: Object,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
.social {
  --size: 26px;

  height: var(--size);
  width: var(--size);
}
</style>