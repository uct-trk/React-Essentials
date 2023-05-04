import * as yup from 'yup'
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const basicSchema = yup.object().shape({
    email: yup.string().email('Geçerli bir email giriniz').required("Zorunlu alan"),
    age: yup.number().positive("Pozitif sayı giriniz").integer("Tam sayı giriniz").required("Zorunlu alan"),
    password: yup.string().min(5, "Minimum 5 karakter giriniz").matches(passwordRules, {message: 'Lütfen en az 1 büyük harf 1 küçük harf ve 1 sayı giriniz',}).required("Zorunlu alan"),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Şifreler eşleşmiyor').required('Tekrar şifre girmek zorunludur'),
})