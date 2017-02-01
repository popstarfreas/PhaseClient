import * as $ from 'jquery';
import Client from 'phasemobile/client';

$(() => {
    // Init tooltips
    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

    let client = new Client({
        protocol: 'https',
        host: 't.dark-gaming.com:3001',
        secure: true
    });
});