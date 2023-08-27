<x-layout.master>
    <div id="app">
            <router-view v-slot="{ Component, route }">
                <component :is="Component"> </component>
            </router-view>
    </div>
</x-layout.master>