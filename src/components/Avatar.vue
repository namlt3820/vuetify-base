<template>
    <v-avatar class="my-avatar" color="accent" size="120">
        <div class="wrap">
            <img alt="avatar" src="https://vuetifyjs.com/apple-touch-icon-180x180.png" v-if="img" />
            <span v-else>VJ</span>
            <span class="edit-avatar">Edit</span>
        </div>
        <v-file-input label="File input" prepend-icon></v-file-input>
    </v-avatar>
</template>
<script>
export default {
    name: 'Avatar',
    data() {
        return { img: true };
    }
};
</script>
<style>
.my-avatar {
    overflow: hidden;
}
.my-avatar .wrap {
    max-width: 100%;
    max-height: 100%;
}
.my-avatar .wrap img {
    max-width: 100%;
}
.my-avatar .v-input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    z-index: 50;
}
.my-avatar .v-input .v-input__slot {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    z-index: 10;
    opacity: 0;
    top: 0;
    left: 0;
    cursor: pointer;
}
.my-avatar .edit-avatar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-style: italic;
    font-size: 11px;
    z-index: 9;
    opacity: 0;
}
.my-avatar:hover .edit-avatar {
    opacity: 1;
}
</style>
