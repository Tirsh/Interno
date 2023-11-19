Vue.component('blog-component', {
    props: [
        'tag',
        'title',
        'titleimgurl',
        'date',
        'breadcrumbs',
        'content'
    ],
    computed: {
        imgStyle() {
            return `background: url("${this.titleimgurl}") 50% 50% / cover no-repeat`; 
        }
    },
    template: `
        <article class="blog-details__blog" :data-tag="tag">
            <h2 class="blog-details__title title">{{title}}</h2>
            <div :style="imgStyle" class="blog-details__title-img"></div>
            <div class="blog-details__info">
                <div class="blog-details__date">{{date}}</div>
                <ul class="blog-details__breadcrumbs">
                    <li v-for="link in breadcrumbs">{{link}}</li>
                </ul>
            </div>
            <div v-html="content" class="blog-details__content"></div>
        </article>
    `
})