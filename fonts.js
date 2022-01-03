
  var Module = typeof Module !== 'undefined' ? Module : {};

  if (!Module.expectedDataFileDownloads) {
    Module.expectedDataFileDownloads = 0;
  }
  Module.expectedDataFileDownloads++;
  (function() {
   var loadPackage = function(metadata) {

      var PACKAGE_PATH = '';
      if (typeof window === 'object') {
        PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
      } else if (typeof process === 'undefined' && typeof location !== 'undefined') {
        // web worker
        PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
      }
      var PACKAGE_NAME = 'fonts.data';
      var REMOTE_PACKAGE_BASE = 'fonts.data';
      if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
        Module['locateFile'] = Module['locateFilePackage'];
        err('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
      }
      var REMOTE_PACKAGE_NAME = Module['locateFile'] ? Module['locateFile'](REMOTE_PACKAGE_BASE, '') : REMOTE_PACKAGE_BASE;

      var REMOTE_PACKAGE_SIZE = metadata['remote_package_size'];
      var PACKAGE_UUID = metadata['package_uuid'];

      function fetchRemotePackage(packageName, packageSize, callback, errback) {

        if (typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string') {
          require('fs').readFile(packageName, function(err, contents) {
            if (err) {
              errback(err);
            } else {
              callback(contents.buffer);
            }
          });
          return;
        }

        var xhr = new XMLHttpRequest();
        xhr.open('GET', packageName, true);
        xhr.responseType = 'arraybuffer';
        xhr.onprogress = function(event) {
          var url = packageName;
          var size = packageSize;
          if (event.total) size = event.total;
          if (event.loaded) {
            if (!xhr.addedTotal) {
              xhr.addedTotal = true;
              if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
              Module.dataFileDownloads[url] = {
                loaded: event.loaded,
                total: size
              };
            } else {
              Module.dataFileDownloads[url].loaded = event.loaded;
            }
            var total = 0;
            var loaded = 0;
            var num = 0;
            for (var download in Module.dataFileDownloads) {
            var data = Module.dataFileDownloads[download];
              total += data.total;
              loaded += data.loaded;
              num++;
            }
            total = Math.ceil(total * Module.expectedDataFileDownloads/num);
            if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
          } else if (!Module.dataFileDownloads) {
            if (Module['setStatus']) Module['setStatus']('Downloading data...');
          }
        };
        xhr.onerror = function(event) {
          throw new Error("NetworkError for: " + packageName);
        }
        xhr.onload = function(event) {
          if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
            var packageData = xhr.response;
            callback(packageData);
          } else {
            throw new Error(xhr.statusText + " : " + xhr.responseURL);
          }
        };
        xhr.send(null);
      };

      function handleError(error) {
        console.error('package error:', error);
      };

        var fetchedCallback = null;
        var fetched = Module['getPreloadedPackage'] ? Module['getPreloadedPackage'](REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE) : null;

        if (!fetched) fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
          if (fetchedCallback) {
            fetchedCallback(data);
            fetchedCallback = null;
          } else {
            fetched = data;
          }
        }, handleError);

    function runWithFS() {

      function assert(check, msg) {
        if (!check) throw msg + new Error().stack;
      }
  Module['FS_createPath']("/", "resources", true, true);
Module['FS_createPath']("/resources", "Images.xcassets", true, true);
Module['FS_createPath']("/resources/Images.xcassets", "GreenLightiOSAppIcon.appiconset", true, true);
Module['FS_createPath']("/resources", "fonts", true, true);

          /** @constructor */
          function DataRequest(start, end, audio) {
            this.start = start;
            this.end = end;
            this.audio = audio;
          }
          DataRequest.prototype = {
            requests: {},
            open: function(mode, name) {
              this.name = name;
              this.requests[name] = this;
              Module['addRunDependency']('fp ' + this.name);
            },
            send: function() {},
            onload: function() {
              var byteArray = this.byteArray.subarray(this.start, this.end);
              this.finish(byteArray);
            },
            finish: function(byteArray) {
              var that = this;

          Module['FS_createDataFile'](this.name, null, byteArray, true, true, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
          Module['removeRunDependency']('fp ' + that.name);

              this.requests[this.name] = null;
            }
          };

              var files = metadata['files'];
              for (var i = 0; i < files.length; ++i) {
                new DataRequest(files[i]['start'], files[i]['end'], files[i]['audio'] || 0).open('GET', files[i]['filename']);
              }


      function processPackageData(arrayBuffer) {
        assert(arrayBuffer, 'Loading data file failed.');
        assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
        var byteArray = new Uint8Array(arrayBuffer);
        var curr;

          // Reuse the bytearray from the XHR as the source for file reads.
          DataRequest.prototype.byteArray = byteArray;

            var files = metadata['files'];
            for (var i = 0; i < files.length; ++i) {
              DataRequest.prototype.requests[files[i].filename].onload();
            }
                Module['removeRunDependency']('datafile_fonts.data');

      };
      Module['addRunDependency']('datafile_fonts.data');

      if (!Module.preloadResults) Module.preloadResults = {};

        Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
        if (fetched) {
          processPackageData(fetched);
          fetched = null;
        } else {
          fetchedCallback = processPackageData;
        }

    }
    if (Module['calledRun']) {
      runWithFS();
    } else {
      if (!Module['preRun']) Module['preRun'] = [];
      Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
    }

   }
   loadPackage({"files": [{"filename": "/resources/GreenLight-macOS-AUv3-Info.plist", "start": 0, "end": 1723}, {"filename": "/resources/GreenLight-iOS-AUv3Framework-Info.plist", "start": 1723, "end": 2469}, {"filename": "/resources/GreenLight-iOS-LaunchScreen.storyboard", "start": 2469, "end": 5796}, {"filename": "/resources/GreenLight-macOS-AUv3Framework-Info.plist", "start": 5796, "end": 6492}, {"filename": "/resources/GreenLight-iOS.storyboard", "start": 6492, "end": 8946}, {"filename": "/resources/GreenLight-macOS-MainMenu.xib", "start": 8946, "end": 14485}, {"filename": "/resources/AUv3Framework.h", "start": 14485, "end": 14987}, {"filename": "/resources/main.rc", "start": 14987, "end": 22128}, {"filename": "/resources/GreenLight-VST2-Info.plist", "start": 22128, "end": 23060}, {"filename": "/resources/Trattatello.ttf", "start": 23060, "end": 163896}, {"filename": "/resources/GreenLight-Pages.xml", "start": 163896, "end": 177110}, {"filename": "/resources/GreenLight.ico", "start": 177110, "end": 210098}, {"filename": "/resources/main.rc_mac_dlg", "start": 210098, "end": 213319}, {"filename": "/resources/main.rc_mac_menu", "start": 213319, "end": 214003}, {"filename": "/resources/InterRegular.ttf", "start": 214003, "end": 750395}, {"filename": "/resources/GreenLight.icns", "start": 750395, "end": 838404}, {"filename": "/resources/GreenLight-iOS-Info.plist", "start": 838404, "end": 840177}, {"filename": "/resources/GreenLight-VST3-Info.plist", "start": 840177, "end": 841110}, {"filename": "/resources/IPlugAUViewController.xib", "start": 841110, "end": 842334}, {"filename": "/resources/resource.h", "start": 842334, "end": 844052}, {"filename": "/resources/GreenLight-AU-Info.plist", "start": 844052, "end": 845593}, {"filename": "/resources/GreenLight-iOS-AUv3-Info.plist", "start": 845593, "end": 847323}, {"filename": "/resources/GreenLight-macOS-Info.plist", "start": 847323, "end": 848637}, {"filename": "/resources/GreenLight-AAX-Info.plist", "start": 848637, "end": 849726}, {"filename": "/resources/GreenLight-iOS-MainInterface.storyboard", "start": 849726, "end": 851508}, {"filename": "/resources/Images.xcassets/Contents.json", "start": 851508, "end": 851570}, {"filename": "/resources/Images.xcassets/GreenLightiOSAppIcon.appiconset/Icon.png", "start": 851570, "end": 923577}, {"filename": "/resources/Images.xcassets/GreenLightiOSAppIcon.appiconset/icon_40pt.png", "start": 923577, "end": 925298}, {"filename": "/resources/Images.xcassets/GreenLightiOSAppIcon.appiconset/icon_20pt@2x.png", "start": 925298, "end": 927019}, {"filename": "/resources/Images.xcassets/GreenLightiOSAppIcon.appiconset/icon_40pt@3x.png", "start": 927019, "end": 932364}, {"filename": "/resources/Images.xcassets/GreenLightiOSAppIcon.appiconset/icon_40pt@2x.png", "start": 932364, "end": 935889}, {"filename": "/resources/Images.xcassets/GreenLightiOSAppIcon.appiconset/icon_20pt@3x.png", "start": 935889, "end": 938518}, {"filename": "/resources/Images.xcassets/GreenLightiOSAppIcon.appiconset/icon_20pt.png", "start": 938518, "end": 939304}, {"filename": "/resources/Images.xcassets/GreenLightiOSAppIcon.appiconset/icon_76pt.png", "start": 939304, "end": 942720}, {"filename": "/resources/Images.xcassets/GreenLightiOSAppIcon.appiconset/Contents.json", "start": 942720, "end": 944992}, {"filename": "/resources/Images.xcassets/GreenLightiOSAppIcon.appiconset/icon_76pt@2x.png", "start": 944992, "end": 951860}, {"filename": "/resources/Images.xcassets/GreenLightiOSAppIcon.appiconset/icon_83.5@2x.png", "start": 951860, "end": 959442}, {"filename": "/resources/Images.xcassets/GreenLightiOSAppIcon.appiconset/icon_29pt@3x.png", "start": 959442, "end": 963362}, {"filename": "/resources/Images.xcassets/GreenLightiOSAppIcon.appiconset/icon_60pt@3x.png", "start": 963362, "end": 971595}, {"filename": "/resources/Images.xcassets/GreenLightiOSAppIcon.appiconset/icon_60pt@2x.png", "start": 971595, "end": 976940}, {"filename": "/resources/Images.xcassets/GreenLightiOSAppIcon.appiconset/icon_29pt.png", "start": 976940, "end": 978150}, {"filename": "/resources/Images.xcassets/GreenLightiOSAppIcon.appiconset/icon_29pt@2x.png", "start": 978150, "end": 980628}, {"filename": "/resources/fonts/Trattatello.ttf", "start": 980628, "end": 1121464}, {"filename": "/resources/fonts/InterRegular.ttf", "start": 1121464, "end": 1657856}], "remote_package_size": 1657856, "package_uuid": "156ad84c-de75-47f1-bac3-48ea3679a051"});

  })();
