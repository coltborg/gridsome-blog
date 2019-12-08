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
      >
        <IconTwitter class="social" />
        <span class="sr-only">Twitter</span>
      </a>
      <a
        href="//github.com/coltborg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconGithub class="social" />
        <span class="sr-only">Github</span>
      </a>
      <a
        href="https://dev.to/coltborg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconDev class="social" />
        <span class="sr-only">Dev</span>
      </a>
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
import IconDev from '@/components/IconDev';
import IconGithub from '@/components/IconGithub';
import IconTwitter from '@/components/IconTwitter';

export default {
  name: 'Author',
  components: {
    IconDev,
    IconGithub,
    IconTwitter,
  },
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
    --size: 100px;

		height: var(--size);
		width: var(--size);
    border-radius: 100%;
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
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: var(--body-color);

      &:hover {
        color: var(--link-color);
      }
    }

		a + a {
			margin-left: 1em;
    }
	}
}

.social {
  --size: 26px;

  height: var(--size);
  width: var(--size);
}
</style>
