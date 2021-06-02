<template>
  <div class="main">
    <div v-if="isOpen" class="chat">
      <div class="chat-top"><p class="chat-title">ChatBot Assistant</p></div>
      <div class="chat-container">
        <div id="chat-window" class="chat-window">
          <div
            v-for="(message, messageIndex) of chatList"
            :key="`message-${messageIndex}`"
            class="message"
            :class="{ sender: message.sender }"
          >
            <div v-if="message.sender" class="chat_img">
              <img
                loading="lazy"
                class="chat_icon"
                src="/chatbot.png"
                alt="chatbot icon"
              />
            </div>
            <div class="message-content" :class="{ sender: message.sender }">
              {{ message.content }}
            </div>
          </div>
        </div>
        <input
          class="chat-input"
          v-model="messageToSend"
          type="text"
          @keypress.enter="sendMessage"
        />
      </div>
    </div>
    <div class="button" @click="isOpen = !isOpen">
      <img
        loading="lazy"
        class="chat_btn"
        src="https://img.icons8.com/ios-filled/452/chat--v1.png"
        alt="chatbot icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chatList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      messageToSend: '',
      isOpen: true
    }
  },
  methods: {
    sendMessage() {
      /*this.chatList.push({
        sender: false,
        content: this.messageToSend
      })
      this.messageToSend = ''*/
      const { WebSocketEventBus } = require('mmcc/WebSocketEventBus')
      this.$store.commit('addMessage', {
        sender: false,
        content: this.messageToSend
      })
      const packet = {
        message: { type: 'data', payload: { data: this.messageToSend } },
        configurationId: process.env.configurationId
      }
      WebSocketEventBus.$emit('send', packet)
      this.messageToSend = ''
    }
  }
}
</script>

<style>
.main {
  position: fixed;
  bottom: 0;
  right: 10px;
}
.chat {
  margin: 0;
}
.button {
  margin-top: 20px;
  height: 40px;
  width: 40px;
  border: 1px solid black;
  border-radius: 100%;
  padding: 10px;
  float: right;
}
.button img {
  width: 100%;
}
.chat-container {
  border: 1px solid black;
  background: white;
  border-radius: 20px;
  border-radius: 4px;
  height: 500px;
  width: 300px;
  overflow: auto;
}
.chat-top {
  height: 10%;
  border: black;
  background: #bdbdbd;
  text-align: center;
  padding: 10px 0;
}
.chat-title {
  color: black;
  margin-block: auto;
  margin-left: auto;
  margin-right: auto;
  font: arial;
}
.chat-window {
  overflow-y: scroll;
  height: calc(100% - 34px);
}
.chat-input {
  border-radius: 20px;
  width: 90%;
  height: auto;
  resize: none;
  position: absolute;
  background-color: #bdbdbd;
  font: 20px Arial, sans-serif;
  word-break: keep-all;
}
.message {
  width: calc(100% - 8px);
  display: flex;
  justify-content: flex-end;
}
.message.sender {
  justify-content: flex-start;
}
.message-content {
  padding: 5px 10px;
  margin: 4px;
  width: auto;
  background: #f3f3f3;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  word-break: keep-all;
}
.message-content.sender {
  background: black;
  color: white;
  border: 1px solid black;
}

img.chat_icon {
  width: 40px;
  height: auto;
  border-radius: 10%;
}

@media (max-height: 700px) {
  .chat-container {
    height: 350px;
    width: 250px;
  }
}
</style>
