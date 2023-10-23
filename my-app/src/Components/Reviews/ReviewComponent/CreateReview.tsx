import React, { FC, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import ReviewStore from '../../../Store/ReviewStore';
import { observer } from 'mobx-react-lite'
import axios from 'axios';
import Store from '../../../Store/Store';
import { Link } from 'react-router-dom';


const CreateReview: FC = () => {

    const [rating, setRating] = useState<number>(0);
    const [nameError, setNameError] = useState<string>('')
    const [ratingError, setRatingError] = useState<string>('')
    const [messageError, setMessageError] = useState<string>('')

    const handleRatingChange = (value: number) => {
        setRating(value);
        ReviewStore.setRating(value)
        setRatingError('');
    };

    const handleCraftReview = () => {
        ReviewStore.setName((document.getElementById('names') as HTMLInputElement).value)

        ReviewStore.setMessageBody((document.getElementById('message') as HTMLInputElement).value)
    }
    const hasDigits = (str: string) => {
        return /\d/.test(str);
    };

    const handleValidation = (value: number) => {
        switch (value) {
            case 1:
                switch (true) {
                    case ReviewStore.name.length === 0:
                        setNameError('Заполните поле ввода');
                        break;
                    case ReviewStore.name.length < 2:
                        setNameError('Имя слишком короткое');
                        break;
                    case ReviewStore.name.length > 25:
                        setNameError('Слишком длинное имя');
                        break;
                    case hasDigits(ReviewStore.name):
                        setNameError('Имя не может содержать цифры');
                        break;
                    default:
                        setNameError('');
                        break;
                }
                break;
            case 2:
                switch (true) {
                    case ReviewStore.rating === 0:
                        setRatingError('Поставьте оценку, пожалуйста');
                        break;
                    default:
                        setRatingError('');
                        break;
                }
                break;
            default:
                switch (true) {
                    case ReviewStore.messageBody.length === 0:
                        setMessageError('Напишите пожалуйста отзыв!')
                        break;
                    case ReviewStore.messageBody.length < 4:
                        setMessageError('отзыв слишком короткий')
                        break;
                    case ReviewStore.messageBody.length > 253:
                        setMessageError('отзыв слишком длинный!')
                        break;

                    default:
                        setMessageError('');
                        break;
                }
                break;
        }
    };

console.log(Store.misstakeIsOpen);


    async function HandleDataPush() {
        if (ReviewStore.rating === 0) {
            setRatingError('Поставьте оценку, пожалуйста');
            Store.handleButtonClickMisstake()
            return
        }

        if (nameError === '' && ratingError === '' && messageError === '' && ReviewStore.name !=='' && ReviewStore.messageBody!=='') {

            axios.post('http://localhost:8080/api/reviewCreate', {
                name_person: ReviewStore.name,
                rating: ReviewStore.rating,
                massageBody: ReviewStore.messageBody
            })
                .then(response => {
                    console.log(response.data);
                    ReviewStore.setMessageBody('')
                    ReviewStore.setName('')
                    ReviewStore.setRating(0)
                })
                .catch(error => {
                    console.error(error);
                });

            const namesInput1 = document.getElementById('names') as HTMLInputElement | null;
            if (namesInput1) {
                namesInput1.value = '';
            }
            const namesInput2 = document.getElementById('message') as HTMLInputElement | null;
            if (namesInput2) {
                namesInput2.value = '';
            }
            setRating(0)
        } else {
            if(ReviewStore.name===''){
                setNameError('Пожалуйста введите ваше имя')
            } else if(ReviewStore.messageBody===''){
                setMessageError('Напишите, пожалуйста, ваш отзыв')
            }else{
                alert('Произошла непридвиденная ошибка')
            }
        }
    }




    return (
        <div className="h-full w-full flex flex-col items-center justify-center mt-4">
            <div className='flex flex-row gap-10'>
                <div className='flex flex-col gap-1'>
                    <h1 className="text-2xl font-bold  flex justify-center">Введите ваше имя</h1>
                    <span className='text-[red]'> {nameError.length > 0 ? nameError : ''}</span>
                    <input
                        id="names"
                        className={`border rounded-md px-4 py-2 mb-4 ${nameError.length > 0 ? 'border-[red]' : 'border-gray-300'}`}
                        placeholder="Ваше имя"
                        onChange={handleCraftReview}
                        onBlur={() => handleValidation(1)}
                    />
                    <div className='flex flex-col gap-1'>
                        <h1 className="text-2xl font-bold  flex justify-end">Введите оценку</h1>
                        <div className="flex items-center mb-4 justify-end flex-row gap-1">
                        <span className='text-[red]'> {ratingError.length > 0 ? ratingError : ''}</span>
                            {[1, 2, 3, 4, 5].map((value) => (
                                <FaStar
                                    key={value}
                                    className={`cursor-pointer ${value <= rating ? 'text-yellow-500' : 'text-gray-400'
                                        }`}
                                    onClick={() => handleRatingChange(value)}
                                    onBlur={() => handleValidation(2)}
                                />
                            ))}
                           
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <h1 className="text-2xl font-bold flex justify-center ">Введите отзыв:</h1>
                    <span className='text-[red]'> {messageError.length > 0 ? messageError : ''}</span>
                    <textarea
                        id="message"
                        onChange={handleCraftReview}
                        onBlur={() => handleValidation(3)}
                        className={`border rounded-md px-4 py-5 mb-4 ${messageError.length > 0 ? 'border-[red]' : 'border-gray-300 '}`}
                        placeholder="Введите ваш отзыв здесь."
                    ></textarea>
                </div>
            </div>
            <button onClick={HandleDataPush} className="bg-[orange] px-4 py-2 text-white rounded-md mb-4">
                Submit
            </button>
            <button onClick={()=>Store.handleButtonClickMisstake()}>misstake</button>
        </div>
    )
}

export default observer(CreateReview)