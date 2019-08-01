<template>
    <div>
        <img :src="googleIcon" alt class="img-social" onclick="handleSignInClick()" />
    </div>
</template>
<script>
export default {
    props: ['ggIcon'],
    data() {
        return {
            defaultGgIcon:
                'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNjdweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY3IDY3OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjcgNjciIHdpZHRoPSI2N3B4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNMzIuOTYzLDM1LjAwMmMxLjYwOS0xLjYwOCwxLjczNC0zLjg0NSwxLjczNC01LjEwMiAgYzAtNS4wNTEtMi45OS0xMi44NzUtOC43OTYtMTIuODc1Yy0xLjgxLDAtMy43NywwLjkxLTQuOSwyLjMxYy0xLjE4MSwxLjQ2OC0xLjUzMywzLjM1My0xLjUzMyw1LjE2MiAgYzAsNC43LDIuNzE0LDEyLjQ2NSw4Ljc0NiwxMi40NjVDMjkuOTQ4LDM2Ljk2MiwzMS44MzMsMzYuMTA3LDMyLjk2MywzNS4wMDJ6IE00LDM0YzAsNy40MDUsMi42ODMsMTQuMTg0LDcuMTI5LDE5LjQxNSAgYzAuODM5LTEuNDEsMi4xNC0yLjc5Nyw0LjA2Ni0zLjkzN2M0LjM0OC0yLjY2NCwxMC4yMDQtMy4wMTcsMTMuMzctMy4yMThjLTAuOTgtMS4yNTctMi4xMTEtMi41ODktMi4xMTEtNC43NzQgIGMwLTEuMTgyLDAuMzUyLTEuODg1LDAuNzA0LTIuNzE1Yy0wLjc3OSwwLjA3Ni0xLjUzMywwLjE1MS0yLjIzNywwLjE1MWMtNy40MTQsMC0xMS42MTEtNS41MjktMTEuNjExLTEwLjk4MyAgYzAtMy4yMTcsMS40ODMtNi43OTEsNC40NzMtOS4zNzdjMy45OTYtMy4yODQsOC43NDYtMy44NDUsMTIuNTE2LTMuODQ1SDQ0LjdsLTQuNDc0LDIuNTE2aC00LjMyMiAgYzEuNjA3LDEuMzI5LDQuOTUxLDQuMTI3LDQuOTUxLDkuNDQ5YzAsNS4xNzgtMi45NDEsNy42MTUtNS44NTYsOS45MjZjLTAuOTMsMC45MDYtMS45NiwxLjg4Ni0xLjk2LDMuNDE4ICBjMCwxLjUzMywxLjAzLDIuMzg5LDEuODEsMy4wMTdsMi41MTMsMS45NmMzLjA5MiwyLjU2NCw1Ljg4MSw0Ljk1MSw1Ljg4MSw5Ljc3N2MwLDMuMTgyLTEuNDg0LDYuMzc2LTQuMzc5LDguODI2ICBjLTEuNTU3LDAuMjU1LTMuMTUzLDAuMzg4LTQuNzgxLDAuMzkzYzIuOTM4LTEuMjg5LDQuNDYxLTMuNjQ2LDQuNDYxLTYuNDhjMC0zLjU2OC0yLjI4Ny01LjQ1My03LjYxNS05LjI0OCAgYy0wLjU1My0wLjA1MS0wLjkwNS0wLjA1MS0xLjYwOC0wLjA1MWMtMC42MjgsMC00LjM5OCwwLjEyNy03LjMzOCwxLjEwNmMtMS41MzMsMC41NTMtNi4wMDYsMi4yMzctNi4wMDYsNy4yMTMgIGMwLDAuNTQxLDAuMDU4LDEuMDY1LDAuMTcsMS41NjlDOC43NzUsNTIuNjQ1LDQsNDMuODgsNCwzNHogTTYxLjczLDIyLjUzMkw2MS43MywyMi41MzJjMC40NCwxLjA2MywwLjgyMSwyLjE1OSwxLjEzOSwzLjI4MSAgQzYyLjU1MiwyNC42OTEsNjIuMTcxLDIzLjU5Niw2MS43MywyMi41MzJMNjEuNzMsMjIuNTMyTDYxLjczLDIyLjUzMkw2MS43MywyMi41MzJ6IE0zNCw2NEMxNy40MzIsNjQsNCw1MC41NjgsNCwzNCAgQzQsMTcuNDMxLDE3LjQzMiw0LDM0LDRjMTIuNTA3LDAsMjMuMjI3LDcuNjUzLDI3LjczLDE4LjUzMmwwLDBoLTUuOTY2di03LjgxNGgtMy4zNDl2Ny44MTRoLTcuODE0djMuMjgxaDcuODE0djcuODgyaDMuMzQ5di03Ljg4MiAgaDcuMTA0QzYzLjYwNSwyOC40MTUsNjQsMzEuMTYyLDY0LDM0QzY0LDUwLjU2OCw1MC41NjgsNjQsMzQsNjR6IiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRDY0OTJGOyIvPjwvc3ZnPg=='
        };
    },
    computed: {
        googleIcon() {
            return this.defaultGgIcon;
        }
    },
    mounted() {
        const vm = this;
        window.handleSignInClick = () => {
            // Ideally the button should only show up after gapi.client.init finishes, so that this
            // handler won't be called before OAuth is initialized.
            window.gapi.auth2
                .getAuthInstance()
                .signIn()
                .then(res => {
                    if (res) {
                        vm.$emit('ggAuthenticated', {
                            id: res.w3.Eea,
                            email: res.w3.U3,
                            name: res.w3.ig
                        });
                    }
                });
        };
    }
};
</script>
