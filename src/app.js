import React, { useEffect, useState } from 'react';
import styles from './styles/main.scss';
import useInput from './input';
const App = () => {
    const [user] = useState('Человек')
    const [changeTime] = useState('последние изменения 15 мая 2012 в 14:55:17')
    const email = useInput('', {isEmail: true})
    const name = useInput('', {currectName: true})
    const surname = useInput('', {currectSurname: true})
    const password = useInput('', {currectPassword: true})
    
      return (
        <section className={styles.section}>
            <p className={styles.name}>Здравствуйте, <span>{user}</span></p>
            <form className={styles.form}>
                <div className={styles['form-block']}>
                    <div className={styles['input__wrapper']}>
                        <p className={styles['input__name']}>Имя<sup>*</sup></p>
                        <input onChange={e => name.onChange(e)} onBlur={e => name.onBlur(e)} className={styles['input__field']} type='text' placeholder='Введите Имя' />
                        {(name.isDirty && name.nameError) && <div className={styles['input__error']}>Не менее 2 символов кириллицей</div>}
                    </div>
                    <div className={styles['input__wrapper']}>
                        <p className={styles['input__name']}>Фамилия<sup>*</sup></p>
                        <input onChange={e => surname.onChange(e)} onBlur={e => surname.onBlur(e)} className={styles['input__field']} placeholder='Введите Фамилию' type='text' />
                        {(surname.isDirty && surname.surnameError) && <div className={styles['input__error']}>Не менее 2 символов кириллицей</div>}
                    </div>
                    <div className={styles['input__wrapper']}>
                        <p className={styles['input__name']}>Ваш город<sup>*</sup></p>
                        <select className={styles['input__select']}>
                            <option value="">Выберите город</option>
                        </select>
                    </div>
                </div>
                <div className={styles['form-block']}>
                    <div className={styles['input__wrapper']}>
                        <p className={styles['input__name']}>Пароль<sup>*</sup></p>
                        <input onChange={e => password.onChange(e)} onBlur={e => password.onBlur(e)} name='password' className={styles['input__field']} type='password' placeholder='Введите пароль' />
                        {(password.isDirty && password.passwordError) && <div className={styles['input__error']}>Не менее 6 латинских букв</div>}
                    </div>
                    <div className={styles['input__wrapper']}>
                        <p className={styles['input__name']}>Пароль еще раз<sup>*</sup></p>
                        <input className={styles['input__field']} type='password' placeholder='Повторите Пароль' />
                    </div>
                </div>
                <div className={styles['form-block']}>
                    <div className={styles['input__wrapper']}>
                        <p className={styles['input__name']}>Номер телефона</p>
                        <input className={styles['input__field']} type='tel' inputMode="tel" placeholder='+7 (***) ***-**-**' />
                    </div>
                    <div className={styles['input__wrapper']}>
                        <p className={styles['input__name']}>Электронная почта</p>
                        <input onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)} value={email.value} name='email' className={styles['input__field']} type='email' inputMode="email" />
                        {(email.isDirty && email.emailError) && <div className={styles['input__error']}>Некорректный email</div>}
                    </div>
                    <div className={styles['input__wrapper']}>
                        <p className={styles['input__name']}>Я согласен</p>
                        <input className={styles['input__checkbox']} type='checkbox' id='checkbox' hidden />
                        <label htmlFor='checkbox'>принимать актуальную информацию на емейл</label>
                    </div>
                </div>
                <div className={styles.change}>
                    <button disabled={!email.inputValid || !name.inputValid || !surname.inputValid || !password.inputValid} className={styles['change__btn']} type='submit'>Изменить</button>
                    <span className={styles['change__time']}>{changeTime}</span>
                </div>
            </form>
        </section>
    )
}

export default App