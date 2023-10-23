import { observable, action, makeAutoObservable } from 'mobx';
import moment from 'moment';


class MyState {
    isOpen: boolean = false;
    orderSurveyisOpen: boolean = false;
    isOpenDetalis: boolean = false;
    registratonIsOpen:boolean = false;
    misstakeIsOpen:boolean = false;
    // selectedDate: Date | null = new Date();
        selectedDate: Date | null = new Date();
    pickTables: number[] = [];
    responstTables:number[]=[];
    name:string='';
    surname:string='';
    email:string='';
    telephone:string='';
    bookingAmount:number = 3000;

    constructor() {
        makeAutoObservable(this, {
            isOpen: observable,
            selectedDate: observable,
            pickTables: observable,
            registratonIsOpen:observable,
            telephone:observable,
            name:observable,
            surname:observable,
            email:observable,
            isOpenDetalis:observable,
            responstTables:observable,
            orderSurveyisOpen:observable,
            bookingAmount : observable,
            misstakeIsOpen:observable,
            handleButtonClickMisstake:action,
            setBookingAmount :action,
            setOrderSurveyisOpen: action,
            setIsOpenDetalis :action,
            setIsOpen: action,
            setPickTables: action,
            setRegistratonIsOpen:action,
            setSelectedDate: action
        })
    }


    setIsOpenDetalis(value:boolean){
        this.isOpenDetalis= value
    }
    setResponstTables(value:number[]){
this.responstTables = value.slice()
    }
    setRegistratonIsOpen(value:boolean){
        this.registratonIsOpen = value;
    }

    setPickTables(value: number[]) {
        this.pickTables = value.slice()
      }
    setName(value: string) {
        this.name = value;
    }
    setBookingAmount(value: number) {
        this.bookingAmount = value;
    }
    
    setSurname(value: string) {
        this.surname = value;
    }
    setEmail(value: string) {
        this.email = value;
    }
    setTelephone(value: string) {
        this.telephone = value;
    }
    setIsOpen(value: boolean) {
        this.isOpen = value;
    }
    setOrderSurveyisOpen(value: boolean) {
        this.orderSurveyisOpen = value;
    }
    
    handleButtonClickMisstake(){
        this.misstakeIsOpen = true;
        setTimeout(() => {
            this.misstakeIsOpen = false;
        }, 5000); // Задержка в 5 секунд (5000 миллисекунд)
    }

    setSelectedDate(date: Date | null) {
        if (date !== null && date >= new Date()) {
            this.selectedDate = moment(date).toDate();

            // this.selectedDate = moment(date).toDate();
        // if (date !== null && date >= new Date()) {
        //     const formattedDate = moment(date).toDate();
        //     this.selectedDate = formattedDate;

        } else {
            
            this.selectedDate = new Date()
        }

    }
}

export default new MyState();

