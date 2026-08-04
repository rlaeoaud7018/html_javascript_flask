import { memberDB } from "./db.js";

export const isMember = () => {
    console.log('isMember() CALLED!!');

    return memberDB.get(id);

}

export const insertNewMember = (id, newMemberObj) => {
    console.log('isMember() CALLED!!');
    memberDB.set(id, newMemberObj);

    console.log('memberDB: ', memberDB);

}

export const searchMember = () => {
    
}

export const updateMember = () => {
    
}

export const deleteMember = () => {
    
}

/*
Create : insert
Read : search
Update : update
Delete : delete
*/