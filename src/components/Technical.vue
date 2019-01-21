<template>
  <div class="container-fluid">
    <p v-html='intro'></p>
    <div class="row">
        <div class="col-md-4">            
            <ul class="list-group list-group-flush">
                <li v-for="skill in skills1" :key="skill.name" class="list-group-item">
                    {{skill.name}} <b-progress :value="skill.proficiency" variant="success" :key="success" class="mb-2"></b-progress>
                 </li>
            </ul>
        </div>
        <div class="col-md-4">
            <ul class="list-group list-group-flush">
                <li v-for="skill in skills2" :key="skill.name" class="list-group-item">
                    {{skill.name}} <b-progress :value="skill.proficiency" variant="primary" :key="success" class="mb-2"></b-progress>
                 </li>
            </ul>
        </div>
        <div class="col-md-4">
            <ul class="list-group list-group-flush">
                <li v-for="skill in skills3" :key="skill.name" class="list-group-item">
                    {{skill.name}} <b-progress :value="skill.proficiency" variant="info" :key="success" class="mb-2"></b-progress>
                 </li>
            </ul>
        </div>
    </div> 
  </div>
</template>


<script>
export default {
  name: "Technical",
  props: [],
  components: {},
  data() {
    return {
      intro: `ServiceNow development and administration has been my job for the past couple of years, which makes it my <b>#1</b> technology. Inherently Javascript
    is also one of my most used languages, although I haven't practiced ECMA6 much yet (I <i>promise</i> I will get to it).<br/> If I wasn't working with ServiceNow I'd 
    be a web developer since I love working with JS frameworks on my spare time. VueJS is currently my favourite although I've had a lot more practice a couple of years ago
    with AngularJS and NodeJS (the latter is still fresh since I built an HTML parser as a side project recently).`,
      skills1: [
        {
          name: "ServiceNow",
          proficiency: 100
        },
        {
          name: "Javascript",
          proficiency: 100
        },
        {
          name: "HTML",
          proficiency: 80
        },
        {
          name: "VueJS",
          proficiency: 50
        },
        {
          name: "NodeJS",
          proficiency: 50
        },
        {
          name: "Angular",
          proficiency: 40
        },
        {
          name: "JQuery",
          proficiency: 20
        },
        {
          name: "C#",
          proficiency: 10
        },
        {
          name: "PHP",
          proficiency: 10
        }
      ],
      skills2: [
        {
          name: "PostreSQL",
          proficiency: 40
        },
        {
          name: "MongoDB",
          proficiency: 40
        },
        {
          name: "Java",
          proficiency: 35
        },
        {
          name: "C++",
          proficiency: 20
        },
        {
          name: "C",
          proficiency: 20
        },
        {
          name: "Assembly",
          proficiency: 20
        },
        {
          name: "SQL Transact",
          proficiency: 20
        },
        {
          name: "PL SQL",
          proficiency: 20
        },
        {
          name: "OpenGL",
          proficiency: 10
        }
      ],
      skills3: [
        {
          name: "ServiceNow Administration",
          proficiency: 100
        },
        {
          name: "Systems Administration",
          proficiency: 60
        },
        {
          name: "Windows",
          proficiency: 50
        },
        {
          name: "Linux",
          proficiency: 30
        },
        {
          name: "Network Administration",
          proficiency: 30
        }
      ]
    };
  }
};
</script>

