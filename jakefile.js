desc('Downloads geo files')
task('default', function(params){
    jake.mkdirP('build');
    var cmds = ['curl -L -o build\\cb_2016_us_county_20m.zip http://www2.census.gov/geo/tiger/GENZ2016/shp/cb_2016_us_county_20m.zip'];
    jake.exec(cmds, {printStdout: true}, function () {
        console.log('All files downloaded');
        complete();
    });
});