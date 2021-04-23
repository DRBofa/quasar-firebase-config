<template>
  <div id="q-app">
    <div class="text-h4 text-center">Tesing</div>
    <q-btn
      color="white"
      text-color="black"
      label="Insert"
      @click="handleInsert"
    />
    <q-btn
      color="white"
      text-color="black"
      label="GetData"
      @click="handleGet"
    />
  </div>
</template>
<script>
import { db } from "./boot/firebase";
export default {
  name: "App",
  methods: {
    handleInsert() {
      let doc = {
        name: "Coca",
        price: 20,
        qty: 10
      };
      db.collection("items")
        .doc()
        .set(doc);
    },
    async handleGet() {
      let items = [];
      await (await db.collection("items").get()).docs.forEach(it => {
        items.push({ ...it.data(), id: it.id });
      });
      console.log("items:", items);
    }
  }
};
</script>
