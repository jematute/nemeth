module.exports = function(grunt) {

  grunt.initConfig({
	  watch: {
		  options: {
		        livereload: true,
		  },
		  all: {
			  files: ['**/*.html', '**/*.js']
		  },
		  concat: {
			  files: 'app/**/*.js',
			  tasks: ['concat']
		  },
		  wiredep: {
			  files: ['public/lib/**/*.js', 'public/lib/**/*.css'],
			  tasks: ['wiredep']
		  },
		  less: {
			  files: 'less/**/*.less',
			  tasks: ['less:development']
		  }
	  },
	  open: {
	      all: {
	          path: 'http://localhost:8080/index.html'
	      }
	  },
	  wiredep: {

	    task: {

	      // Point to the files that should be updated when
	      // you run `grunt wiredep`
	      src: [
	        'public/index.html',   // .html support...
	      ],

	      options: {
	        // See wiredep's configuration documentation for the options
	        // you may pass:

	        // https://github.com/taptapship/wiredep#configuration
	      }
	    }
	  },
	  concat: {
		  dist: {
		        src: ['app/**/*.js'],
		        dest: 'public/js/app.js',
		  }
	  },
	  less: {
		  development: {
			  files: {
				  "public/css/master.css": "less/**/*.less"
			  }
		  }
	  },
	  
      express: {
        options: {
          // Override defaults here
        },
        dev: {
          options: {
            script: 'server.js'
          }
        },
        prod: {
          options: {
            script: 'server.js',
            node_env: 'production'
          }
        },
        test: {
          options: {
            script: 'server.js'
          }
        }  
    }
	  
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-wiredep')
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.registerTask('server', ['open', 'watch', 'wiredep']);

};