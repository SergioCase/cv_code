<template>
  <div class="container-fluid">
     <div class="row ">
        <skill v-for="skill in skills" v-bind:skill="skill" :key="skill.title"></skill>
    </div>
  </div>
</template>


<script>
import Skill from './Skill'

export default {
  name: "Skills",
  components: {
    Skill
  },
  data() {
    return {
      skills: [
          {
            title: "Development and Administration",
            content:
              "Experience developing, configuring and administering ServiceNow (JavaScript). Also with specific frameworks such as NodeJS, AngularJS and VueJS",
            main_image:
              "https://www.beyondtrust.com/wp-content/uploads/partner-servicenow.png",
            images: [
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
              "https://vuejs.org/images/logo.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
              "https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png"
            ]
          },
          {
            title: "Business Analysis",
            content:
              " Analyse the customer's wants and needs and translate that into practical requirements for development",
            main_image:
              "http://www.publicdomainpictures.net/pictures/230000/velka/business-meeting.jpg",
            images: [
            ]
          },
          {
            title: "Team focused/Leader",
            content:
              "Ability to lead but above all else assist team members in several areas",
              main_image:
              "https://cdn.lynda.com/static/landing/images/hero/Leader_1200x630-1503439018194.jpg",
            images: [
            ]
          }
        ]
    }
  }
  
};
</script>

