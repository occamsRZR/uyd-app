#!/usr/bin/env node

'use strict';
//this hook installs all your plugins

// add your plugins to this list--either
// the identifier, the filesystem location
// or the URL
var pluginlist = [
    'org.apache.cordova.device',
    'org.apache.cordova.device-motion',
    'org.apache.cordova.device-orientation',
    'org.apache.cordova.geolocation',
    'org.apache.cordova.console',
    'com.ionic.keyboard'
];

// no need to configure below

var fs = require('fs');
var path = require('path');
var sys = require('sys');
var exec = require('child_process').exec;
var dirPlugins = path.join(__dirname, '../../plugins');
var CORDOVA_PLATFORMS = process.env.CORDOVA_PLATFORMS;

function getDirectories(srcpath) {
    return fs.readdirSync(srcpath).filter(function(file) {
        return fs.statSync(path.join(srcpath, file)).isDirectory();
    });
}

var deleteFolderRecursive = function(strPath) {
    if(fs.existsSync(strPath)) {
        fs.readdirSync(strPath).forEach(function(file, index) {
            var curPath = path.join(strPath, file);
            if(fs.lstatSync(curPath).isDirectory()) {
                // recurse
                deleteFolderRecursive(curPath);
            } else {
                // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(strPath);
    }
};

function puts(error, stdout, stderr) {
    sys.puts(stdout);
}
var subDirPlugins = getDirectories(dirPlugins);

subDirPlugins.forEach(function(dir) {
    deleteFolderRecursive(path.join(dirPlugins, dir));
});

pluginlist.forEach(function(plug) {
    exec('cordova plugin add ' + plug, puts);
});

pluginlist.forEach(function(plug) {
    exec('cordova plugin add ' + plug, puts);
});

// copy the cordova icons and splashes in the existing platforms
exec('gulp image:cordova', puts);
