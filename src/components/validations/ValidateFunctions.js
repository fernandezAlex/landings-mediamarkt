

export function validateName (name) {
    const NAME_REGEX = /^[a-z-A-Z\D]+$/;
    return NAME_REGEX.test(name)
}
export function validateNif (nif) {
    const NIF_REGEX = /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/;
    return NIF_REGEX.test(nif)
}
export function validatePosition (position) {
    const POSITION_REGEX = /^[a-z-A-Z\D]+$/;
    return POSITION_REGEX.test(position)
}
export function validateEmail (email) {
    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return EMAIL_REGEX.test(email)
}
export function validateDni (dni) {
    const DNI_REGEX = /^(\d{8})([A-Z])$/;
    return DNI_REGEX.test(dni)
}
export function validateNie (nie) {
    const NIE_REGEX = /^[XYZ]\d{7,8}[A-Z]$/;
    return NIE_REGEX.test(nie)
}
export function validatePhone (phone) {
    const PHONE_REGEX = /^[9|7|6]{1}([\d]{2}[-]*){3}[\d]{2}$/;
    return PHONE_REGEX.test(phone)
}
export function validateMessage (message) {
    const MESSAGE_REGEX = /^[a-zA-Z0-9]{20,2000}$/;
    return MESSAGE_REGEX.test(message)
}
export function validateMultipleOptions (multipleOptions) {
    console.log('function validateMultipleOptions');
    //console.log(typeof(multipleOptions) === "undefined" ? 'no existe' : multipleOptions);
    typeof(multipleOptions) === "undefined" ? console.log('no existe - false') : multipleOptions.length > 0  ? console.log('length - true') : console.log('length - false');
    return typeof(multipleOptions) === "undefined" ? false : multipleOptions.length > 0  ? true : false;
}