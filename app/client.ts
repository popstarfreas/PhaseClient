import * as $ from 'jquery';
import Network from 'network';
import User from 'user';

class Client {
    ID: number;
    username: string;
    systemName: string;
    avatar: string;
    network: Network;

    onlineUsers: Array<User>;

    // Const
    peopleSection = $("#people-section-phase");

    constructor(options: Object) {
        this.network = new Network(this, options);
    }

    updateInformation(userID: number, username: string, systemName: string, avatar: string): void {
        this.ID = userID;
        this.username = username;
        this.systemName = systemName;
        this.avatar = avatar;
    }

    /* Clears the existing displayed list and puts in an updated one */
    refreshUsersOnlineList(): void {
        let sectionList = this.peopleSection.children(".people-section-list").children('ul');
        sectionList.html('');

        let user;
        for (let i = 0; i < this.onlineUsers.length; i++) {
            user = this.onlineUsers[i];
            sectionList.append(`
            <li>
                <div class="people_user_avatar">
                    <img class="avatar_${user.ID}" src="${user.avatar}"/>
                </div>
                <div class="people_user_right">
                    <span class="people-username">${user.formatName}</span>
                </div>
                <i class="fa fa-circle" data-toggle="tooltip" data-placement="left" title="Online"></i>
            </li>`)
        }
    }
}

export default Client;