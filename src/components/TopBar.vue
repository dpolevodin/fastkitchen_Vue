<template>
        <div class="page-header">
            <div id="#fadeshow1">
                <router-link :to="{name: 'home'}">
                    <img src="@/assets/logo.png">
                </router-link>
            </div>
            <ul>
                <li>
                    <router-link :to="{name: 'orders'}">
                        Orders
                    </router-link> 
                </li>
                <li>
                    <router-link :to="{name: 'contacts'}">
                        Contacts
                    </router-link> 
                </li>
                <li>
                    <router-link :to="{name: 'about'}">
                        About
                    </router-link> 
                </li>

            </ul>    
        </div>
</template>

<script>
export default {
    name: 'FcTopBar'
}
</script>

<style scoped>
img {
    display: inline-block;
    position: relative;
    bottom: 10px;
    margin-top: 20px;
    margin-left: 32px;
}
ul {
    position: absolute;
    top: 25px;
    right: 50px;
    display: inline-block;
    margin: 0;
    padding: 0;
    justify-items: end;
}
li {
    display: inline-block;
    margin-right: 50px;
}
li:last-child {
    margin-right: 0;
}
.page-header {
    display: block;
    border-bottom: 1px solid #E1D8DC;
    margin: 0;
}
</style>