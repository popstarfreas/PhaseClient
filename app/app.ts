import * as $ from 'jquery';
import Client from 'phaseweb/client';
import PageModel from 'phaseweb/pagemodel';
import Network from 'phase/network';

$(() => {
    let client = new Client({
        combineMessages: true,
        shrinkJoinLeaveMessages: true,
        useAndDisplayJoinLeaveMessages: false
    });

    let network = new Network(client, {
        protocol: 'https',
        host: 't.dark-gaming.com:3001',
        secure: true
    });
    let pageModel = new PageModel(client);

    client.setupNetwork(network);
    client.setupPageModel(pageModel);
});