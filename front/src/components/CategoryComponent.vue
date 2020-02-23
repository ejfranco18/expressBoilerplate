<template>
  <div id="categoryComponent">
    <h3>
    <router-link :to='{ name: "category_path", params: { id: category.id } }'>{{ category.name }}</router-link>
    </h3>
  </div>
</template>

<script>
  export default {
    name: 'categoryComponent',
    props: {
      category: {
        required: true,
        type: Object
      }
    }
  }
</script>
