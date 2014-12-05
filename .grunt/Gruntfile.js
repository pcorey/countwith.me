module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    '../countwith.me.css': '../scss/countwith.me.scss'
                }
            }
        },
        copy: {
            moment: {
                cwd: 'bower_components',
                src: 'moment/min/moment.min.js',
                dest: '../js/',
                expand: true
            },
            lodash: {
                cwd: 'bower_components',
                src: 'lodash/dist/lodash.min.js',
                dest: '../js/',
                expand: true
            }
        },
        watch: {
            sass: {
                files: ['../scss/**/*.scss'],
                tasks: ['sass'],
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-copy');

};