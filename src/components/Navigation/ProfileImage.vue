<template>
  <img :src="imageLink" class="w-8 h-8 object-contain rounded-3xl" />
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink: 'https://avatars.githubusercontent.com/u/32354353?v=4',
    };
  },
};
</script>
