
<template>
    <div>
        <x-navigations>
            <template v-slot:contents>
                Process
            </template>
        </x-navigations>
    </div>
</template>

<script>
    import Navigations from '../components/navigations.vue'

    export default {
        name: 'ProcessView',
        components: {
            'x-navigations': Navigations
        },
        data() {
            return {
            };
        },
        methods: {
        }
    }
</script>
