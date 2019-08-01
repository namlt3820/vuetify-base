<template>
    <div>
        <img :src="facebookIcon" alt class="img-social" onclick="dialogFBLogin()" />
    </div>
</template>
<script>
export default {
    props: ['fbIcon'],
    data() {
        return {
            defaultFbIcon:
                'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNjdweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY3IDY3OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjcgNjciIHdpZHRoPSI2N3B4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNMjkuNzY1LDUwLjMyaDYuNzQ0VjMzLjk5OGg0LjQ5OWwwLjU5Ni01LjYyNGgtNS4wOTUgIGwwLjAwNy0yLjgxNmMwLTEuNDY2LDAuMTQtMi4yNTMsMi4yNDQtMi4yNTNoMi44MTJWMTcuNjhoLTQuNWMtNS40MDUsMC03LjMwNywyLjcyOS03LjMwNyw3LjMxN3YzLjM3N2gtMy4zNjl2NS42MjVoMy4zNjlWNTAuMzJ6ICAgTTM0LDY0QzE3LjQzMiw2NCw0LDUwLjU2OCw0LDM0QzQsMTcuNDMxLDE3LjQzMiw0LDM0LDRzMzAsMTMuNDMxLDMwLDMwQzY0LDUwLjU2OCw1MC41NjgsNjQsMzQsNjR6IiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojM0E1ODlCOyIvPjwvc3ZnPg=='
        };
    },
    computed: {
        facebookIcon() {
            return this.defaultFbIcon;
        }
    },
    mounted() {
        const vm = this;
        window.dialogFBLogin = () => {
            window.FB.login(
                response => {
                    if (response.status === 'connected') {
                        window.FB.api('/me', { fields: 'name,last_name,first_name,email' }, res => {
                            vm.$emit('fbAuthenticated', res);
                        });
                    }
                },
                { scope: 'email' }
            );
        };
    }
};
</script>
