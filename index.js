'use strict';

const { dirname, sep } = require('path');

hexo.database.model('Post').schema.virtual('asset_dir').get(function() {
    return dirname(this.full_source) + sep;
});