<template>
    <section class="container">
        <div>
            <h2>
                Write to Firestore.
            </h2>
            <div>
                <button @click.native="writeUserData">
                    <span>Write now</span>
                </button>
            </div>
        </div>
    </section>
</template>
<script>
import { db } from "../firebaseConfig.js"
import axios from 'axios'
import { getDatabase, ref, set } from "firebase/database";
export default{
methods:{
writeUserData:function() {
    const reference = ref(db, "users/user2/");
    set(reference,{
        username:"Marlon"
    });
}
}
}
</script>
<style>
.container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>