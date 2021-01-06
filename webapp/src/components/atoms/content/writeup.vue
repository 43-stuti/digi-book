<template>
    <b-container id="parent" fluid>
        <div id="background">
            <b-container class="text-white px-4 py-4">
                <div>
                    <h3>{{content.title}}</h3>
                </div>
                <div class="mt-4">
                    <h6>{{content.description}}</h6>
                </div>
            </b-container>
        </div>
    </b-container>
</template>
<script>
export default {
    name:'writeup',
    props:['content']
}
</script>
<style scoped>
#parent {
    height: 650px;
}
#background {
    background-color: rgb(180, 85, 56);
    border-radius: 15px;
    height: 100%;
    width: 100%;
}
</style>