<template>
    <a @click.prevent="onEmmit(card.id) ">
        <div class="item-wrapper d-flex flex-column">
            <img :src="require(`@/assets/img/${card.image}`)" class="mb-3" :alt="card.image">
            <h3>{{ card.title }}</h3>
            <div class="description">
                {{ card.description}}
            </div>
        </div>
    </a>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            required: true
        }
    },
    methods: {
        onEmmit(id) {
            this.$emit('onNavigate', id);
        }
    }
}
</script>