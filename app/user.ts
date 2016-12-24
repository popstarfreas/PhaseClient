import Utils from 'utils';

class User {
    ID: number;
    name: string;
    formatName: string;
    systemName: string;
    avatar: string;

    constructor(ID: number, name: string, systemName: string, avatar: string, clientSystemName: string) {
        this.ID = ID;
        this.name = name;
        this.systemName = systemName;
        this.avatar = avatar;

        // Users from other systems will have a suffix to show for it
        if (systemName !== clientSystemName) {
            this.formatName = `${Utils.htmlspecialchars(name)}@<i>${systemName}</i>`;
        } else {
            this.formatName = Utils.htmlspecialchars(name)
        }
    }
}

export default User;