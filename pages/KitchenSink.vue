<template>
  <div>
    <component v-for="section of data" :key="section.id" :is="section.name" />
  </div>
</template>

<script>
// import Buttons from 'componentsdir/button/examples/Buttons'
// import Cta from 'componentsdir/cta/examples/Cta'
import Links from './components/Links'
import Breadcrumb from './components/Breadcrumb'
// import Cards from 'componentsdir/card/examples/Cards'
// import Checkbox from 'componentsdir/checkbox/examples/checkboxes'
// import Grid from 'componentsdir/grid/examples/Grid'
// import Checkboxes from 'componentsdir/checkbox/examples/checkboxes'
// import Texts from 'componentsdir/text/examples/Text'
// import Icons from 'componentsdir/icon/examples/Icons'
// import Images from 'componentsdir/image/examples/Images'
// import Quotes from 'componentsdir/quote/examples/Quote'
import Accordion from './components/Accordion'
// import Forms from 'componentsdir/input/examples/Inputs'
// import Lists from 'componentsdir/list/examples/Lists'
// import MediaObject from 'componentsdir/mediaObject/examples/mediaObject'
// import Rating from 'componentsdir/rating/examples/Ratings';
// import Radios from 'componentsdir/radio/examples/Radios'
// import Selects from 'componentsdir/select/examples/Selects'
// import CaptionExample from 'compositionsdir/caption/examples/Caption'
// import Activity from 'compositionsdir/activityCard/examples/activity'
// import Searchbox from 'compositionsdir/search/examples/searchbox'

export default {
  name: 'KitchenSink',
  components: {
    Links,
    Breadcrumb,
    Accordion,
    // Buttons,
    // Cta,
    // Texts,
    // Icons,
    // Lists,
    // Selects,
    // MediaObject,
    // Forms,
    // Radios,
    // Rating,
    // Grid,
    // Checkboxes,
    // Cards,
    // Images,
    // Searchbox,
    // Quotes,
    // CaptionExample,
    // Activity,
  },
  data() {
    return {
      data: [
        Links,
        Breadcrumb,
        Accordion,
        // Buttons,
        // Cta,
        // Cards,
        // Activity,
        // Checkboxes,
        // Grid,
        // Texts,
        // Icons,
        // Images,
        // Searchbox,
        // Forms,
        // Lists,
        // MediaObject,
        // Radios,
        // Quotes,
        // Rating,
        // Selects,
        // CaptionExample,
      ]
    }
  }
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>

