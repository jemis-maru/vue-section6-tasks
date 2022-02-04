const app = Vue.createApp({
    data(){
        return{};
    }
});

app.component('friends-list', {
    template:
    `
    <li>
    <h2>{{ fr.name }}</h2>
    <button @click="toggleDetails">Toggle Details</button>
    <ul v-show="detailsToggle">
      <li><strong>Phone:</strong>{{ fr.phNo }}</li>
      <li><strong>Email:</strong>{{ fr.emailAdd }}</li>
    </ul>
    </li>
    `,
    data(){
        return{
            detailsToggle: false,
            fr: {
                id: 'abc',
                name: 'Abc Def',
                phNo: '1234567890',
                emailAdd: 'example@example.com',
            },
        }
    },
    methods:{
        toggleDetails(){
            this.detailsToggle = !this.detailsToggle;
        },
    },
});

app.mount("#app");