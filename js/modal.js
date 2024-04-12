function createModal() {
    const modal = document.createElement('div'),
        modalContent = document.createElement('div');

        modal.classList.add('modal');
        modalContent.classList.add('modal__content');

    let title = document.createElement('h2'),
        form = document.createElement('form'),

        inputNameContainer = document.createElement('div'),
        InputName = document.createElement('input'),
        labelName = document.createElement('label'),

        inputLastnameContainer = document.createElement('div'),
        InputLastname = document.createElement('input'),
        labelLastname = document.createElement('label'),

        inputSurnameContainer = document.createElement('div'),
        InputSurname = document.createElement('input'),
        labelSurname = document.createElement('label'),

        inputDateBirthContainer = document.createElement('div'),
        InputDateBirth = document.createElement('input'),
        labelDateBirth = document.createElement('label'),

        inputSeriesPassportContainer = document.createElement('div'),
        InputSeriesPassport = document.createElement('input'),
        labelSeriesPassport = document.createElement('label'),

        inputNumberPassportContainer = document.createElement('div'),
        InputNumberPassport = document.createElement('input'),
        labelNumberPassport = document.createElement('label'),

        inputInnContainer = document.createElement('div'),
        InputInn = document.createElement('input'),
        labelInn = document.createElement('label'),

        inputSnilsContainer = document.createElement('div'),
        InputSnils = document.createElement('input'),
        labelSnils = document.createElement('label'),

        inputAdressContainer = document.createElement('div'),
        InputAdress = document.createElement('input'),
        labelAdress = document.createElement('label'),

        inputTypeContainer = document.createElement('div'),
        InputType = document.createElement('input'),
        labelType = document.createElement('label'),

        inputPhoneNumberContainer = document.createElement('div'),
        InputPhoneNumber = document.createElement('input'),
        labelPhoneNumber = document.createElement('label'),

        btn = document.createElement('button');

        title.textContent = 'Заполните форму';
        btn.textContent = 'Получить деньги';
        labelName.textContent = 'Имя';
        labelLastname.textContent = 'Фамилия';
        labelSurname.textContent = 'Отчество';
        labelDateBirth.textContent = 'Дата рождения';
        labelSeriesPassport.textContent = 'Серия паспорта';
        labelNumberPassport.textContent = 'Номер паспорта';
        labelInn.textContent = 'ИНН';
        labelSnils.textContent = 'Снилс';
        labelAdress.textContent = 'Адрес недвижимости';
        labelType.textContent = 'Тип';
        labelPhoneNumber.textContent = 'Номер телефона';

        title.classList.add('text', 'modal__title')
        form.classList.add('modal__form')

        inputNameContainer.classList.add('input__container')
        InputName.classList.add('modal__input')
        labelName.classList.add('modal__label')

        inputLastnameContainer.classList.add('input__container')
        InputLastname.classList.add('modal__input')
        labelLastname.classList.add('modal__label')

        inputSurnameContainer.classList.add('input__container')
        InputSurname.classList.add('modal__input')
        labelSurname.classList.add('modal__label')

        inputDateBirthContainer.classList.add('input__container')
        InputDateBirth.classList.add('modal__input')
        labelDateBirth.classList.add('modal__label')

        inputSeriesPassportContainer.classList.add('input__container')
        InputSeriesPassport.classList.add('modal__input')
        labelSeriesPassport.classList.add('modal__label')

        inputNumberPassportContainer.classList.add('input__container')
        InputNumberPassport.classList.add('modal__input')
        labelNumberPassport.classList.add('modal__label')

        inputInnContainer.classList.add('input__container')
        InputInn.classList.add('modal__input')
        labelInn.classList.add('modal__label')

        inputSnilsContainer.classList.add('input__container')
        InputSnils.classList.add('modal__input')
        labelSnils.classList.add('modal__label')

        inputAdressContainer.classList.add('input__container')
        InputAdress.classList.add('modal__input')
        labelAdress.classList.add('modal__label')

        inputTypeContainer.classList.add('input__container')
        InputType.classList.add('modal__input')
        labelType.classList.add('modal__label')

        inputPhoneNumberContainer.classList.add('input__container-number')
        InputPhoneNumber.classList.add('modal__input-number')
        labelPhoneNumber.classList.add('modal__label')

        btn.classList.add('modal__btn')

        inputNameContainer.append(InputName, labelName)
        inputLastnameContainer.append(InputLastname, labelLastname)
        inputSurnameContainer.append(InputSurname, labelSurname)
        inputDateBirthContainer.append(InputDateBirth, labelDateBirth)
        inputSeriesPassportContainer.append(InputSeriesPassport, labelSeriesPassport)
        inputNumberPassportContainer.append(InputNumberPassport, labelNumberPassport)
        inputSnilsContainer.append(InputSnils, labelSnils)
        inputAdressContainer.append(InputAdress, labelAdress)
        inputInnContainer.append(InputInn, labelInn)
        inputTypeContainer.append(InputType, labelType)
        inputPhoneNumberContainer.append(InputPhoneNumber, labelPhoneNumber)

        form.append(inputNameContainer, inputLastnameContainer, inputSurnameContainer, inputDateBirthContainer, inputSeriesPassportContainer, inputNumberPassportContainer, inputInnContainer, inputSnilsContainer, inputAdressContainer, inputTypeContainer, inputPhoneNumberContainer);
        modalContent.append(title, form, btn)
        modal.append(modalContent);

        modal.addEventListener('click', (e) => {
        const click = e.composedPath().includes(modalContent)
        if (!click) {
          modal.remove()
        }
      })

      document.body.append(modal);
}

document.getElementById('hero__btn').addEventListener('click', function() {createModal()})
document.getElementById('hero__btn-auth').addEventListener('click', function() {createModal()})
document.getElementById('hero__btn-sign').addEventListener('click', function() {createModal()})
document.getElementById('about__btn').addEventListener('click', function() {createModal()})
document.getElementById('advantages__btn').addEventListener('click', function() {createModal()})
document.getElementById('questions__btn').addEventListener('click', function() {createModal()})