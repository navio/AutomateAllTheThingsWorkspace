module.exports = function(grunt) {
require('load-grunt-tasks')(grunt);
grunt.initConfig({
    clean: ['./dist'],
    copy: {
        release: {
            files: [ { src: './**', dest: './dist/' } ]
        }
    }
});


grunt.registerTask('default', ['clean', 'copy']);

};
