process.env.NODE_PATH = __dirname;
require('module').Module._initPaths();

import * as $ from 'jquery';
import {} from 'bootstrap';
import Client from 'client';

$(() => {
    // Init tooltips
    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

    let client = new Client({
        protocol: 'https',
        port: 3001
    });
});