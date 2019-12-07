<template>
  <div class="author">
    <g-image
      alt="Author image"
      class="author__image"
      src="~/assets/images/author.png"
      width="180"
      height="180"
      blur="5"
    />

    <h1
      v-if="showTitle"
      class="author__site-title"
    >
      {{ $static.metadata.siteName }}
    </h1>

    <p class="author__intro">
      {{ $static.metadata.siteDescription }}
    </p>

    <p class="author__links">
      <a
        href="//twitter.com/coltborg"
        target="_blank"
        rel="noopener noreferrer"
      >Follow on Twitter</a>
      <a
        href="//github.com/coltborg"
        target="_blank"
        rel="noopener noreferrer"
      >GitHub</a>
    </p>
  </div>
</template>

<static-query>
  query {
    metadata {
      siteDescription
      siteName
    }
  }
</static-query>

<script>
export default {
	props: {
		showTitle: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

<style lang="scss">
.author {
	margin: 0 auto;
	max-width: 500px;
	padding: calc(var(--space) / 2) 0;
	text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;

	&__image {
		border-radius: 100%;
		width: 90px;
		height: 90px;
		margin-bottom: 1em;
	}

	&__intro {
		opacity: .8;
	}

	&__site-title {
		font-size: 1.5em;
	}

	&__links {
		margin-top: -.5em;
		a {
			margin: 0 .5em;
		}
	}
}
</style>
