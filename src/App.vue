<template>
    <div class="flex flex-col min-h-screen">
        <header class="flex items-center border-b border-gray-600">
            <router-link to="/profile" class="text-2xl p-4 mr-3 text-green-500">
                <i class="fas fa-user"></i>
            </router-link>
            <h1 class="text-white font-black text-xl">{{ $route.name }}</h1>
        </header>
        <main class="flex-1">
            <router-view />

        </main>
        <footer class="grid grid-cols-4 border-t border-gray-600">
            <router-link v-for="(route, index) in routes" :key="index" :to="route.path"
                class="p-4 text-center text-2xl text-gray-300">
                <i :class="route.iconClass"></i>
            </router-link>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { useRouter } from 'vue-router'
const routes = ref<any[]>([])
const router = useRouter()
onBeforeMount(() => {
    routes.value = router.options.routes.filter((r: any) => r.mainMenu)
})



</script>
