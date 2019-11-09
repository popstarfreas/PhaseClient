import $ from "jquery";
import Network from "phaseclient/network";
import Client from "phaseweb/client";
import PageModel from "phaseweb/pagemodel";

$(() => {
    const client = new Client({
        combineMessages: true,
        shrinkJoinLeaveMessages: true,
        useAndDisplayJoinLeaveMessages: false,
        displayOtherSystemsNames: false,
        mergeLiveTypingWithCompleteChatArea: false
    });

    const network = new Network(client, {
        protocol: "https",
        host: "t.dark-gaming.com:3001",
        secure: true
    });
    const pageModel = new PageModel(client);

    client.setupNetwork(network);
    client.setupPageModel(pageModel);
});
