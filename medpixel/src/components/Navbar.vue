<template>
    <header>
        <nav>
            <ul class="logo">
                <li><a href="/">Logo</a></li>
            </ul>
            <ul class="navigation">
                <li><a :class="{ active: isLinkActive('/cardiologie') }" href="/cardiologie">Cardiologie</a></li>
                <li><a :class="{ active: isLinkActive('/neurologie') }" href="/neurologie">Neurologie</a></li>
                <li><a :class="{ active: isLinkActive('/oncologie') }" href="/oncologie">Oncologie</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        methods: {
            isLinkActive(route) {
                return this.$route.path.startsWith(route);
            }
        }
    }
</script>

<style>
    nav{
        display:flex;
        justify-content:space-between;
        align-items:center;
        height: 60px;
    }

    .logo{
        list-style-type: none;
    }

    .navigation{
        list-style-type: none;
        display:flex;
        align-items:center;
        gap:1rem;
    }
    
    nav li a{
        text-decoration: none;
        color: white;
        padding: .5rem 1rem;
    }

    nav li a.active,
    nav li a:hover,
    nav li a:focus{
        text-decoration: underline;
        text-decoration-color: var(--secondary-clr);
        text-underline-offset: 3px;
        text-decoration-thickness: 2px;
    }
</style>