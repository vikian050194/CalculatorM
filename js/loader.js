function Loader() {
    this.load = function (filename, filetype, fileid) {
        if (filetype == 'js') {
            var fileref = document.createElement('script');
            fileref.setAttribute('type', 'text/javascript');
            fileref.setAttribute('src', filename);
        }
        else if (filetype == 'css') {
            var fileref = document.createElement('link');
            fileref.setAttribute('rel', 'stylesheet');
            fileref.setAttribute('type', 'text/css');
            fileref.setAttribute('href', filename);
        }
        if (typeof fileref != 'undefined') {
            fileref.setAttribute('id', fileid);
            document.getElementsByTagName('head')[0].appendChild(fileref);
        }
    }
}