module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ''
      },
      dist: {
        files: {
          'build/js/script.js': ['js/*.js'],
          'build/css/style.css': ['css/*.css'],
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'build/js/script.js': ['build/js/script.js'],
        }
      }
    },
    csso: {
      compress: {
        options: {
          report: 'gzip'
        },
        files: {
          'build/css/style.css': ['build/css/style.css'],
        }
      }
    },
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'build/index.html': 'index.html',     // 'destination': 'source'
        }
      },
    },
    imagemin: {                          // Task
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'img/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'build/img/'             // Destination path prefix
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['concat', 'uglify', 'csso', 'htmlmin', 'imagemin']);


};