<script setup>
  import { ref, onMounted, reactive } from 'vue'
  import {useRouter} from 'vue-router';
    
    const route = useRouter();

    let loaded = ref(false);

    const form = ref();
    const state = reactive({
        email: '',
        name: '',
        partnerName: '',
        childrenName: '',
        attending: '',
        song: '',
        sandwich: '',
        partnersSandwich: '',
        kidsSandwich: '',
        dietary: ''
    });

  onMounted(() => {
    loaded.value = true;
  });

    const encode = (data) => {
        return Object.keys(data)
        .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    };


    const handleSubmit = (data) => {
    let action = '/';
    let myForm = document.getElementById("form");

    fetch(action, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({"form-name": "rsvp", ...state}).toString(),
    })
    .then(() => {
        console.log('submitted');
        console.log(state);

        if (state.attending == 'Yes') {
            route.push({path: '/thanks'})
        } else if (state.attending == 'No') {
            route.push({path: '/sorry'})
        }
    })
    .catch((e) => {
        console.log(e);
        console.log(state);
        route.push({path: '/error'})
    });
    };

</script>

<template>

    <div>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/info">Info</router-link>
        </nav>
        <div v-if="loaded" class="container">
            <h1>RSVP</h1>

            <form name="rsvp" id="form" method="post" netlify @submit.prevent="handleSubmit">
                <div>
                    <div>
                        <label>Email* <input type="email" name="email" ref="email" required v-model="state.email"/></label>
                    </div>
                    
                    <div>
                        <label>Your Name* <input type="text" name="name" ref="name" required v-model="state.name"/></label>
                    </div>
                    <div>
                        <label>Your Partner's Name <input type="text" name="partner" v-model="state.partnerName" /></label>
                    </div>
                    <div>
                        <label>Children's Name(s)<input type="text" name="child" v-model="state.childrenName" /></label>
                    </div>

                    <div>
                        <label>Are you able to attend?*</label>
                        <div class="radio-container">
                            <div><input type="radio" id="yes" name="attending" value="Yes" v-model="state.attending"/><label for="yes">😃 Yes</label></div>
                            <div><input type="radio" id="no" name="attending" value="No" v-model="state.attending"/><label for="no">😟 No</label></div>
                        </div>
                    </div>
                    <div>
                        <h2>Music</h2>
                        <label>
                            Add the title and artist name of your favourite love song and we'll add it to our reception playlist!
                            <input type="text" name="song" ref="song" required v-model="state.song"/>
                        </label>
                        
                    </div>
                    <div>
                        <h2>Food Choices</h2>
                        <p>Please choose your choice of sandwich or soup. Accompanying snacks and salad will be available.</p>
                        <p>Dessert will be a choice of wedding cake flavours.</p>

                        <label>
                            Your Choice
                            <select name="sandwich" :required="state.attending !== 'no'" v-model="state.sandwich">
                                <option value="beef">Strips of Beef,Fried Onions and Cheese served in a toasted Baguette</option>
                                <option value="halloumi">Grilled Halloumi and roasted Red Pepper thick cut toasted sandwich</option>
                                <option value="club">Club sandwich</option>
                                <option value="soup">Spiced Apple and Parsnip soup with crusty Bread Roll</option>
                            </select>
                        </label>
                        <label v-if="state.partnerName !== ''">
                            Partner's Choice
                            <select name="partners-sandwich" :required="state.partnerName !== '' ? true : false" v-model="state.partnersSandwich">
                                <option value="beef">Strips of Beef, Fried Onions and Cheese served in a toasted Baguette</option>
                                <option value="halloumi">Grilled Halloumi and roasted Red Pepper thick cut toasted sandwich</option>
                                <option value="club">Club sandwich</option>
                                <option value="soup">Spiced Apple and Parsnip soup with crusty Bread Roll</option>
                            </select>
                        </label>
                        <label v-if="state.childrenName !== ''">
                            Kid's Choice (Ham or Cheese Sandwich). Comes with crisps, fruit bag and drink
                            <textarea name="kids-sandwich" v-model="state.kidsSandwich" :required="state.childrenName !== '' ? true : false"></textarea>
                        </label>
                        <label>Any dietary requirements?<textarea type="text" name="dietary" v-model="state.dietary"></textarea></label>

                        <div class="no-camera">
                            <img src="../assets/nocamera.png"/>
                            <div>
                                <p class="decorative">We encourage photos before and after the ceremony, but not during. We want to share this moment with you!</p>
                                <p class="decorative">We also ask that you do not share anything on social media until we have made our own announcement. Thank you!</p>
                            </div>
                        </div>

                        <input type="submit" value="Submit"/>
                    </div>
                </div>
            </form>
        </div>
    </div>
 
</template>

<style scoped>
.container {
    width: 600px;
    margin: 0 auto;
}
    @media screen and (max-width: 767px) {
        .container {
            width: 300px;
        }
    }
    .no-camera {
        display: flex;
        flex-direction: column;
        background: antiquewhite;
        border: 2px dashed #cb6e2b;
        border-radius: 20px;
        padding: 20px;
        margin: 0 auto;
        align-items: center;
    }

    .no-camera img {
        flex: 0 1 60px;
        width: 60px;
        height: 60px;
        margin: 0 auto;
    }

    @media screen and (min-width: 768px) {

        .no-camera img {
            flex: 0 1 60px;
            width: 60px;
            height: 60px;
            margin: 0;
        }
        
    }

    nav {
        margin: 0 0 50px;
    }
    label {
        margin: 0 0 30px;
        display: block;
        font-weight: bold;
    }
    .radio-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .radio-container label {
        cursor: pointer;
        padding: 15px;
        background-color: #faebd7 ;
        border-radius: 10px;
        transition: 0.25s ease;
    }
    .radio-container label:hover {
        background-color: #d6be9e;
    }
    .radio-container input:checked + label {
        background-color: #ab1700;
        color: white;
    }

    input[type="radio"] {
        display: none;
    }

    input[type="submit"] {
        padding: 15px;
        background-color: #541f1a ;
        border-radius: 10px;
        transition: 0.25s ease;
        border: none;
        color: #fff;
        font-weight: bold;
        font-size: 1rem;
        width: 100%;
        max-width: 600px;
        margin-top: 30px;
        cursor: pointer;
    }
    input[type="submit"]:hover {
        opacity: 0.8;
    }
    input[type="submit"]:active {
        background-color: #d6be9e;
        background-color: #ab1700;
        color: white;
    }

    select, input[type=text], input[type=email] {
        display: block;
        margin: 10px auto 0;
        background-color: white;
        border: none;
        border-bottom: 2px dashed black;
        color: black;
        padding: 10px 0;
        width: 100%;
        max-width: 600px;

        caret-color: #ab1700;
        font-size: 1rem;
    }

    textarea {
        margin: 10px auto 0;
        border: 2px dashed black;
        color: black;
        display: block;
        background-color: white;
        width: 95%;
        height: 150px;
        max-width: 600px;
        padding: 10px;
        font-size: 1rem;

    }

    @media screen and (max-width: 767px) {
        select, input[type=text], input[type=email], textarea {
           max-width: 300px;
        }
    }

    select:focus, input[type=text]:focus, input[type=email]:focus, textarea:focus {
        outline: none;
        border-color: #ab1700;
        background-color: rgb(243, 243, 243);
    }
    .v-enter-active,
    .v-leave-active {
        transition: all 1.75s ease;
    }
    .v-enter-from,
    .v-leave-to {
        opacity: 0;
        transform: translateY(20px);
    }
</style>
