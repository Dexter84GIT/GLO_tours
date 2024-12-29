<template>
    <div class="wrapper mt-5">
        <div class="container">
            <div class="grid d-flex justify-content-between flex-wrap">
                <item-component v-for="card in tours" 
                :key="card.id" :image="card.image" 
                :title="card.title"
                :description="card.description" 
                :card="card" 
                @onNavigate="navigate" 
                />
            </div>
        </div>
    </div>
</template>

<script>
import ItemComponent from '@/components/ItemComponent.vue'
import tours from '@/store/tours'

import { navigate } from '@/mixins/navigate';

export default {
    components: { ItemComponent },
    computed: {
        tours() {
            return this.$store.getters['getTours'];
        }
    },
    data() {
        return {
            name: 'tour'
        }
    },
    mixins: [navigate]
}
</script>