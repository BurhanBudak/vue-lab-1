<template>
  <div class="container my-5 py-5 z-depth-1">

  
  <!--Section: Content-->
  <section class="text-center px-md-5 mx-md-5 dark-grey-text">
    
    <div class="row mb-5">
      <div class="col-md-4 mx-auto">
        <div class="view mb-4 pb-2">
          <img src="https://mdbootstrap.com/img/illustrations/undraw_connected_world_wuay.svg" class="img-fluid" alt="smaple image">
        </div>
      </div>
    </div>
    <button @click="buttonCallForAction" type="button" class="btn btn-deep-purple btn-rounded">Call for action</button>

  </section>
  <!--Section: Content-->

  
</div>
</template>

<script>
export default {
    name: "Hero",
    methods: {
        buttonCallForAction() {
            let msg = 'Grattis, du skapade en Navbar, Hero med fucntion och Footer för din första Lab'
            console.log(msg)
        }
    }
}
</script>

<style>

</style>