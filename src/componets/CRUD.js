import react, {componets} from 'react';
import * as firebase from 'firebase/app';
export default class CRUD extends componets
{
    constructor(props){
        super(props);

    this.state = {
    user:[],
    }
firebase.database().ref('user/0').set({
    id : 0,
    firstname:'poppy',
    lastname: 'lun',
    phone:'0985496936'

})
    };
    componetsDidMount(){

    }
    async ListUser(){
        var usersPromise = new Promise(r=>{
            firebase
        }
        )



    }
    render (){
        <div>
            



            </div>
    }
}