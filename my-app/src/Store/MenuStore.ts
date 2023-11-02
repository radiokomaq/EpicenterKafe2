import { log } from 'console';
import { observable, action, makeAutoObservable, toJS } from 'mobx';

class MenuStore {
  menuHookah: any[] = [];
  menuDessert:  any[] = [];
  menuSnacks: any[] = [];
  menuKoffe: any[] = [];
  detalisItem:any[] =[];


  constructor() {
    makeAutoObservable(this, {
      menuHookah: observable,
      menuDessert: observable,
      menuSnacks: observable,
      menuKoffe: observable,
      detalisItem:observable,
      setDetalisItem:action,
      setMenuHookah: action,
      setMenuDessert: action,
      setMenuSnacks: action,
      setCountPlus:action,
      setCountMinus:action,
      setMenuKoffe: action
    });
  }

  setDetalisItem(value1:string,value2:string,value3:string,value4:number,value5:string){
    this.detalisItem[0] = value1
    this.detalisItem[1] = value2
    this.detalisItem[2] = value3
    this.detalisItem[3] = value4
    this.detalisItem[4] = 1
    this.detalisItem[5] = value4
    this.detalisItem[6] = value5
  }

  setCountPlus(){
    this.detalisItem[4]++
    this.detalisItem[5]=this.detalisItem[4]*this.detalisItem[3]
  }
  setCountMinus(){

    this.detalisItem[4]--
    if( this.detalisItem[4]<1){
      this.detalisItem[4]=1
    }else{

    this.detalisItem[5]=this.detalisItem[5]-this.detalisItem[3]
    }
  }
  setMenuHookah(value: any[]) {
    this.menuHookah = value.slice();
  }

  setMenuDessert(value: any[]) {

    this.menuDessert = value.slice();  
  }

  setMenuSnacks(value: any[]) {
    this.menuSnacks = value.slice();
  }

  setMenuKoffe(value: any[]) {
    this.menuKoffe = value.slice();
  }
}

export default new MenuStore();



