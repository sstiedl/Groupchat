<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="messages">
      <div v-for="doc in formattedDocuments" :key="doc.id">
        <div
          :class="doc.name == user.displayName ? 'current-single' : 'single'"
        >
          <span class="created-at">{{ doc.createdAt }}</span>
          <span class="name">{{ doc.name }}</span
          ><br />
          <span class="message">{{ doc.message }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composable/getCollection";
import getUser from "../composable/getUser";
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated, ref } from "@vue/runtime-core";
export default {
  setup() {
    const { error, documents } = getCollection("message");
    const { user } = getUser();

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    });

    // auto-scroll

    const messages = ref(null);

    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;
    });

    return { error, documents, formattedDocuments, messages, user };
  },
};
</script>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 1vh 0;
  padding: 1vw 0vw 1vw 2vw;
  color: white;
  background-color: grey;
  border: 0;
  width: 80%;
  border-radius: 20px;

}
.current-single {
    float: right;
    margin-top: 1vh;
  padding: 1vw 2vw 1vw 0;
  color: white;
  text-align: end;
  background-color: teal;
    width: 80%;
  border: 0;
  border-radius: 20px;
  
}
.created-at {
  display: block;
  color: white;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
}
.messages {
  max-height: 400px;
  overflow: auto;
  font-size: 0.8rem;
}
</style>