<script setup>
  import { ref, onMounted, reactive } from 'vue'
  let loaded = ref(false);
    
    const form = ref();
    const state = reactive({
        email: '',
        name: '',
        partnerName: '',
        childrenName: '',
        attending: '',
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

  console.log(data);
  fetch(action, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({"form-name": "rsvp", ...state}).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};

</script>

<template>
  <Transition>
    <div>
        <nav>
            <router-link to="/">Go to Home</router-link>
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
                        <label>Your Partner's Name <input type="text" name="partner" required v-model="state.partnerName" /></label>
                    </div>
                    <div>
                        <label>Children's Name(s)<input type="text" name="child" v-model="state.childrenName" /></label>
                    </div>

                    <div>
                        <label>Are you able to attend?*</label><br/>
                        <label>Yes <input type="radio" name="attending" value="Yes" v-model="state.attending"/></label><br/>
                        <label>No <input type="radio" name="attending" value="No" v-model="state.attending"/></label>
                    </div>

                    <div>
                        <h2>Food Choices</h2>
                        <p>Please choose your choice of sandwich or soup. Accompanying snacks and salad will be available.</p>
                        <p>Dessert will be a choice of wedding cake flavours.</p>

                        <label>
                            Your Choice
                            <select name="sandwich" required v-model="state.sandwich">
                                <option value="beef">Strips of Beef,Fried Onions and Cheese served in a toasted Baguette</option>
                                <option value="halloumi">Grilled Halloumi and roasted Red Pepper thick cut toasted sandwich</option>
                                <option value="club">Club sandwich</option>
                                <option value="soup">Spiced Apple and Parsnip soup with crusty Bread Roll</option>
                            </select>
                        </label>
                        <label v-if="state.partnerName !== ''">
                            Partner's Choice
                            <select name="partners-sandwich" v-model="state.partnersSandwich">
                                <option value="beef">Strips of Beef,Fried Onions and Cheese served in a toasted Baguette</option>
                                <option value="halloumi">Grilled Halloumi and roasted Red Pepper thick cut toasted sandwich</option>
                                <option value="club">Club sandwich</option>
                                <option value="soup">Spiced Apple and Parsnip soup with crusty Bread Roll</option>
                            </select>
                        </label>
                        <label v-if="state.childrenName !== ''">
                            Kid's Choice (Ham or Cheese Sandwich). Comes with crisps, fruit bag and drink
                            <textarea name="kids-sandwich" v-model="state.kidsSandwich"></textarea>
                        </label>
                        <label>Any dietary requirements?<textarea type="text" name="dietary" v-model="state.dietary"></textarea></label>
                        <input type="submit" value="Submit"/>
                    </div>
                </div>
            </form>
        </div>
    </div>
  </Transition>

</template>

<style scoped>
nav {
    margin: 0 0 50px;
}
label {
    margin: 0 0 30px;
    display: block;
}
    form p,
    label {
        font-family: Arial, Helvetica, sans-serif;
        
    }
    
    select, input[type=text], input[type=email], textarea {
        display: block;
        margin: 0 auto;
        background-color: white;
        color: black;
        padding: 10px;
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
