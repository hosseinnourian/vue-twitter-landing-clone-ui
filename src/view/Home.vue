<template>
  <div class="home">
    <Tweet v-for="tweet in tweets" :key="tweet._id" :tweet="tweet" />
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import vweets from '../vweets'
import Tweet from '@/components/tweet.vue';


const tweets = ref(vweets)


</script>