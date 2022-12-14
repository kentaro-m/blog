---
name: 'write-new-post'
root: '_posts'
output: '.'
questions:
  title: 'Please enter a post title (e.g. "Hello, world")'
  slug: 'Please enter a post slug (e.g. "hello-world")'
---

# Variables

- title: `{{ inputs.title }}`
- slug: `{{ inputs.slug | kebab }}`

# `{{ slug }}/index.md`

```markdown
---
title: '{{ title }}'
date: '{{ date }}'
---
```