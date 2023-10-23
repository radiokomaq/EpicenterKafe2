import React, { FC, useState } from 'react'
import myState from '../../../Store/Store'
import { observer } from 'mobx-react-lite'
import axios from 'axios'
import moment from 'moment'
import Basket from '../../../Store/Basket'



const ModalDataComponent: FC = () => {
  const [nameError, setNameError] = useState<string>('')
  const [surnameError, setSurnameError] = useState<string>('')
  const [phoneError, setPhoneError] = useState<string>('')
  const [emailError, setEmailError] = useState<string>('')


  const handleInputChange = (e: any) => {
    const value = e.target.value;
    myState.setBookingAmount(value);
  };
  const handleCraftData = () => {
    myState.setName((document.getElementById('name') as HTMLInputElement).value)
    myState.setSurname((document.getElementById('surname') as HTMLInputElement).value)
    myState.setEmail((document.getElementById('email') as HTMLInputElement).value)
    myState.setTelephone((document.getElementById('telephone') as HTMLInputElement).value)


  }
  console.log(myState.bookingAmount);


  const summStange = () => {
    let bookingAmount2 = 0
    let bookingAmount = parseInt((document.getElementById('summa') as HTMLInputElement).value);
    if ((Basket.baskedTotalCost > 3000) && (bookingAmount < Basket.baskedTotalCost)) {
      bookingAmount2 = Basket.baskedTotalCost
    } else if ((Basket.baskedTotalCost < 3000) && (bookingAmount < 3000)) {
      bookingAmount2 = 3000
    } else {
      bookingAmount2 = bookingAmount
    }
    myState.setBookingAmount(bookingAmount2)

  }

  async function handleReserfSubmit() {
    if(myState.name.length===0){
        setNameError('Введите свое имя')
        myState.handleButtonClickMisstake()
        return;
    }
    if(myState.surname.length===0){
      setSurnameError('Введите вашу фамилию')
      myState.handleButtonClickMisstake()
      return;
    }
    if(myState.email.length===0){
      setEmailError('Заполниет поле почты')
      myState.handleButtonClickMisstake()
      return;
    }
    if(myState.telephone.length===0){
      setPhoneError('Введите ваш телефон')
      myState.handleButtonClickMisstake()
      return;
    }
    if(nameError===''&&surnameError===''&&emailError===''&&phoneError==''){
    for (let i = 0; i < myState.pickTables.length; i++) {
      axios.post('http://localhost:8080/api/reservation', {
        name: myState.name,
        surname: myState.surname,
        email: myState.email,
        telephone: myState.telephone,
        dates: moment(myState.selectedDate).format('YYYY-MM-DD'),
        tables_id: myState.pickTables[i],
        start_time: moment(myState.selectedDate).format('HH:mm'),
        last_time: "23:59"

      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
    myState.handleButtonClickMisstake()
    const namesInput1 = document.getElementById('name') as HTMLInputElement | null;
    if (namesInput1) {
        namesInput1.value = '';
    }
    const namesInput2 = document.getElementById('surname') as HTMLInputElement | null;
    if (namesInput2) {
        namesInput2.value = '';
    }
    const namesInput3 = document.getElementById('email') as HTMLInputElement | null;
    if (namesInput3) {
        namesInput3.value = '';
    }
    const namesInput4 = document.getElementById('telephone') as HTMLInputElement | null;
    if (namesInput4) {
        namesInput4.value = '';
    }
  }else{
    alert('Произошла непридвиденная ошибка')
  }
  }
  const hasDigits = (str: string) => {
    return /\d/.test(str);
  };
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const hasOnlyDigitsAndPlus = (str: string): boolean => {
    const regex = /^[0-9+]+$/;
    return regex.test(str);
  };
  const HandleValidation = (value: number) => {
    switch (value) {
      case 1:
        switch (true) {
          case myState.name.length === 0:
            setNameError('Введите свое имя')
            break;
          case myState.name.length < 2:
            setNameError('Имя слишком короткое')
            break;
          case myState.name.length > 21:
            setNameError('Имя слишком длинное')
            break;
          case hasDigits(myState.name):
            setNameError('Имя не может содержать цифры');
            break;
          default:
            setNameError('')
            break;
        }
        break;
      case 2: switch (true) {

        case myState.surname.length === 0:
          setSurnameError('Введите вашу фамилию')
          break;
        case myState.surname.length < 2:
          setSurnameError('Фамилия слишком короткая')
          break;
        case myState.surname.length > 26:
          setSurnameError('Фамилия слишком длинная')
          break;
        case hasDigits(myState.surname):
          setSurnameError('Фамилия не может содержать цифры')
          break;
        default:
          setSurnameError('')
          break;
      }
        break;
      case 3: switch (true) {
        case myState.email.length === 0:
          setEmailError('Заполниет поле почты')
          break;
        case myState.email.length < 5:
          setEmailError('Заполниет поле почты, пожалуйста')
          break;
        case !isValidEmail(myState.email):
          setEmailError('Некоретный email адресс')
          break;
        default:
          setEmailError('')
      }
        break;
      case 4: switch (true) {
        case myState.telephone.length === 0:
          setPhoneError('Введите ваш телефон')
          break
        case myState.telephone.length !== 12:
          setPhoneError('Некоректный номер телефона')
          break
        case !hasOnlyDigitsAndPlus(myState.telephone):
          setPhoneError('Номер телефона не может содержать буквы!')
          break
        default:
          setPhoneError('')
      }
        break;
    }
  }
  console.log(nameError);


  return (

    <div className="flex h-full w-full flex-col items-center justify-center gap-3">
      <div className="flex text-lg  itmes-start font-bold mb-4">Введите данные для бронирования</div>
      <div className='flex text-base underline mb-10'>
        {/*  {myState.pickTables.length > 0 ? */}
        {/*  <div> Столов № <b>{myState.pickTables}</b></div> :
           <div>Стола № {myState.pickTables.map(table => <span key={table}>{myState.pickTables}</span>).join(', ')}</div>} */}

        {myState.pickTables.length > 1 ? (
          <div>
            Столов №&nbsp;{' '}
            {myState.pickTables.map((table, index) => (
              <span key={table} className="mr-1 font-bold">
                {table}
                {index !== myState.pickTables.length - 1 && ','}
              </span>

            ))}
          </div>
        ) : (
          <div>Стола № <b>{myState.pickTables}</b></div>
        )}

        ;&nbsp; на дату:&nbsp;&nbsp;<b>{moment(myState.selectedDate).format('YYYY-MM-DD')}  </b>
      </div>
      <div className="flex flex-row mb-4">
        <div className="w-1/2">
          <label htmlFor="name" className={`flex justify-center  font-medium mb-2 ${nameError.length > 0 ? 'text-[red]' : 'text-gray-700'}`}>
            Введите Имя
          </label>

          <input
            id="name"
            type="text"
            placeholder={nameError.length > 0 ? nameError : 'Ваше имя'}
            onBlur={() => HandleValidation(1)}
            onChange={() => handleCraftData()}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${nameError.length > 0 ? 'border-[red] placeholder:text-[red]' : 'border-gray-300'}`}
          />
          <span className='flex justify-center text-[red]'> {nameError.length > 0 ? nameError == 'Введите свое имя' ? '' : nameError : ''}</span>
        </div>
        <div className="w-1/2 ml-4">
          <label htmlFor="surname" className={`flex justify-center font-medium mb-2 ${surnameError.length > 0 ? 'text-[red]' : 'text-gray-700'}`}>
            Введите Фамилия
          </label>

          <input
            id="surname"
            type="text"
            placeholder={surnameError.length > 0 ? surnameError : 'Ваша фамилия'}
            onBlur={() => HandleValidation(2)}
            onChange={() => handleCraftData()}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${surnameError.length > 0 ? 'border-[red] placeholder:text-[red]' : 'border-gray-300'}`}
          />
          <span className='flex justify-center text-[red]'>{surnameError.length > 0 ? surnameError == 'Введите вашу фамилию' ? '' : surnameError : ''}</span>
        </div>
      </div>
      <div className="flex flex-row mb-4">
        <div className="w-1/2 ">
          <label htmlFor="email" className={`flex justify-center  font-medium mb-2 ${emailError.length > 0 ? 'text-[red]' : 'text-gray-700'}`}>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder={`${emailError.length > 0 ? emailError : 'ваша почта'}`}
            onBlur={() => HandleValidation(3)}
            onChange={() => handleCraftData()}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${emailError.length > 0 ? 'border-[red] placeholder:text-[red]' : 'border-gray-300'}`}


          />
          <span className='flex text-[red] justify-center basis-full'>{emailError.length > 1 ? emailError == 'Заполниет поле почты' ? '' : emailError : ''}</span>
        </div>
        <div className="w-1/2 ml-4">
          <label htmlFor="telephone" className={`flex justify-center  font-medium mb-2 ${phoneError.length > 0 ? 'text-[red]' : 'text-gray-700'}`}>
            Номер телефона
          </label>

          <input
            onBlur={() => HandleValidation(4)}
            id="telephone"
            type="text"
            placeholder={phoneError.length > 1 ? phoneError : 'ваш номер телефона'}
            onChange={() => handleCraftData()}
            className={`w-full px-4 py-2 border  rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${phoneError.length > 1 ? 'border-[red] placeholder:text-[red]' : 'border-gray-300'}`}
          />
          <span className='flex justify-center text-[red]'>{phoneError.length > 0 ? phoneError == 'Введите ваш телефон' ? '' : phoneError : ''}</span>
        </div>
        <div className="w-1/2 ml-4 max-w-full min-w-1/2" >
          <label htmlFor="summa" className="flex justify-center text-gray-700 font-medium mb-2 ">
            Сумма  бронирования стола
          </label>
          <input
            id="summa"
            type="number"
            onChange={handleInputChange}
            onBlur={() => summStange()}
            value={myState.bookingAmount}
            placeholder={Basket.baskedTotalCost > 3000 ? Basket.baskedTotalCost.toString() : "3000"}
            min={Basket.baskedTotalCost > 3000 ? Basket.baskedTotalCost.toString() : 3000}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 max-w-full"
          />
          <span className='text-ms text-[tomato]  '> Остаток: {myState.bookingAmount - Basket.baskedTotalCost} ₽</span>
        </div>
      </div>
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        onClick={() => handleReserfSubmit()}
      >
        Забронировать
      </button>
    </div>
  )
}

export default observer(ModalDataComponent)



