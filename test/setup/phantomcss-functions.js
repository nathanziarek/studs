var phantomcss = require('../../node_modules/phantomcss/phantomcss.js');

function fileNameGetter(root,filename){
    var name = root+'/'+filename;
    if(fs.isFile(name+'.png')){
        return name+'.diff.png';
    } else {
        return name+'.png';
    }
}

phantomcss.init({
    libraryRoot: 'node_modules/phantomcss/',
    screenshotRoot: './test/baseline',
    failedComparisonsRoot: './test/failures',
    comparisonResultRoot: './test/results',
    cleanupComparisonImages: true,
    fileNameGetter: fileNameGetter
});
