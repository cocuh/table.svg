module.exports = function (grunt) {
  var pkg = grunt.file.readJSON("package.json");
  grunt.initConfig({
    pkg: pkg,
    banner: grunt.file.read("./src/banner.js")
      .replace(/@VERSION/, pkg.version)
      .replace(/@DATE/, grunt.template.today("yyyy-mm-dd")) + "\n",
    uglify: {
      options: {
        banner: "<%= banner %>",
        report: "min"
      },
      dist: {
        src: "<%= concat.target.dest %>",
        dest: "dist/table.svg-min.js"
      }
    },
    concat: {
      options: {
        banner: "<%= banner %>"
      },
      target: {
        dest: "dist/table.svg.js",
        src: [
          "src/abstract-table.js",
          "src/vertical-table.js",
          "src/table.js",
          "src/calendar.js",
        ]
      }
    },
    watch:{
      files: 'src/*.js',
      tasks:['concat', 'uglify']
    }
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["concat", "uglify"])
};