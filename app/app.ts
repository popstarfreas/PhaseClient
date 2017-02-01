import * as $ from 'jquery';
import Client from 'phasemobile/client';
import PageModel from 'phasemobile/pagemodel';
import Network from 'phase/network';

$(() => {
    console.log("Init");
    // Init tooltips
    $(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

    let client = new Client();
    let network = new Network(client, {
        protocol: 'https',
        host: 't.dark-gaming.com:3001',
        secure: true
    });
    let pageModel = new PageModel(client);

    client.setup(network, pageModel);
});