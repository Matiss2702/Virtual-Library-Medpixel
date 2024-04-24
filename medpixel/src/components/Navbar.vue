<template>
    <header>
        <nav>
            <ul class="logo">
                <li><a href="/">Logo</a></li>
            </ul>
            <ul class="navigation">
                <li><a href="/cardiologie">Cardiologie</a></li>
                <li><a href="/neurologie">Neurologie</a></li>
                <li><a href="/oncologie">Oncologie</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
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

    nav li a:hover,
    nav li a:focus{
        text-decoration: underline;
        text-decoration-color: var(--secondary-clr);
        text-underline-offset: 3px;
        text-decoration-thickness: 2px;
    }
</style>