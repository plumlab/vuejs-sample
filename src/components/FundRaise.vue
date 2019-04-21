<template>
  <div>
    <h2>Top fundraisers</h2>
    <b-card-group deck>
      <b-card title="Dan's surgery" img-src="https://d2g8igdw686xgo.cloudfront.net/38385970_15553907907591_r.jpg" img-alt="Dan's surgery" img-top>
        <b-card-text>
          Hi! My name is Ygor or most known as Dan/ Danzzila from all my followers on Deviantart. At this moment I'm going through a really tough situation. 
        </b-card-text>
        <Progress />
        <div class="show-for-medium"><strong>$2,720 raised</strong> of $4,000</div>
      </b-card>

      <b-card title="Vietnamese Women in Tech" img-src="https://d2g8igdw686xgo.cloudfront.net/38336586_155473452318840_r.jpeg" img-alt="Vietnamese Women in Tech" img-top>
        <b-card-text>
          For the past few years, I've been very interested in giving back to the community.  I'm a strong believer in the power of education and equality.  
        </b-card-text>
        <Progress />
        <div class="show-for-medium"><strong>$1,240 raised</strong> of $1,500</div>
      </b-card>

      <b-card title="Mike T accident fund" img-src="https://d2g8igdw686xgo.cloudfront.net/38476300_1555315226390387_r.jpeg" img-alt="Mike" img-top>
        <b-card-text>
          Hello everyone our friend Mike has gotten into a really bad accident last night and he is stuck in the emergency ward of the French hospital in Hanoi.
        </b-card-text>
        <Progress />
        <div class="show-for-medium"><strong>$1,145 raised</strong> of $15,000</div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import Progress from './Progress.vue'

export default {
  components: {
    Progress
  }
}
</script>