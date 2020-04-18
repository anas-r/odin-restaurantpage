export const render = () => {
    const page = document.querySelector('.page');
    page.innerHTML = `
        <form id="form_106440" method="post" action="">
            <div class="form_description">
                <h2>Reservation</h2>
                <p style="margin-left: 31px">We'll get back to you as soon as we process your information!</p>
                    <label class="description">Name </label>
                    <div>
                        <input id="element_1" name="element_1" class="element text medium" type="text"
                               maxLength="255"
                               value=""/>
                    </div>
                    <label class="description">E-mail </label>
                    <div>
                        <input id="element_2" name="element_2" class="element text medium" type="text"
                               maxLength="255"
                               value=""/>
                    </div>
                    <label class="description">Reservation details </label>
                    <div>
                        <textarea></textarea>
                    </div>
                    <input id="saveForm" class="button_text" type="submit" name="submit" value="Submit"/>

        </form>`
}