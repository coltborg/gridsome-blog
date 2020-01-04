---
canonical_url: true
cover_image: ./images/css-not-class.png
date: 2019-12-19
description: "How you do style elements that do not have classes on them? :not() comes to the rescue."
published: true
tags: ['CSS']
title: Target elements without classes
---

## Why did I need to target classless elements?

In making this blog site, I want to style content that comes from markdown files. I found a nice trick to apply styles to the elements that don’t have any classes one them—aka coming from the markdown content.

I can do this by combining the `not()` and `attribute` selectors. For example, if I want to target any paragraph without a class, it would look like this:

```css
p:not([class]) {
  margin: 1rem 0;
}
```


### Why :not()

`:not()` is a [negation pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:not). So whatever you put in it, it will look for things that are not that thing.

### Your best friend Attribute Selectors

[Attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) are really powerful. They can check for a whole bunch of different things. But in this case, we can use them to detect if `class` is placed on the element. In this case we don't care which or how many classes are used.
