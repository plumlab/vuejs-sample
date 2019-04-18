<template>
  <div>
    <b-carousel
      id="key_marketing"
      :interval="4000"
      fade      
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      img-width="1024"
      img-height="480"      
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="Fundraising for the people and causes you care about"
        text="George’s family raised $8k for a new wheelchair to get him moving again."
        img-src="https://d25oniaj7o2jcw.cloudfront.net/hero-george-large-20190213.jpg">
        <b-button variant="success" size="lg"><strong>Make a CharityMe</strong></b-button>
      </b-carousel-slide>

      <b-carousel-slide 
        caption="Fundraising for the people and causes you care about"
        text="Cancer survivor Jenny raised $66k to help other children in New York going through chemo."
        img-src="https://d25oniaj7o2jcw.cloudfront.net/hero-jenesis-large-20190213.jpg">
        <b-button variant="success" size="lg"><strong>Make a CharityMe</strong></b-button>
      </b-carousel-slide>

      <b-carousel-slide 
        caption="Fundraising for the people and causes you care about"
        text="In 2017, the CharityMe community raised millions of dollars for hurricane relief efforts."
        img-src="https://d25oniaj7o2jcw.cloudfront.net/hero-emergency-large-20190213.jpg">
        <b-button variant="success" size="lg"><strong>Make a CharityMe</strong></b-button>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>
