var validTextAreaInput = true;

let activeFormWithCheck = function() {
    let checkbox = document.getElementById("myCheckBox");
    let hiddenForm = document.getElementsByClassName("cursoUDEC")[0];


    checkbox.addEventListener('change', function(event) {
        const isChecked = event.target.checked;

        if (isChecked) {
            hiddenForm.style.display = "block";
        } else {
            hiddenForm.style.display = "none";
        }
    })
}


let showPlaceHolder = function() {
    let textarea = document.getElementById("textAreElement");

    textarea.addEventListener('blur', function(event) {
        textarea.placeholder = "";
    });
    textarea.addEventListener('click', function(event) {
        textarea.placeholder = "Example: Leidy Duque Hoyos, egresada UDEC en Contaduria, es especialista en NIIF y ofrece servicios para organizaciones, instituciones o entidades públicas, como manejar e interpretar la contabilidad de la organización o persona, con la finalidad de producir informes para la gerencia y para terceros. Contacto: Facebook: @LeidyUDC - leidy1987@hotmail.com - WhatsApp 016793762.";
    });
}

let getInformation = function() {
    let form = document.getElementById("form");
    let formValues = {
        fullname: "",
        document: "",
        email: "",
        phoneNumer: "",
        UDEC: false,
        title: "",
        address: "",
        location: "",
        profile: ""
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validTextAreaInput) {
            if (formValues.UDEC) formValues.title = document.getElementById("title").value.trim();
            formValues.fullname = document.getElementById("fullname").value.trim();
            formValues.document = document.getElementById("document").value.trim();
            formValues.email = document.getElementById("email").value.trim();
            formValues.phoneNumer = document.getElementById("phoneNumber").value.trim();
            formValues.UDEC = document.getElementById("myCheckBox").value.trim();
            formValues.address = document.getElementById("address").value.trim();
            formValues.location = document.getElementById("location").value.trim();
            formValues.profile = document.getElementById("textAreElement").value.trim();

            // Here goes code for success message
        } else {
            // code for error message about incorrect input text
        }
    });
}

let validateFormLength = function() {
    let textarea = document.getElementById("textAreElement");
    let textInput = "";
    let errorBox;

    textarea.onkeyup = function(event) {
        errorBox = document.getElementById("errorMessage");
        textInput = document.getElementById("textAreElement").value;
        if (textInput.length > 700) {
            errorBox.style.display = "block";
            validTextAreaInput = false;
        } else {
            errorBox.style.display = "none";
            validTextAreaInput = true;
        }
    }
}

activeFormWithCheck();
showPlaceHolder();
getInformation();
validateFormLength();