import { observable, action, makeAutoObservable, toJS } from 'mobx';
import Store from './Store';

class BasketStore {
    basketIsOpen: boolean = false
    fillingCart: boolean = false
    baskedItems: any[] = []
    baskedTotalCost: number = 0


    constructor() {
        makeAutoObservable(this, {
            basketIsOpen: observable,
            baskedItems: observable,
            baskedTotalCost: observable,
            fillingCart:observable,
            setFillingCart:action,
            setBaskedTotalCost: action,
            setBaskedItems: action,
            setBasketIsOpen: action,
            setBasketPlus: action,
            setBasketMinus: action

        })
    }

    setBaskedTotalCost() {
this.baskedTotalCost=0
if(this.baskedItems.length<1 && this.baskedItems.length>0){
    this.baskedTotalCost = this.baskedItems[0].price
}else{
    
        for (let i = 0; i < this.baskedItems.length; i++) {
            this.baskedTotalCost = this.baskedTotalCost + this.baskedItems[i].price
        }
    }
        if(this.baskedTotalCost>3000){
            Store.setBookingAmount(this.baskedTotalCost)
        }
    }

    setBasketPlus(value: string) {
        console.log(value);

        let flagCount = 0
        for (let i = 0; i < this.baskedItems.length; i++) {
            if (this.baskedItems[i].name === value)
                flagCount = i

        }
        let tf = this.baskedItems[flagCount].price / this.baskedItems[flagCount].count
        this.baskedItems[flagCount].price = this.baskedItems[flagCount].price + tf
        this.baskedItems[flagCount].count++
        this.setBaskedTotalCost()
    }
    setBasketMinus(value: string) {
        let flagCount = 0
        for (let i = 0; i < this.baskedItems.length; i++) {
            if (this.baskedItems[i].name === value)
                flagCount = i

        }
        let tf = this.baskedItems[flagCount].price / this.baskedItems[flagCount].count
        this.baskedItems[flagCount].count--
        if (this.baskedItems[flagCount].count < 1) {
            this.baskedItems.splice(flagCount, 1);
        } else {
            this.baskedItems[flagCount].price = this.baskedItems[flagCount].price - tf
        }
        this.setBaskedTotalCost()
    }

    setBasketIsOpen(value: boolean) {
        this.basketIsOpen = value
    }
    setFillingCart(value: boolean) {
        this.fillingCart = value
    }
    
    setBaskedItems(value1: string, value2: string, value3: number, value4: number) {
        let flag = 0;
        let flagCount = 0;
        if (this.baskedItems.length === 0) {
            const newItem = {
                name: value1,
                photo: value2,
                count: value3,
                price: value3 * value4,
            };
            this.baskedItems.push(newItem);
        } else {
            for (let i = 0; i < this.baskedItems.length; i++) {
                if (this.baskedItems[i].name === value1) {
                    flag++
                    flagCount = i
                }
            }
            if (flag > 0) {
                this.baskedItems[flagCount].count = this.baskedItems[flagCount].count + value3
                this.baskedItems[flagCount].price = this.baskedItems[flagCount].count * value4
            } else {
                const newItem = {
                    name: value1,
                    photo: value2,
                    count: value3,
                    price: value3 * value4,
                };
                this.baskedItems.push(newItem);
            }
        }
        this.setBaskedTotalCost()
    }


}

export default new BasketStore();