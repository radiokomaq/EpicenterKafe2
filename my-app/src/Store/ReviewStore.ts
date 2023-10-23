import { observable, action, makeAutoObservable } from 'mobx';

class ReviewStore {

    name: string = ''
    rating: number = 0
    messageBody: string = ''
    responceReview:any[]=[]

    constructor() {
        makeAutoObservable(this, {
            name: observable,
            rating: observable,
            messageBody: observable,
            responceReview:observable,
            setResponceReview:action,
            setName: action,
            setRating: action,
            setMessageBody: action,


        });
    }

    setResponceReview(value:any[]){
        this.responceReview=value.slice()
    }

    setName(value: string) {
            this.name=value
    }
    setRating(value: number) {
            this.rating=value
    }
    setMessageBody(value: string) {
this.messageBody=value
    }


}


export default new ReviewStore();