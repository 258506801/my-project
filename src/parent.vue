<template>
    <div id="events-example">
        <p>Messages: {{ messages | json }}</p>
        <child></child>
    </div>
</template>

<script src="./parent.js"></script>
