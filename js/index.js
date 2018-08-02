
Vue.component('vimgheader', {
    template: '<img src="./images/pp.png" />'
})

Vue.component('vheader', {
    props: ['title'],
    template: '<h1>{{title}}</h1>'
})

Vue.component('vcontent', {
    template: '<p>Hello there, I am me! Sorry about the design <br/> of my website. I just made this out of boredom :D .  haha <br/>By the way, I\'m gonna tell you a little bit something about myself. <br/>  As you can see my name is on the top,<br/> and I\'m a Software Development Engineer.<br/>My hobbies are playing guitar , playing games and living life :D.<br/>If you want to know more about me,<br/> you must not know more about me  :D </p>',
})

var app = new Vue({
    el: '#app',
    data: {
        styleImgHeader: {
            borderRadius: '50%',
            borderStyle: 'groove',
            width: '150',
            height: '180',
            margin: '10'
        },
        styleHeader: {
            display: 'inline-block',
            margin: '20',
            backgroundColor: '#ffe066',
            padding: 5,
            borderStyle: 'solid'
        },
        styleContent: {
            marginTop: '14%',
            marginLeft: '21%',
            position: 'absolute'
        },
        profileName: 'Earvin Jay G. Bermudo',
    },
    methods: {
        onClickAboutMe: function (event) {
            this.$refs.divAboutMe.style.display = 'block';
            this.$refs.divProjects.style.display = 'none';
        },
        onClickProjects: function (event) {
            this.$refs.divAboutMe.style.display = 'none';
            this.$refs.divProjects.style.display = 'block';
        },
        onClickSkillSet: function (event) {
            this.$refs.divAboutMe.style.display = 'none';
            this.$refs.divProjects.style.display = 'none';
        }
    },
    created: function () {
       console.log('created');
    },
    mounted: function () {
        this.$refs.divProjects.style.display = 'none';
    }
});
