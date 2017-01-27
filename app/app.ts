import * as $ from 'jquery';
import {} from 'bootstrap';
import Client from 'phase/client';

$(() => {
    // Init tooltips
    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

    let client = new Client({
        protocol: 'https',
        host: 't.dark-gaming.com',
        port: 3001
    });
});