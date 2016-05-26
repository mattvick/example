(function() {
  var events = {

    /**
     * initialise code if an div with the id 'events' is found
     */
    init: function() {
      // console.log('init()');
      this.$events = $('#events');
      if (this.$events.length) {
        this.setup();
        this.events();
      }
    },

    /**
     * setup references to page elements
     */
    setup: function() {
      // console.log('setup()');
      this.$link = $('a');
      this.$button = $('button').first();
      this.$reset = $('button').last();
      this.$first = $('p').first();
      this.$last = $('p').last();
    },

    /**
     * register events
     */
    events: function() {
      // console.log('events()');
      var self = this;

      // link click
      this.$link.on('click', function(event) {
        // console.log('link click');
        event.preventDefault();
        self.$last.css('color', 'red');
      });

      // button click
      this.$button.on('click', function(event) {
        // console.log('button click');
        self.$first.css('color', 'blue');
      });

      // reset click
      this.$reset.on('click', function(event) {
        // console.log('reset click');
        self.$first.removeAttr('style');
        self.$last.removeAttr('style');
      });
    }
  };

  /**
   * run our code when the document is ready
   */
  $(document).ready(function() {
    events.init();
  });
})();
