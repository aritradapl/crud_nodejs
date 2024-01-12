document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    var name = document.getElementById('name');
    var address = document.getElementById('address');
    var phone = document.getElementById('phone');
    form.addEventListener('submit', e => {
        if (validateInputs()) {
            e.preventDefault();
        }
    });
    $("#name").keyup(function () {
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
    });
    $("#address").keyup(function () {
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
    });
    $("#phone").keyup(function () {
        this.value = this.value.replace(/[^0-9]/g, '');
        let phoneValueLength = (this.value).length;
        let greaterThanTen = (phoneValueLength != 10) && (this.value != '') ? 1 : 0;
        switch (greaterThanTen) {
            case 1:
                setError('phone_error', '* Please Enter 10 Digit Phone Number');
                break;
            case 0:
                setSuccess('phone_error');
                break;
        }
    });
    const setError = (element, message) => {
        document.getElementById(element).innerHTML = message;
    }
    const setSuccess = (element) => {
        document.getElementById(element).innerHTML = ' ';
    }
    const validateInputs = () => {
        let is_valid = false;
        var nameValue = name.value.trim();
        var addressValue = address.value.trim();
        var phoneValue = phone.value.trim();

        if (nameValue === '') {
            is_valid = true;
            setError('name_error', '* Name is required');
        }
        else {
            setSuccess('name_error');
        }
        if (addressValue === '') {
            is_valid = true;
            setError('address_error', '* Address is required');
        }
        else {
            setSuccess('address_error');
        }
        if (phoneValue === '') {
            is_valid = true;
            setError('phone_error', '* Mobile Number is required');
        }
        else {
            setSuccess('phone_error');
        }
        return is_valid;
    }
});
