module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    '../countwith.me.css': '../scss/countwith.me.scss'
                }
            }
        },
        express: {
            options: {
                
            },
            server: {
                options: {
                    script: 'index.js',
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            sass: {
                files: ['../scss/**/*.scss'],
                tasks: ['sass'],
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');

};