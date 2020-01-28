<template>
  <Layout :show-logo="false">
    <div class="content-box">
      <h1>What I’m doing now</h1>
      <p>
        This is my <a
          href="https://nownownow.com/about"
          rel="noopener noreferrer"
          target="_blank"
        >now page</a>, inspired by <a
          href="https://sivers.org/now"
          rel="noopener noreferrer"
          target="_blank"
        >Derek Sievers</a>.
      </p>
      <p>Currently in my fourth year of living in Chicago, US. Spending my time on:</p>
      <ul>
        <li>
          Looking for my next opportunity as a senior frontend developer.
        </li>
        <li>
          Learning Japanese using <a
            href="https://www.duolingo.com/"
            rel="noopener noreferrer"
            target="_blank"
          >Duolingo</a>, <a
            href="https://www.wanikani.com/"
            rel="noopener noreferrer"
            target="_blank"
          >Wani Kani</a>, and JLPT workbooks.
        </li>
        <li>Creating a routine of writing regularly on <a href="/">this blog</a>.</li>
      </ul>
      <p>Updated on December 31st, 2019.</p>
    </div>
  </Layout>
</template>

<script>
export default {
  name: 'Now',
  metaInfo: {
    title: 'Now - Colt Borg',
    titleTemplate: '%s',
  }
}
</script>
